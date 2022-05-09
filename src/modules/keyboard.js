class Keyboard {
  constructor() {
    this.keyboard = [
      {
        code: "Backquote",
        ru: {
          low: "ё",
          up: "Ё",
          shift: "Ё",
          shiftUp: "ё",
        },
        en: {
          low: "`",
          up: "`",
          shift: "~",
          shiftUp: "~",
        },

      },
      {
        code: "Digit1",
        ru: {
          low: "1",
          up: "1",
          shift: "!",
          shiftUp: "!",
        },
        en: {
          low: "1",
          up: "1",
          shift: "!",
          shiftUp: "!",
        },

      },
      {
        code: "Digit2",
        ru: {
          low: "2",
          up: "2",
          shift: "\"",
          shiftUp: "\"",
        },
        en: {
          low: "2",
          up: "2",
          shift: "@",
          shiftUp: "@",
        },

      },
      {
        code: "Digit3",
        ru: {
          low: "3",
          up: "3",
          shift: "№",
          shiftUp: "№",
        },
        en: {
          low: "3",
          up: "3",
          shift: "#",
          shiftUp: "#",
        },

      },
      {
        code: "Digit4",
        ru: {
          low: "4",
          up: "4",
          shift: ";",
          shiftUp: ";",
        },
        en: {
          low: "4",
          up: "4",
          shift: "$",
          shiftUp: "$",
        },

      },
      {
        code: "Digit5",
        ru: {
          low: "5",
          up: "5",
          shift: "%",
          shiftUp: "%",
        },
        en: {
          low: "5",
          up: "5",
          shift: "%",
          shiftUp: "%",
        },

      },
      {
        code: "Digit6",
        ru: {
          low: "6",
          up: "6",
          shift: ":",
          shiftUp: ":",
        },
        en: {
          low: "6",
          up: "6",
          shift: "^",
          shiftUp: "^",
        },

      },
      {
        code: "Digit7",
        ru: {
          low: "7",
          up: "7",
          shift: "?",
          shiftUp: "?",
        },
        en: {
          low: "7",
          up: "7",
          shift: "&",
          shiftUp: "&",
        },

      },
      {
        code: "Digit8",
        ru: {
          low: "8",
          up: "8",
          shift: "*",
          shiftUp: "*",
        },
        en: {
          low: "8",
          up: "8",
          shift: "*",
          shiftUp: "*",
        },

      },
      {
        code: "Digit9",
        ru: {
          low: "9",
          up: "9",
          shift: "(",
          shiftUp: "(",
        },
        en: {
          low: "9",
          up: "9",
          shift: "(",
          shiftUp: "(",
        },

      },
      {
        code: "Digit0",
        ru: {
          low: "0",
          up: "0",
          shift: ")",
          shiftUp: ")",
        },
        en: {
          low: "0",
          up: "0",
          shift: ")",
          shiftUp: ")",
        },

      },
      {
        code: "Minus",
        ru: {
          low: "-",
          up: "-",
          shift: "_",
          shiftUp: "_",
        },
        en: {
          low: "-",
          up: "-",
          shift: "_",
          shiftUp: "_",
        },

      },
      {
        code: "Equal",
        ru: {
          low: "=",
          up: "=",
          shift: "+",
          shiftUp: "+",
        },
        en: {
          low: "=",
          up: "=",
          shift: "+",
          shiftUp: "+",
        },

      },
      {
        code: "Backspace",
        ru: {
          low: "Backspace",
          up: "Backspace",
          shift: "Backspace",
          shiftUp: "Backspace",
        },
        en: {
          low: "Backspace",
          up: "Backspace",
          shift: "Backspace",
          shiftUp: "Backspace",
        },
        spec: true,
        key2: true,

      },

      // 2 строка

      {
        code: "Tab",
        spec: true,
        ru: {
          low: "Tab",
          up: "Tab",
          shift: "Tab",
          shiftUp: "Tab",
        },
        en: {
          low: "Tab",
          up: "Tab",
          shift: "Tab",
          shiftUp: "Tab",
        },

      },
      {
        code: "KeyQ",
        ru: {
          low: "й",
          up: "Й",
          shift: "Й",
          shiftUp: "й",
        },
        en: {
          low: "q",
          up: "Q",
          shift: "Q",
          shiftUp: "q",
        },

      },
      {
        code: "KeyW",
        ru: {
          low: "ц",
          shiftUp: "ц",
          up: "Ц",
          shift: "Ц",
        },
        en: {
          low: "w",
          shiftUp: "w",
          up: "W",
          shift: "W",
        },

      },
      {
        code: "KeyE",
        ru: {
          low: "у",
          shiftUp: "у",
          up: "У",
          shift: "У",
        },
        en: {
          low: "e",
          shiftUp: "e",
          up: "E",
          shift: "E",
        },

      },
      {
        code: "KeyR",
        ru: {
          low: "к",
          shiftUp: "к",
          up: "К",
          shift: "К",
        },
        en: {
          low: "r",
          shiftUp: "r",
          up: "R",
          shift: "R",
        },

      },
      {
        code: "KeyT",
        ru: {
          low: "е",
          shiftUp: "е",
          up: "Е",
          shift: "Е",
        },
        en: {
          low: "t",
          shiftUp: "t",
          up: "T",
          shift: "T",
        },

      },
      {
        code: "KeyY",
        ru: {
          low: "н",
          shiftUp: "н",
          up: "Н",
          shift: "Н",
        },
        en: {
          low: "y",
          shiftUp: "y",
          up: "Y",
          shift: "Y",
        },

      },
      {
        code: "KeyU",
        en: {
          up: "U",
          shift: "U",
          low: "u",
          shiftUp: "u",
        },
        ru: {
          low: "г",
          shiftUp: "г",
          up: "Г",
          shift: "Г",
        },

      },
      {
        code: "KeyI",
        en: {
          up: "I",
          shift: "I",
          low: "i",
          shiftUp: "i",
        },
        ru: {
          low: "ш",
          shiftUp: "ш",
          up: "Ш",
          shift: "Ш",
        },

      },
      {
        code: "KeyO",
        en: {
          up: "O",
          shift: "O",
          low: "o",
          shiftUp: "o",
        },
        ru: {
          low: "щ",
          shiftUp: "щ",
          up: "Щ",
          shift: "Щ",
        },

      },
      {
        code: "KeyP",
        en: {
          up: "P",
          shift: "P",
          low: "p",
          shiftUp: "p",
        },
        ru: {
          low: "з",
          shiftUp: "з",
          up: "З",
          shift: "З",
        },

      },
      {
        code: "BracketLeft",
        en: {
          up: "[",
          shift: "{",
          low: "[",
          shiftUp: "{",
        },
        ru: {
          low: "х",
          shiftUp: "х",
          up: "Х",
          shift: "Х",
        },

      },
      {
        code: "BracketRight",
        en: {
          up: "]",
          shift: "}",
          low: "]",
          shiftUp: "}",
        },
        ru: {
          low: "ъ",
          shiftUp: "ъ",
          up: "Ъ",
          shift: "Ъ",
        },

      },
      {
        code: "Backslash",
        en: {
          up: "\\",
          shift: "|",
          low: "\\",
          shiftUp: "|",
        },
        ru: {
          up: "\\",
          shift: "/",
          low: "\\",
          shiftUp: "/",
        },

      },

      {
        code: "Delete",
        en: {
          up: "Del",
          shift: "Del",
          low: "Del",
          shiftUp: "Del",
        },
        ru: {
          up: "Del",
          shift: "Del",
          low: "Del",
          shiftUp: "Del",
        },
        spec: true,

      },

      // 3 строка

      {
        code: "CapsLock",
        en: {
          up: "CapsLock",
          shift: "CapsLock",
          low: "CapsLock",
          shiftUp: "CapsLock",
        },
        ru: {
          up: "CapsLock",
          shift: "CapsLock",
          low: "CapsLock",
          shiftUp: "CapsLock",
        },
        spec: true,
        key2: true,

      },
      {
        code: "KeyA",
        en: {
          up: "A",
          shift: "A",
          low: "a",
          shiftUp: "a",
        },
        ru: {
          low: "ф",
          shiftUp: "ф",
          up: "Ф",
          shift: "Ф",
        },

      },
      {
        code: "KeyS",
        en: {
          up: "S",
          shift: "S",
          low: "s",
          shiftUp: "s",
        },
        ru: {
          low: "ы",
          shiftUp: "ы",
          up: "Ы",
          shift: "Ы",
        },

      },
      {
        code: "KeyD",
        en: {
          up: "D",
          shift: "D",
          low: "d",
          shiftUp: "d",
        },
        ru: {
          low: "в",
          shiftUp: "в",
          up: "В",
          shift: "В",
        },

      },
      {
        code: "KeyF",
        en: {
          up: "F",
          shift: "F",
          low: "f",
          shiftUp: "f",
        },
        ru: {
          low: "а",
          shiftUp: "а",
          up: "А",
          shift: "А",
        },

      },
      {
        code: "KeyG",
        en: {
          up: "G",
          shift: "G",
          low: "g",
          shiftUp: "g",
        },
        ru: {
          low: "п",
          shiftUp: "п",
          up: "П",
          shift: "П",
        },

      },
      {
        code: "KeyH",
        en: {
          up: "H",
          shift: "H",
          low: "h",
          shiftUp: "h",
        },
        ru: {
          low: "р",
          shiftUp: "р",
          up: "Р",
          shift: "Р",
        },

      },
      {
        code: "KeyJ",
        en: {
          up: "J",
          shift: "J",
          low: "j",
          shiftUp: "j",
        },
        ru: {
          low: "о",
          shiftUp: "о",
          up: "О",
          shift: "О",
        },

      },
      {
        code: "KeyK",
        en: {
          up: "K",
          shift: "K",
          low: "k",
          shiftUp: "k",
        },
        ru: {
          low: "л",
          shiftUp: "л",
          up: "Л",
          shift: "Л",
        },

      },
      {
        code: "KeyL",
        en: {
          up: "L",
          shift: "L",
          low: "l",
          shiftUp: "l",
        },
        ru: {
          low: "д",
          shiftUp: "д",
          up: "Д",
          shift: "Д",
        },

      },
      {
        code: "Semicolon",
        en: {
          up: ";",
          shift: ":",
          low: ";",
          shiftUp: ":",
        },
        ru: {
          low: "ж",
          shiftUp: "ж",
          up: "Ж",
          shift: "Ж",
        },
      },
      {
        code: "Quote",
        en: {
          up: "'",
          shift: "\"",
          low: "'",
          shiftUp: "\"",
        },
        ru: {
          low: "э",
          shiftUp: "э",
          up: "Э",
          shift: "Э",
        },
      },
      {
        code: "Enter",
        en: {
          up: "Enter",
          shift: "Enter",
          low: "Enter",
          shiftUp: "Enter",
        },
        ru: {
          low: "Enter",
          shiftUp: "Enter",
          up: "Enter",
          shift: "Enter",
        },
        spec: true,
        key2: true,
      },

      // 4 строка

      {
        code: "ShiftLeft",
        en: {
          up: "Shift",
          shift: "Shift",
          low: "Shift",
          shiftUp: "Shift",
        },
        ru: {
          up: "Shift",
          shift: "Shift",
          low: "Shift",
          shiftUp: "Shift",
        },
        spec: true,
        key2: true,
      },
      {
        code: "KeyZ",
        en: {
          up: "Z",
          shift: "Z",
          low: "z",
          shiftUp: "z",
        },
        ru: {
          low: "я",
          shiftUp: "я",
          up: "Я",
          shift: "Я",
        },

      },
      {
        code: "KeyX",
        en: {
          up: "X",
          shift: "X",
          low: "x",
          shiftUp: "x",
        },
        ru: {
          low: "ч",
          shiftUp: "ч",
          up: "Ч",
          shift: "Ч",
        },

      },
      {
        code: "KeyC",
        en: {
          up: "C",
          shift: "C",
          low: "c",
          shiftUp: "c",
        },
        ru: {
          low: "с",
          shiftUp: "с",
          up: "С",
          shift: "С",
        },

      },
      {
        code: "KeyV",
        en: {
          up: "V",
          shift: "V",
          low: "v",
          shiftUp: "v",
        },
        ru: {
          low: "м",
          shiftUp: "м",
          up: "М",
          shift: "М",
        },

      },
      {
        code: "KeyB",
        en: {
          up: "B",
          shift: "B",
          low: "b",
          shiftUp: "b",
        },
        ru: {
          low: "и",
          shiftUp: "и",
          up: "И",
          shift: "И",
        },

      },
      {
        code: "KeyN",
        en: {
          up: "N",
          shift: "N",
          low: "n",
          shiftUp: "n",
        },
        ru: {
          low: "т",
          shiftUp: "т",
          up: "Т",
          shift: "Т",
        },

      },
      {
        code: "KeyM",
        en: {
          up: "M",
          shift: "M",
          low: "m",
          shiftUp: "m",
        },
        ru: {
          low: "ь",
          shiftUp: "ь",
          up: "Ь",
          shift: "Ь",
        },

      },
      {
        code: "Comma",
        en: {
          up: ",",
          shift: "<",
          low: ",",
          shiftUp: "<",
        },
        ru: {
          low: "б",
          shiftUp: "б",
          up: "Б",
          shift: "Б",
        },

      },
      {
        code: "Period",
        en: {
          up: ".",
          shift: ">",
          low: ".",
          shiftUp: ">",
        },
        ru: {
          low: "ю",
          shiftUp: "ю",
          up: "Ю",
          shift: "Ю",
        },

      },
      {
        code: "Slash",
        en: {
          up: "/",
          shift: "?",
          low: "/",
          shiftUp: "?",
        },
        ru: {
          low: ".",
          shiftUp: ",",
          up: ".",
          shift: ",",
        },

      },
      {
        code: "ArrowUp",
        en: {
          up: "&#8593;",
          shift: "&#8593;",
          low: "&#8593;",
          shiftUp: "&#8593;",
        },
        ru: {
          low: "&#8593;",
          shiftUp: "&#8593;",
          up: "&#8593;",
          shift: "&#8593;",
        },
        spec: true,

      },
      {
        code: "ShiftRight",
        en: {
          up: "Shift",
          shift: "Shift",
          low: "Shift",
          shiftUp: "Shift",
        },
        ru: {
          up: "Shift",
          shift: "Shift",
          low: "Shift",
          shiftUp: "Shift",
        },
        spec: true,
        key2: true,

      },

      // 5 строка

      {
        code: "ControlLeft",
        en: {
          up: "Ctrl",
          shift: "Ctrl",
          low: "Ctrl",
          shiftUp: "Ctrl",
        },
        ru: {
          up: "Ctrl",
          shift: "Ctrl",
          low: "Ctrl",
          shiftUp: "Ctrl",
        },
        spec: true,
      },
      {
        code: "MetaLeft",
        en: {
          up: "Win",
          shift: "Win",
          low: "Win",
          shiftUp: "Win",
        },
        ru: {
          up: "Win",
          shift: "Win",
          low: "Win",
          shiftUp: "Win",
        },
        spec: true,

      },
      {
        code: "AltLeft",
        en: {
          up: "Alt",
          shift: "Alt",
          low: "Alt",
          shiftUp: "Alt",
        },
        ru: {
          up: "Alt",
          shift: "Alt",
          low: "Alt",
          shiftUp: "Alt",
        },
        spec: true,

      },
      {
        code: "Space",
        en: {
          up: " ",
          shift: " ",
          low: " ",
          shiftUp: " ",
        },
        ru: {
          up: " ",
          shift: " ",
          low: " ",
          shiftUp: " ",

        },

      },
      {
        code: "AltRight",
        en: {
          up: "Alt",
          shift: "Alt",
          low: "Alt",
          shiftUp: "Alt",
        },
        ru: {
          up: "Alt",
          shift: "Alt",
          low: "Alt",
          shiftUp: "Alt",
        },
        spec: true,

      },

      {
        code: "ArrowLeft",
        en: {
          up: "&#8592;",
          shift: "&#8592;",
          low: "&#8592;",
          shiftUp: "&#8592;",
        },
        ru: {
          up: "&#8592;",
          shift: "&#8592;",
          low: "&#8592;",
          shiftUp: "&#8592;",
        },
        spec: true,

      },
      {
        code: "ArrowDown",
        en: {
          up: "&#8595;",
          shift: "&#8595;",
          low: "&#8595;",
          shiftUp: "&#8595;",
        },
        ru: {
          up: "&#8595;",
          shift: "&#8595;",
          low: "&#8595;",
          shiftUp: "&#8595;",
        },
        spec: true,

      },
      {
        code: "ArrowRight",
        en: {
          up: "&#8594;",
          shift: "&#8594;",
          low: "&#8594;",
          shiftUp: "&#8594;",
        },
        ru: {
          up: "&#8594;",
          shift: "&#8594;",
          low: "&#8594;",
          shiftUp: "&#8594;",
        },
        spec: true,

      },
      {
        code: "ControlRight",
        en: {
          up: "Ctrl",
          shift: "Ctrl",
          low: "Ctrl",
          shiftUp: "Ctrl",
        },
        ru: {
          up: "Ctrl",
          shift: "Ctrl",
          low: "Ctrl",
          shiftUp: "Ctrl",
        },
        spec: true,

      },

    ];
  }
}
export default Keyboard;
