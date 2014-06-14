// Redirect all other Facebook pages to /messages
var redirectURL = 'https://www.facebook.com/messages';
var needToMatch = /messages/;

var curURL = window.location.href;
if (curURL) {
    if (!curURL.match(needToMatch)) {
        // Sends to listener in redirect.js
        chrome.extension.sendRequest({redirect: redirectURL});
    }
}

// Hide annoying elements (ID)... like the Facebook navigation bar
var divsToHide = [
    'pageHead',         // Header
    'pagelet_ticker',   // Sidebar news
    'pagelet_dock'      // Notifications that pop-up
];

divsToHide.forEach(function(elem, index, arr) {
    var divToHide = elem;
    var distractingDiv = document.getElementById(divToHide);
    if (distractingDiv) {
        distractingDiv.style.display = 'none';
    }
});


