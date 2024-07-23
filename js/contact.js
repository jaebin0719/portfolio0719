function SendMail() {
    var params = {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_hqgaeod", "template_a0q2no7", params).then(function (res) {
        alert("메일이 보내졌습니다!" + res.status);
    })
}