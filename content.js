chrome.runtime.sendMessage({ action: 'getSnippets' });

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getSnippets') {
    const snippets = Array.from(document.querySelectorAll('div.s > div > span.st')).map((snippet) => {
      return snippet.textContent;
    });
    chrome.runtime.sendMessage({ snippets });
  }
});