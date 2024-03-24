

let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const birthDate = document.getElementById('birthDate').value;
    if(firstName.length!=0&&lastName.length!=0&&phoneNumber.length!=0&&email.length!=0&&birthDate.length!=0){
        if(!isValidName(firstName)){
            alert('Your first name is not valid, please try again');
            return false;
        }
        if(!isValidName(lastName)){
            alert('Your last name is not valid, please try again');
            return false;
        }
        if(!isValidPhone(phoneNumber)){
            alert('The phone number is not valid, please try again');
            return false;
        }
        if(!isValidEmail(email)){
            alert('The email is not valid, please try again');
            return false;
        }
    }
    else{
        alert('must fill all the fields');
        return false;
    }
    loginForm.submit();
    return true;
})



function isValidName(name){
    var nameRegex = /^[a-zA-Z]{3,20}$/;
    return nameRegex.test(name);
}
function isValidPhone(phone){
    var phoneNumberRegex = /^0[2-8][0-9]{8}$/;
    return phoneNumberRegex.test(phone);
}
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}