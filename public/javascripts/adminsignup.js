// function validate(){
//     let firstname=document.getElementById("firstname");
//     let lastname=document.getElementById("lastname");
//     //var gender=document.forms["form"]["gender"];
//     let age=document.getElementById("age");
//     let password=document.getElementById("password");
//     let confirmPassword=document.getElementById("confirmPassword");

//     if(firstname==null || firstname==""){
//         alert("First name cannot be blank");
//         return false;
//     }


//     if(password.value !=confirmPassword.value){
//         confirmPassword.setCustomValidity("Passwords Don't Match");  
//     }else{
//         confirmPassword.setCustomValidity('');
//     }
//     password.onchange = validatePassword;
//     confirmPassword.onkeyup = validatePassword;
// }



function validate() {
    let username= document.getElementById("username");
    let firstname= document.getElementById("firstname");
    let lastname=document.getElementById("lastname");
    let phone=document.getElementById("phone");
    let password=document.getElementById("password");
    let flag=1;

    if (username.value == "") {
		document.getElementById("uName-error").innerHTML = "Username is empty";
		flag = 0;
	} else if (username.value.length < 5) {
		document.getElementById("uName-error").innerHTML = "Username must more that 5 character";
		flag = 0;
	} else {
		document.getElementById("uName-error").innerHTML = "";
		flag = 1;
	}


    if (firstname.value == "") {
		document.getElementById("fName_error").innerHTML = "First name is empty";
		flag = 0;
	}else {
		document.getElementById("fName_error").innerHTML = "";
		flag = 1;
	}


     if (lastname.value == "") {
		document.getElementById("lName_error").innerHTML = "Last name is empty";
		flag = 0;
	}else {
		document.getElementById("lName_error").innerHTML = "";
		flag = 1;
	}


    if (phone.value == "") {
		document.getElementById("ph_error").innerHTML = " Phone number is empty";
		flag = 0;
	}else if(phone.value.length<10){
        document.getElementById("ph_'error").innerHTML="Phone number is invalid";
        flag=0;
    }
    
    else {
		document.getElementById("ph_error").innerHTML = "";
		flag = 1;
	}


    if (password.value == "") {
		document.getElementById("passError").innerHTML = "Password is empty";
		flag = 0;
	} else if (password.value.length < 6) {
		document.getElementById("passError").innerHTML = "Passworword must contain more than 6 characeters";
		flag = 0;
	} else {
		document.getElementById("passError").innerHTML = "";
		flag = 1;
	}


    if (flag) {
		return true;
	} else {
		return false
	}

	if(designation.value==""){
		document.getElementById("desigError").innerHTML="please select and option";
		flag=0;
	}else{
		document.getElementById("desigError").innerHTML="";
		flag=1;
	}


	if(gender.value==""){
		document.getElementById("genError").innerHTML="please select and option";
		flag=0;
	}else{
		document.getElementById("genError").innerHTML="";
		flag=1;
	}
}





// {
// if(passid_validation(passid,7,12))
// {
// if(allLetter(uname))
// {
// if(alphanumeric(uadd))
// {
// if(countryselect(ucountry))
// {
// if(allnumeric(uzip))
// {
// if(ValidateEmail(uemail))
// {
// if(validsex(umsex,ufsex))
// {
// }
// }
// }
// }
// }
// }
// }
// }
// return false;
// }
