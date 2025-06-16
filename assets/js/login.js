document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:8080/auth/access", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Sai thông tin đăng nhập!");
        }
        return response.json();
    })
    .then(data => {
        const token = data.data.accessToken;
        const userId = data.data.userId;
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        window.location.href = "index-logined.html";
    })
    .catch(error => {
        alert(error.message);
    });
});
