function getPageData(){
	var embedAndRetreive = function() {
		return {
			"dataFromPage": "any data can be retreived from page this way, for i.e: document.location.hostname: " + document.location.hostname
        };
	};
	var pageData = injectScript(embedAndRetreive);
	return pageData;
}

chrome.extension.onRequest.addListener(function(req, sender, sendResponse) {
	sendResponse(getPageData());
});