function incFont(info, tab){
  chrome.tabs.executeScript({
    code: `document.body.style.fontSize="32px"`
  })
}

chrome.contextMenus.create({
  "title": "Super size my font",
  "onclick": incFont,
  "contexts": ["page"]
})