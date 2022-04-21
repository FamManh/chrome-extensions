chrome.runtime.onMessage.addListener((request, sender, res) => {
  console.log({ request, sender, res });
  res();
});

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.tabs.sendMessage(tabs[0].id, { name: "Manh" });
});
