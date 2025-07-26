# Password Strength Analyzer

A modern web-based tool to test the strength of passwords using real-time analysis and give feedback on how secure they are. It also allows users to generate a personalized wordlist based on common patterns used in weak passwords.

---

## Features

- Real-time password strength meter using **zxcvbn** (Dropbox's password strength estimator)
- Feedback on estimated **crack time** and suggestions for improvement
- Custom **wordlist generator** using user-provided data (name, DOB, pet name)
- Stylish UI with **Glassmorphism**, gradients, and animated strength bar
- Downloadable `.txt` wordlist for further testing or educational use

---

##  Technologies Used

| Tech         | Purpose                            |
|--------------|------------------------------------|
| **HTML5**    | Page structure                     |
| **CSS3** + Tailwind CSS | Styling and layout                |
| **JavaScript** | Password logic, strength meter, DOM handling |
| **zxcvbn.js** | Password strength analysis library |
| **Google Fonts (Orbitron)** | Custom font for UI headings    |

---

##  How to Run Locally

1. **Clone the Repository:**

```bash
git clone https://github.com/YOUR_USERNAME/password-strength-analyzer.git
cd password-strength-analyzer
