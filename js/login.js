// step -01:

document.getElementById("btn-submit").addEventListener("click", function () {
        // console.log('submit button clicked');

        // step -02: email address
        const emailField = document.getElementById("user-email");
        const email = emailField.value;

        // password -3
        const passwordField = document.getElementById("user-password");
        const password = passwordField.value;

        // DANGER : DO NOT VERIFY EMAIL password OF CLIENT
        // console.log(email, password);

        // if(email === 'bnafak@yahoo.com' && password==='haluaghat'){
        //     console.log('valid user')
        // } else{
        //     console.log('Invalid password')
        // }

        if (email === "bnafak@yahoo.com" && password === "haluaghat") {
                window.location.href = "bank.html";
        } else {
                console.log("Invalid email or password");
        }
});
