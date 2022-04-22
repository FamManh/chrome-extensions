chrome.runtime.onInstalled.addListener(() => {
  console.log("Installed");
});

chrome.bookmarks.onCreated.addListener((id, bookmark) => {
  alert(JSON.stringify({ id, bookmark }));
});

chrome.action.onClicked.addListener(function (tab) {
  console.log(tab);
});

chrome.runtime.onMessage.addListener((request, sender, res) => {
  console.log({ request, sender, res });
  res();
});

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.tabs.sendMessage(tabs[0].id, { name: "Manh" });
});
