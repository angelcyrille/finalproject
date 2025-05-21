function typingEffect(element, text, speed) {
  let i = 0;
  let interval = setInterval(function() {
    element.textContent += text.charAt(i);
    i++;
    if (i === text.length) {
      clearInterval(interval);
    }
  }, speed);
}

function updateGreeting() {
  const greetingEl = document.getElementById("greeting");
  const hour = new Date().getHours();
  let greetingText;

  if (hour < 12) {
    greetingText = "🌅 Good Morning!";
  } else if (hour < 18) {
    greetingText = "🌞 Good Afternoon!";
  } else {
    greetingText = "🌙 Good Evening!";
  }

  const fullGreeting = `${greetingText} Welcome to my Student Portfolio`;
  typingEffect(greetingEl, fullGreeting, 100); // speed set to 100ms per character
}

window.onload = updateGreeting;
