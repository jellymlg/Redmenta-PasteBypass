chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: 'black'}, function() {
        console.log("Hi");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'redmenta.com'},
            })
            ],
              actions: [new chrome.declarativeContent.ShowPageAction()]
            }]
        );
    });
});