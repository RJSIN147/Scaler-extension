// Auto-set the mode badge based on URL param
(function () {
  const type =
    new URLSearchParams(window.location.search).get("type") || "video";
  const badge = document.getElementById("mode-badge");
  badge.textContent = type.toUpperCase();
  badge.className =
    "mode-badge " + (type === "audio" ? "mode-audio" : "mode-video");
})();
