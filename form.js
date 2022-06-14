console.log("Form Validation");
const Name = document.getElementById("name");
const email = document.getElementById("email");
const pno = document.getElementById("number");
let validname = false;
let validEmail = false;
let validphone = false;


//console.log(Name ,email,pno);

Name.addEventListener('blur', () => {
    console.log("name is blurred");
    //Validate name here 
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = Name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Matched");
        Name.classList.remove('is-invalid');
        validname= true;
        
    }
    else {
        console.log("No Match Found");
        Name.classList.add('is-invalid');
        validname = false;
    }
})

email.addEventListener('blur', () => {
    console.log("email is blurred");
    //Validate email here 
    let regex = /^([_\-\.0-9a-zA-Z]+)@([0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Matched");
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log("No Match Found");
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

pno.addEventListener('blur', () => {
    console.log("Phone Number is blurred");
    //Validate phone number here 
    let regex = /^([0-9]){10}$/;
    let str = pno.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Matched");
        pno.classList.remove('is-invalid');
        validphone = true;
    }
    else {
        console.log("No Match Found");
        pno.classList.add('is-invalid');
        validphone = false;

        
    }

})

let submit = document.getElementById('btn');
//console.log(btn);
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("you clicked on submit");
    console.log(validEmail,validname,validphone);
    //submit your form here
    let success = document.getElementById('Success');
    let failure = document.getElementById('error');
    //console.log(failure);
    if (validEmail && validname && validphone) {
        console.log("Your Name email and phone are valid. Submitting the form");
       
        success.classList.add('show');
        $('#success').show();
        $('#failure').hide();
       

    }
    else {
        console.log("your name email and phone is not valid.Please ENTER VALID DETAILS ");
        failure.classList.add('show');
         $('#failure').show(); 
     $('#success').hide();
    }


})