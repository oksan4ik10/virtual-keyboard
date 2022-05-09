import createKeyboard from "./createKeyboard";
import inputText from "./inputText";

const addClassActive = (code) => {
  const elem = document.querySelector(`[data-code="${code}"]`);

  if (!elem) return;

  const lang = localStorage.getItem("lang") ? localStorage.getItem("lang") : "ru";
  const setting = localStorage.getItem("setting") ? localStorage.getItem("setting") : "low";
  let countCaps = setting === "low";

  if (code === "CapsLock") {
    const keyboards = document.querySelector(".keyboards");
    if (countCaps) {
      localStorage.setItem("setting", "up");
      createKeyboard(lang, "up", keyboards);
      elem.classList.add("active");
      countCaps = false;
    } else {
      elem.classList.remove("active");
      localStorage.setItem("setting", "low");
      createKeyboard(lang, "low", keyboards);

      countCaps = true;
    }
    return;
  }

  elem.classList.add("active");

  inputText(elem);
};

export default addClassActive;
