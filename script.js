function check(form) {
    // yung admin lang pwedeng palitan
    if (form.userid.value == "Admin" && form.pswrd.value == "Admin") {
        window.open('http://127.0.0.1:5501/components/dashboard.html', '_self') //https://camzandofel.github.io/Camz-and-Ofel-Admin.github.io/components/dashboard.html
    } else {
        alert("Error Password or username")
    }
}