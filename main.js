const generateButton = document.getElementById("generate-button");

function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
  const lowercaseChars = 'abcdefjhijklmnopqrstuvwxyz';
  const uppercaseChars = lowercaseChars.toUpperCase();
  const numberChars = '0123456789';
  const symbolChars = '`~!@#$%^&*()_+=-{}[]|\\:;"<>,.?/';
  let allowedChars = '';
  let password = '';

  allowedChars += includeLowerCase ? lowercaseChars : '';
  allowedChars += includeUpperCase ? uppercaseChars : '';
  allowedChars += includeNumbers ? numberChars : '';
  allowedChars += includeSymbols ? symbolChars : '';

  if (length <= 0) {
    return `(Password length must be atleast 1)`;
  }
  if (allowedChars.length === 0) {
    return `(Atleast 1 set of characters need to be selected)`;
  }
  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randIndex];
  }
  return password;
}
generateButton.addEventListener("click", () => {
const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const generate = document.getElementById("generated");

generate.innerHTML = `Generated Password:<br> ${generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols)}`;
});