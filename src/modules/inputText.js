const inputText = (elem) => {
  const textarea = document.getElementById("text");
  const len = textarea.value.length;
  let end = textarea.selectionEnd;
  let start = textarea.selectionStart;
  if (start === 0){
    start = len;
  }
  if (elem.getAttribute("data-code") === "Backspace") {

    end -= 1;
    textarea.value = textarea.value.substring(0, start - 1) + textarea.value.substring(start, len);
    textarea.selectionStart = start;
    textarea.selectionEnd = end;
    return;
  }
  if (elem.getAttribute("data-code") === "Enter") {
    textarea.value = `${textarea.value.substring(0, start)}\n${textarea.value.substring(start, len)}`;
    textarea.selectionStart = start + 1;
    textarea.selectionEnd = end + 1;
    return;
  }
  if (elem.getAttribute("data-code") === "Tab") {
    textarea.value = `${textarea.value.substring(0, start)}\t${textarea.value.substring(start, len)}`;
    textarea.selectionStart = start + 1;
    textarea.selectionEnd = end + 1;
    return;
  }

  if (elem.getAttribute("data-code") === "Delete") {
    textarea.value = textarea.value.substring(0, start) + textarea.value.substring(start + 1, len);
    textarea.selectionStart = start;
    textarea.selectionEnd = end;
    return;
  }
  start += 1;
  if (/Arrow*/.test(elem.getAttribute("data-code"))) {
    textarea.value = `${textarea.value.substring(0, start)}${elem.textContent}${textarea.value.substring(start, len)}`;
    textarea.selectionStart = start;
    textarea.selectionEnd = end + 1;
  }

  if (elem.matches(".spec")) return;
  textarea.value = `${textarea.value.substring(0, start)}${elem.textContent}${textarea.value.substring(start, len)}`;
  textarea.selectionStart = start;
  textarea.selectionEnd = end + 1;
};

export default inputText;
