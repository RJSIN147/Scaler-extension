// popup.js - Handles UI interactions

document.addEventListener('DOMContentLoaded', () => {
    const checkBtn = document.getElementById('checkBtn');
    const resultLink = document.getElementById('resultLink');
    const statusContainer = document.getElementById('statusContainer');
    const statusText = document.getElementById('statusText');
    const btnText = checkBtn.querySelector('.btn-text');
    const loader = checkBtn.querySelector('.loader-dots');

    function resetUI() {
        statusContainer.className = 'status-container';
        statusText.textContent = 'Ready to check';
        resultLink.classList.add('hidden');
        resultLink.href = '#';
        checkBtn.disabled = false;
        btnText.classList.remove('hidden');
        loader.classList.add('hidden');
    }

    function setLoading(isLoading) {
        if (isLoading) {
            checkBtn.disabled = true;
            btnText.classList.add('hidden');
            loader.classList.remove('hidden');
            statusText.textContent = 'Searching...';
        } else {
            checkBtn.disabled = false;
            btnText.classList.remove('hidden');
            loader.classList.add('hidden');
        }
    }

    function setStatus(type, message) {
        statusContainer.className = `status-container ${type}`;
        statusText.textContent = message;
    }

    checkBtn.addEventListener('click', async () => {
        resetUI();
        setLoading(true);

        try {
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

            if (!tab || !tab.id) {
                throw new Error('Could not access current tab.');
            }

            if (!tab.url.includes('scaler.com')) {
                setLoading(false);
                setStatus('warning', 'Please open a Scaler problem page.');
                return;
            }

            chrome.tabs.sendMessage(tab.id, { action: 'getTitle' }, (response) => {
                if (chrome.runtime.lastError) {
                    setLoading(false);
                    setStatus('error', 'Please refresh the page.');
                    return;
                }

                if (!response || !response.title) {
                    setLoading(false);
                    setStatus('error', 'Could not find problem title.');
                    return;
                }

                const title = response.title;
                // VISUAL DEBUG: Keep this as requested!
                statusText.textContent = `Searching: "${title}"...`;

                chrome.runtime.sendMessage({ action: 'checkProblem', title: title }, (result) => {
                    setLoading(false);

                    if (result.error) {
                        setStatus('error', `Error: ${result.error}`);
                    } else if (result.found && result.url) {
                        setStatus('success', 'Problem Match Found!');
                        resultLink.href = result.url;
                        resultLink.classList.remove('hidden');
                    } else {
                        setStatus('error', `No match for "${title}"`);
                    }
                });
            });

        } catch (err) {
            setLoading(false);
            setStatus('error', err.message);
        }
    });
});
