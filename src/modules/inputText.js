const inputText = (elem) => {
  const textarea = document.getElementById("text");
  if (elem.getAttribute("data-code") === "Backspace") {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd-1;
    const len = textarea.value.length;
    textarea.value = textarea.value.substring(0, start - 1) + textarea.value.substring(start, len);
    textarea.selectionStart = start;
    textarea.selectionEnd = end;
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
  if (/Arrow*/.test(elem.getAttribute("data-code"))) {
    textarea.value += elem.textContent;
  }
  if (elem.getAttribute("data-code") === "Delete") {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const len = textarea.value.length;
    textarea.value = textarea.value.substring(0, start) + textarea.value.substring(start + 1, len);
    textarea.selectionStart = start;
    textarea.selectionEnd = end;
    return;
  }

  if (elem.matches(".spec")) return;

  textarea.value += elem.textContent;
};

export default inputText;
