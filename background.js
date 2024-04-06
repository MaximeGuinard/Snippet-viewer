chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
  });
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.snippets) {
      chrome.storage.local.set({ snippets: request.snippets });
    }
  });
  
  chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ snippets: [] });
  });