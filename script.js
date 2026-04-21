function handleAuth() {
    // 1. Get User Data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;

    // 2. Basic Authentication Logic (Primary Focus)
    // We check if fields are empty and if password meets minimum length
    if (name === "" || email === "") {
        alert("Please fill in all required fields.");
        return;
    }
    if (pass.length < 4) {
        alert("PIN must be at least 4 digits for security.");
        return;
    }

    // 3. UI Transition
    document.getElementById('reg-form').classList.add('hidden');
    document.getElementById('ticket').classList.remove('hidden');
    document.getElementById('user-display').innerText = `Attendee: ${name}`;

    // 4. QR Generation (Secondary Focus)
    // We bundle the data into a string that the QR will store
    const secureData = `EVENT-2026 | User: ${name} | Email: ${email} | Auth: VERIFIED`;
    
    // Clear previous QR and generate new one
    document.getElementById('qrcode-container').innerHTML = "";
    new QRCode(document.getElementById("qrcode-container"), {
        text: secureData,
        width: 160,
        height: 160
    });
}