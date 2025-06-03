const passwordInput = document.getElementById("password");
const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const uppercaseCheckbox = document.getElementById("uppercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copyBtn");

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?/";

function generatePassword() {
  let characters = lowercase;
  if (uppercaseCheckbox.checked) characters += uppercase;
  if (numbersCheckbox.checked) characters += numbers;
  if (symbolsCheckbox.checked) characters += symbols;

  const length = +lengthInput.value;
  let password = "";

  if (characters.length === 0) {
    alert("Veuillez sélectionner au moins un type de caractère !");
    return;
  }

  for (let i = 0; i < length; i++) {
    const randomChar = characters.charAt(Math.floor(Math.random() * characters.length));
    password += randomChar;
  }

  passwordInput.value = password;
}

function copyPassword() {
  if (!passwordInput.value) return alert("Générez d'abord un mot de passe !");
  passwordInput.select();
  passwordInput.setSelectionRange(0, 99999); // pour mobile
  navigator.clipboard.writeText(passwordInput.value).then(() => {
    alert("Mot de passe copié !");
  }).catch(() => {
    alert("Impossible de copier le mot de passe automatiquement, veuillez le copier manuellement.");
  });
}

// Mise à jour du texte de la longueur en temps réel
lengthInput.addEventListener("input", () => {
  lengthValue.textContent = lengthInput.value;
});

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);

// Générer un mot de passe à l'ouverture
window.addEventListener("DOMContentLoaded", generatePassword);
