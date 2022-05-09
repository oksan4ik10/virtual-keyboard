const inputText = (elem) => {
  const textarea = document.getElementById("text");
  if (elem.getAttribute("data-code") === "Backspace") {
    textarea.value = textarea.value.substring(0, textarea.value.length - 1);
    return;
  }
  if (elem.getAttribute("data-code") === "Enter") {
    textarea.value += "\n";
    return;
  }
  if (elem.getAttribute("data-code") === "Tab") {
    textarea.value += "\t";
    return;
  }
  if (elem.matches(".spec")) return;

  textarea.value += elem.textContent;
};

export default inputText;
