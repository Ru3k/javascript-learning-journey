function handleLogin(event) {
    event.preventDefault();

    const message = document.getElementById("loginMessage");
    const email = document.getElementById("emailInput").value.trim();

    message.textContent = `Signed in as ${email}.`;
}
