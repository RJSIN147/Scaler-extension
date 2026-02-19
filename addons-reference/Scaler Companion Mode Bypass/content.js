// Content script to intercept and modify Scaler API responses

(function() {
    'use strict';

    // Target URL pattern for meetings API
    const MEETINGS_API_PATTERN = /https:\/\/www\.scaler\.com\/meetings\/[^\/]+\/item/;

    // Store original fetch function
    const originalFetch = window.fetch;

    // Override fetch to intercept meetings API calls
    window.fetch = function(...args) {
        const url = typeof args[0] === 'string' ? args[0] : args[0]?.url;

        if (url && MEETINGS_API_PATTERN.test(url)) {
            // Call original fetch
            return originalFetch.apply(this, args)
                .then(response => {
                    // Clone the response so we can modify it
                    const clonedResponse = response.clone();

                    // Only modify JSON responses
                    if (response.headers.get('content-type')?.includes('application/json')) {
                        return clonedResponse.json()
                            .then(data => {
                                if (data && data.meeting && data.meeting.companion_mode_config) {
                                    data.meeting.companion_mode_config = {
                                        allowed: false,
                                        force: false,
                                        bypass: false
                                    };
                                }

                                // Create a new response with modified data
                                const modifiedResponse = new Response(JSON.stringify(data), {
                                    status: response.status,
                                    statusText: response.statusText,
                                    headers: response.headers
                                });

                                return modifiedResponse;
                            })
                            .catch(error => {
                                return response;
                            });
                    }

                    return response;
                })
                .catch(error => {
                    throw error;
                });
        }

        // For all other requests, use original fetch
        return originalFetch.apply(this, args);
    };

    // Also override XMLHttpRequest for older implementations
    const originalOpen = XMLHttpRequest.prototype.open;
    const originalSend = XMLHttpRequest.prototype.send;

    XMLHttpRequest.prototype.open = function(method, url, ...args) {
        this._url = url;
        this._method = method;
        return originalOpen.apply(this, [method, url, ...args]);
    };

    XMLHttpRequest.prototype.send = function(body) {
        if (this._url && MEETINGS_API_PATTERN.test(this._url)) {
            // Override the onload handler to modify the response
            const originalOnLoad = this.onload;
            const originalOnReadyStateChange = this.onreadystatechange;

            this.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) {
                    try {
                        if (this.responseType === '' || this.responseType === 'text') {
                            const responseText = this.responseText;
                            if (responseText) {
                                const data = JSON.parse(responseText);

                                if (data && data.meeting && data.meeting.companion_mode_config) {
                                    data.meeting.companion_mode_config = {
                                        allowed: false,
                                        force: false,
                                        bypass: false
                                    };

                                    // Override response properties
                                    Object.defineProperty(this, 'responseText', {
                                        get: function() { return JSON.stringify(data); }
                                    });

                                    Object.defineProperty(this, 'response', {
                                        get: function() { return JSON.stringify(data); }
                                    });
                                }
                            }
                        }
                    } catch (error) {
                        // Ignore modification errors
                    }
                }

                // Call original handlers
                if (originalOnReadyStateChange) {
                    originalOnReadyStateChange.apply(this, arguments);
                }
            };

            // Also handle onload if it's set
            this.onload = function() {
                if (originalOnLoad) {
                    originalOnLoad.apply(this, arguments);
                }
            };
        }

        return originalSend.apply(this, [body]);
    };


    if (chrome && chrome.runtime) {
        try {
            chrome.runtime.sendMessage({
                action: 'contentScriptLoaded',
                url: window.location.href
            });
        } catch (e) {
            // Ignore messaging errors
        }
    }
})();