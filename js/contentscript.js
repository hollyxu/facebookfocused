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

function hideElements() {
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
            distractingDiv.style.height = 0;
            distractingDiv.style.visibility = 'none';
        }
    });
}

// -------------------------------------------------- 
// Setup on pageload

// Catch links between Facebook pages
var contentPane = document.getElementById('mainContainer');
contentPane.addEventListener('DOMNodeRemovedFromDocument', 
    pageLoaded, false);

// Initial pageload
pageLoaded();
//hideElements();
