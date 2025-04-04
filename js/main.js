const lenghtSittings = document.querySelector(".lenghtSittings");
lenghtSittings.addEventListener("input", (e) => {
  e.target.previousElementSibling.querySelector("h3").innerText = Math.trunc(
    e.target.value
  );
  e.target.style.background = `linear-gradient(
          90deg,
          rgba(164, 255, 175, 1) 0 ${e.target.value * 5}%,
          #18171f ${e.target.value * 5}% 100%
        )`;
});

const includer = document.querySelector(".includer");
const sittingsCheckboxs = document.querySelectorAll(".label-text");
let includesChackBoxs = 0;
function checked(element) {
  if (element.target.checked) {
    includesChackBoxs++;
  } else {
    includesChackBoxs--;
  }
  for (let i = 0; i < 4; i++) {
    if (includesChackBoxs > i) {
      includer.children[i].className = `v${includesChackBoxs}`;
    } else {
      includer.children[i].className = "v0";
    }
  }
  switch (includesChackBoxs) {
    case 1:
      includer.previousElementSibling.innerText = "TOO WEAK!";
      break;
    case 2:
      includer.previousElementSibling.innerText = "WEAK";
      break;
    case 3:
      includer.previousElementSibling.innerText = "MEDIUM";
      break;
    case 4:
      includer.previousElementSibling.innerText = "STRONG";
      break;
    default:
      includer.previousElementSibling.innerText = "";
      break;
  }
}
sittingsCheckboxs[0].firstElementChild.addEventListener("input", checked);
sittingsCheckboxs[1].firstElementChild.addEventListener("input", checked);
sittingsCheckboxs[2].firstElementChild.addEventListener("input", checked);
sittingsCheckboxs[3].firstElementChild.addEventListener("input", checked);

const copyPasword = document.querySelector(".copyPasword");
const generateBtn = document.querySelector(".generateBtn");
/*[1]*/ const lowerCase = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];
/*[0]*/ const upperCase = lowerCase.map((a) => a.toUpperCase());
/*[2]*/ const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
/*[3]*/ const sybol = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  "|",
  "\\",
  ":",
  ";",
  '"',
  "'",
  "<",
  ",",
  ">",
  ".",
  "?",
  "/",
];

generateBtn.addEventListener("click", () => {
  let strPassword = "";
  let itemsArr = [];
  let helper;
  if (sittingsCheckboxs[0].firstElementChild.checked) {
    itemsArr.push(upperCase);
  }
  if (sittingsCheckboxs[1].firstElementChild.checked) {
    itemsArr.push(lowerCase);
  }
  if (sittingsCheckboxs[2].firstElementChild.checked) {
    itemsArr.push(numbers);
  }
  if (sittingsCheckboxs[3].firstElementChild.checked) {
    itemsArr.push(sybol);
  }
  if (Math.trunc(lenghtSittings.value) === 0 || includesChackBoxs === 0) {
    return null;
  } else {
    for (let i = 0; i < Math.trunc(lenghtSittings.value); i++) {
      helper = Math.trunc(includesChackBoxs * Math.random());
      strPassword +=
        itemsArr[helper][Math.trunc(itemsArr[helper].length * Math.random())];
    }
    copyPasword.firstElementChild.innerText = strPassword;
    copyPasword.firstElementChild.style.color = "#E6E5EA";
  }
});

const btnCopy = document.querySelector(".btnCopy");
btnCopy.addEventListener("click", () => {
  let text = copyPasword.firstElementChild.innerText;
  if (text !== "") {
    navigator.clipboard.writeText(text);
  }
});
