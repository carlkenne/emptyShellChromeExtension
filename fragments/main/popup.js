/* global chrome, prettyPrint, URI, icaVersionNumber */

function init() {
    var pageData = chrome.extension.getBackgroundPage().selectedAddress;
    $(".placeholder").append(pageData.dataFromPage);
}

window.onload = init;