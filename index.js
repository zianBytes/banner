const messages = ["Hi, I'm Zian", "I build stuff and crash out"];
const typewriter = document.getElementById("typewriter");

let messageIndex = 0;
let charIndex = 0;
let typing = true;

function typeLoop() {
  if (typing) {
    if (charIndex < messages[messageIndex].length) {
      typewriter.textContent += messages[messageIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeLoop, 100);
    } else {
      typing = false;
      setTimeout(typeLoop, 4000); // Wait 4s after typing
    }
  } else {
    if (charIndex > 0) {
      typewriter.textContent = messages[messageIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeLoop, 50);
    } else {
      typing = true;
      messageIndex = (messageIndex + 1) % messages.length; // Switch message
      setTimeout(typeLoop, 200);
    }
  }
}

typeLoop();

