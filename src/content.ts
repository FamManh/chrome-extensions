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
  chrome.storage.local.get(["enabled"], (result) => {
    const isEnabled = !!result.enabled;
    const settingCheckbox = document.getElementById(
      "darkSetting"
    ) as HTMLInputElement;
    settingCheckbox.checked = isEnabled;
    if (isEnabled) enableDarkMode();
  });
}

function enableDarkMode() {
  const websiteBody = document.getElementsByTagName(
    "ytd-app"
  )[0] as HTMLElement;
  websiteBody.style.backgroundColor = "black";
}

function storageSetting() {
  const settingCheckbox = document.getElementById(
    "darkSetting"
  ) as HTMLInputElement;
  const isEnabled = settingCheckbox.checked;
  const settings = {
    enabled: isEnabled,
  };
  chrome.storage.local.set(settings, () => {
    console.log("Stored: ", settings);
  });
}
