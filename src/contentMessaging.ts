window.onload = () => {
  testMessage();
};

function testMessage() {
  chrome.runtime.sendMessage({ payload: "Hello from a content" }, () => {
    console.log("Background received");
  });
}

chrome.runtime.onMessage.addListener((req, sender) => {
  console.log({
    req,
    sender,
  });
});
