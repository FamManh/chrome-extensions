window.onload = () => {
  const button = document.createElement("button");
  button.id = "darkMode";
  button.innerHTML = "Dark";

  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = "darkSetting";

  document.querySelector("#end").prepend(button, input, "Auto apply?");

  button.addEventListener("click", enableDarkMode);
  input.addEventListener("change", storageSetting);

  checkSetting();
};

function checkSetting() {
  chrome.storage.local.get(['enabled'], (result) => {
      const isEnabled = result.enabled
    document.getElementById("darkSetting").checked = isEnabled
    if(isEnabled) enableDarkMode()
  });
}

function enableDarkMode() {
  document.getElementsByTagName("ytd-app")[0].style.backgroundColor = "black";
}

function storageSetting() {
  const isEnabled = document.getElementById("darkSetting").checked;
  const settings = {
    enabled: isEnabled,
  };
  chrome.storage.local.set(settings, () => {
    console.log("Stored: ", settings);
  });
}
