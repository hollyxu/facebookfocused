// -------------------------------------------------- 
// Helper Functions

function pageLoaded() {
    var redirectURL = 'https://www.facebook.com/messages';
    var needToMatch = /messages/;
    var curURL = window.location.href;
    if (curURL) {
        if (!curURL.match(needToMatch)) {
            // Sends to listener in redirect.js
            chrome.extension.sendRequest({redirect: redirectURL});
        }
    }
}

// -------------------------------------------------- 
// Setup on pageload

// Catch links between Facebook pages
var contentPane = document.getElementById('mainContainer');
contentPane.addEventListener('DOMNodeRemovedFromDocument', 
    pageLoaded, false);

// Initial pageload
pageLoaded();
