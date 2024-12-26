var signUpData = [];
var loginData = [];

function signUp() {

   var US1FN = document.getElementById('FirstName1').value;
   var US1LN = document.getElementById('LastName1').value;
   var US1E = document.getElementById('Email1').value;
   var US1P = document.getElementById('Password1').value;
   signUpData.push(US1FN,US1LN,US1E,US1P);
   console.log(signUpData);

}

function login() {

    var result = document.getElementById('result');

    var UL1E = document.getElementById('loginEmail1').value;
    var UL1P = document.getElementById('loginPassword1').value;
    loginData.push(UL1E,UL1P);
    console.log(loginData)


    for ( var i = 0; i < loginData.length; i++) { // length = 2 | 0,1 run 2 times

        if ( signUpData[i+2] === loginData[i]){ // 0+2= 2 

            result.innerHTML = 'You are successfully login in your account';

        } else {
            result.innerHTML = 'invalid email or password';
        }

    }
}