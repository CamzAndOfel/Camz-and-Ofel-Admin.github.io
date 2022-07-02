function check(form) {
    if (form.userid.value == "Admin" && form.pswrd.value == "Admin") {
        window.open('http://Camz-and-Ofel-Admin-github.io/dashboard.html')
    } else {
        alert("Error Password or username")
    }
}