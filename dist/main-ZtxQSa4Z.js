// Ethical Security Testing Tool - Phishing Simulation
// WARNING: Only use on systems you own or have permission to test

(function() {
    // Check if we're in a test environment (modify this condition)
    const isTestEnvironment = window.location.hostname.includes('localhost') || 
                            window.location.hostname.includes('your-test-domain.com');
    
    if (!isTestEnvironment) {
        console.warn('Security warning: This script should only run in test environments');
        return;
    }

    // Create notification overlay
    const createOverlay = () => {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            z-index: 99999;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
        `;

        overlay.innerHTML = `
        <div style="
            background: white;
            width: 300px;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0,0,0,0.3);
            text-align: center;
        ">
            <h2 style="color: #d23f00; margin-top: 0">Security Test Notification</h2>
            <p>This is a simulated security test interface.</p>
            <div style="margin: 15px 0">
                <input type="text" id="test-email" placeholder="Test email" style="
                    width: 100%;
                    padding: 8px;
                    margin: 5px 0;
                    border: 1px solid #ccc;
                ">
                <input type="password" id="test-pwd" placeholder="Test password" style="
                    width: 100%;
                    padding: 8px;
                    margin: 5px 0;
                    border: 1px solid #ccc;
                ">
            </div>
            <button id="test-submit" style="
                background: #d23f00;
                color: white;
                border: none;
                padding: 8px 15px;
                cursor: pointer;
                width: 100%;
            ">Simulate Login</button>
            <p style="font-size: 12px; color: #666; margin-top: 15px;">
                This is a test interface only. No data is collected.
            </p>
        </div>
        `;

        document.body.appendChild(overlay);
        return overlay;
    };

    // Handle simulated login
    const setupHandlers = (overlay) => {
        overlay.querySelector('#test-submit').addEventListener('click', () => {
            // Simulate data collection (not actually sent anywhere)
            const email = document.getElementById('test-email').value || 'test@example.com';
            const pwd = document.getElementById('test-pwd').value || 'test-password';
            
            console.log('[Security Test] Simulated credentials:', { email, pwd });
            
            // Show feedback
            overlay.innerHTML = `
            <div style="text-align: center; padding: 20px; color: #333;">
                <h3 style="color: #d23f00">Test Complete</h3>
                <p>This simulation collected no actual data.</p>
                <p>Check browser console for test results.</p>
                <button onclick="this.parentNode.parentNode.remove()" style="
                    background: #d23f00;
                    color: white;
                    border: none;
                    padding: 8px 15px;
                    margin-top: 15px;
                    cursor: pointer;
                ">Close</button>
            </div>`;
        });
    };

    // Initialize with delay to ensure DOM is ready
    setTimeout(() => {
        try {
            const overlay = createOverlay();
            setupHandlers(overlay);
            console.log('[Security Test] Simulation initialized');
        } catch (e) {
            console.error('[Security Test] Initialization failed:', e);
        }
    }, 500);
})();
