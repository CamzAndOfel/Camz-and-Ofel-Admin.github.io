function check(form) {
    // yung admin lang pwedeng palitan
    if (form.userid.value == "Mariel" && form.pswrd.value == "Mariel") {
        window.open('https://camzandofel.github.io/Camz-and-Ofel-Admin.github.io/components/dashboard.html', '_self') //
    } else {
        alert("Error Password or username")
    }
}
