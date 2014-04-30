chrome.extension.onRequest.addListener(function(request, sender) {
    console.log('request received');
    chrome.tabs.update(sender.tab.id, {url: request.redirect});
});
