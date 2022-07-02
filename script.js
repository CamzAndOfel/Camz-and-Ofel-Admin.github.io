function check(form) {
    if (form.userid.value == "Admin" && form.pswrd.value == "Admin") {
        window.open('dashboard.html')
    } else {
        alert("Error Password or username")
    }
}