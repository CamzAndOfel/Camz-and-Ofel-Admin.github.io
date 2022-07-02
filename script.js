function check(form) {
    if (form.userid.value == "Admin" && form.pswrd.value == "Admin") {
        window.open('https://camzandofel.github.io/Camz-and-Ofel-Admin.github.io/components/dashboard.html', '_self')
    } else {
        alert("Error Password or username")
    }
}