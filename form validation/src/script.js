const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const btn = document.getElementById('btn')

form.addEventListener('submit', e=>{
    e.preventDefault();
    validateInput();
    display();
})

const setError = (element,message)=>{
    const inputcontrol = element.parentElement;
    const errorDisplay = inputcontrol.querySelector('.error');
    errorDisplay.innerText = message;
    inputcontrol.classList.add('error');
    inputcontrol.classList.remove('success');
}
const setSuccess = element =>{
    const inputcontrol = element.parentElement;
    const successDisplay = inputcontrol.querySelector('.error');
    successDisplay.innerText = '';
    inputcontrol.classList.add('success');
    inputcontrol.classList.remove('error');
}

const validateInput = ()=>{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim(); 
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue ===""){
            setError(username,"Username is required");
    }else{
        setSuccess(username)
    }


    if(emailValue === ''){
        setError(email,'Email is required');
    }else{
        setSuccess(email)
    }

    if(passwordValue === ""){
        setError(password,"password is required");
    }else if(passwordValue.length < 8){
        setError(password ,"Password must be at least 8 character");
    }
    else{
        setSuccess(password);
    }


    if(password2Value === ""){
        setError(password2,"Please Confirm your password");
    }else if(password2Value !== passwordValue){
        setError(password,"Password does not match")
    } else{
        setSuccess(password);
    }


  
};

const display=()=>{
    document.write("<h2> "+username.value+ "</h2>");
    document.write("<h2>"+email.value+"</h2>");
    document.write("<h2>"+password.value+ "</h2>");
}


