function check(form) {
    if (form.userid.value == "Admin" && form.pswrd.value == "Admin") {
        window.open('/Camz-and-Ofel-Admin.github.io/components/dashboard.html')
    } else {
        alert("Error Password or username")
    }
}