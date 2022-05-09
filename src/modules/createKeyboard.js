import Keyboard from "./keyboard";

const createKeyboard = (lang, setting, block) => {
  // eslint-disable-next-line no-param-reassign
  block.textContent = "";
  const { keyboard } = new Keyboard();
  keyboard.forEach((elem) => {
    const newElem = document.createElement("button");
    newElem.setAttribute("data-code", elem.code);
    newElem.classList.add("key");
    if (elem.spec) newElem.classList.add("spec");
    if (elem.key2) newElem.classList.add("key-2");
    if (elem.code === "Space") newElem.classList.add("space");
    if ((elem.code === "CapsLock") && (setting === "up")) newElem.classList.add("active");

    newElem.innerHTML = elem[lang][setting];

    block.append(newElem);
  });
  return block;
};
export default createKeyboard;
