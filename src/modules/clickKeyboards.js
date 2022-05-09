import addClassActive from "./addClassActive";
import createKeyboard from "./createKeyboard";

const clickKeyboards = () => {
  const keyboards = document.querySelector(".keyboards");
  keyboards.addEventListener("click", (event) => {
    if (!event.target.matches(".key")) return;
    const code = event.target.getAttribute("data-code");
    addClassActive(code);
  });
  document.addEventListener("keyup", (event) => {
    const { code } = event;

    if (((code === "AltLeft") && (event.shiftKey)) || ((code === "ShiftLeft") && (event.altKey))) {
      let lang = localStorage.getItem("lang") ? localStorage.getItem("lang") : "ru";
      const setting = localStorage.getItem("setting") ? localStorage.getItem("setting") : "low";
      lang = lang === "ru" ? "en" : "ru";
      localStorage.setItem("lang", lang);
      createKeyboard(lang, setting, keyboards);

      const shift = document.querySelector("[data-code=ShiftLeft]");
      const alt = document.querySelector("[data-code=AltLeft]");
      shift.classList.add("active");
      alt.classList.add("active");
      setTimeout(() => {
        alt.classList.remove("active");
        shift.classList.remove("active");
      }, 200);
      return;
    }
    if (((code === "ControlLeft") && (event.shiftKey)) || ((code === "ControlLeft") && (event.altKey))) return;
    addClassActive(code);
  });
};

export default clickKeyboards;
