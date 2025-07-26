const passwordInput = document.getElementById("passwordInput");
const strengthBar = document.getElementById("strengthBar");
const feedbackText = document.getElementById("feedback");
const strengthLabel = document.getElementById("strengthLabel");
const crackTime = document.getElementById("crackTime");
const toggleBtn = document.getElementById("togglePassword");

toggleBtn.addEventListener("click", () => {
  const type = passwordInput.type === "password" ? "text" : "password";
  passwordInput.type = type;
  toggleBtn.textContent = type === "password" ? "Show" : "Hide";
});

const wordlist = [];

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  const result = zxcvbn(password);

  const score = result.score;
  const feedback = result.feedback.suggestions.join(" ") || "Strong password!";
  const colors = ["bg-red-500", "bg-orange-400", "bg-yellow-400", "bg-green-400", "bg-green-600"];
  const widths = ["w-1/5", "w-2/5", "w-3/5", "w-4/5", "w-full"];
  const strengthLevels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];

  strengthBar.className = `h-3 rounded-full transition-all duration-300 ${colors[score]} ${widths[score]}`;
  strengthLabel.textContent = `Strength: ${strengthLevels[score]}`;
 
  let estimatedTime = "";

   if (score <= 1 || password.length < 6) {
     estimatedTime = "a few seconds";
   } else if (score === 2) {
    estimatedTime = "a few minutes";
   } else if (score === 3) {
    estimatedTime = "several hours";
   } else if (score === 4 && password.length >= 12) {
    estimatedTime = "several years";
   } else {
    estimatedTime = "1–2 days";
   }

crackTime.textContent = `Estimated time to crack: ${estimatedTime}`;


  feedbackText.textContent = feedback;
});

function generateWordlist() {
  const name = document.getElementById("name").value.trim();
  const dob = document.getElementById("dob").value.trim();
  const pet = document.getElementById("pet").value.trim();


  wordlist.length = 0; // reset

  const base = [name, dob, pet].filter(Boolean);
  const suffixes = ["", "123", "!", "@", "#", "2025"];

  base.forEach(item => {
    suffixes.forEach(suffix => {
      const word = item + suffix;
      wordlist.push(word);
      wordlist.push(word.toLowerCase());
      wordlist.push(word.toUpperCase());
      wordlist.push(leetspeak(word));
    });
  });

  document.getElementById("status").textContent = `✅ Generated ${wordlist.length} passwords`;
  document.getElementById("wordlistOutput").textContent = wordlist.join("\n");
}

function downloadWordlist() {
  if (wordlist.length === 0) {
    alert("Generate the wordlist first!");
    return;
  }

  const blob = new Blob([wordlist.join("\n")], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "custom_wordlist.txt";
  a.click();
  URL.revokeObjectURL(url);
}

function leetspeak(word) {
  return word
    .replace(/a/gi, "4")
    .replace(/e/gi, "3")
    .replace(/i/gi, "1")
    .replace(/o/gi, "0")
    .replace(/s/gi, "$");
}
