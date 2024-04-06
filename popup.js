chrome.storage.local.get(['snippets'], (result) => {
    if (result.snippets) {
      displaySnippets(result.snippets);
    }
  });
  
  function displaySnippets(snippets) {
    const snippetsContainer = document.getElementById('snippetsContainer');
    snippetsContainer.innerHTML = '';
  
    snippets.forEach((snippet) => {
      const snippetElement = document.createElement('div');
      snippetElement.textContent = snippet;
      snippetsContainer.appendChild(snippetElement);
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const viewSnippetsBtn = document.getElementById('viewSnippetsBtn');
    viewSnippetsBtn.addEventListener('click', () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tab = tabs[0];
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ['content.js']
        });
      });
    });
  });