import createKeyboard from "./createKeyboard";

const createPage = () => {
  const lang = localStorage.getItem("lang") ? localStorage.getItem("lang") : "ru";
  const setting = localStorage.getItem("setting") ? localStorage.getItem("setting") : "low";

  const container = document.createElement("div");
  const textarea = document.createElement("textarea");
  const keyboardBlock = document.createElement("div");

  container.classList.add("container");
  textarea.setAttribute("id", "text");
  textarea.setAttribute("cols", 30);
  textarea.setAttribute("rows", 5);

  container.append(textarea);
  keyboardBlock.classList.add("keyboards");

  container.append(createKeyboard(lang, setting, keyboardBlock));

  const desc = document.createElement("h3");
  desc.classList.add("desc");
  desc.textContent = "Alt+Shift (слева) - для измения раскладки ОС: Windows";

  container.append(desc);

  document.body.append(container);
};

export default createPage;
