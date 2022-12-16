function validate() {

	let username = document.getElementById("username");
	let password = document.getElementById("password");
	let flag = 1;

	if (username.value == "") {
		document.getElementById("idError").innerHTML = "Username is empty";
		flag = 0;
	} else if (username.value.length < 5) {
		document.getElementById("idError").innerHTML = "Username must more that 5 character";
		flag = 0;
	} else {
		document.getElementById("idError").innerHTML = "";
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
	// if (flag) {
	// 	return true;
	// } else {
	// 	return false
	// } 
}






































// var username = document.forms['form']['username'];
// var password = document.forms['form']['password'];

// var id_error = document.getElementById('id_error');
// var pass_error = document.getElementById('pass_error');

// username.addEventListener('textInput', id_verify);
// password.addEventListener('textInput', pass_Verify);

// function validated(){
// 	if (username.value.length < 9) {
// 		username.style.border = "1px solid red";
// 		id_error.style.display = "block";
// 		username.focus();
// 		return false;
// 	}
// 	if (password.value.length < 6) {
// 		password.style.border = "1px solid red";
// 		pass_error.style.display = "block";
// 		password.focus();
// 		return false;
// 	}

// }
// function id_verify(){
// 	if (username.value.length >= 8) {
// 		username.style.border = "1px solid silver";
// 		id_error.style.display = "none";
// 		return true;
// 	}
// }
// function pass_Verify(){
// 	if (password.value.length >= 5) {
// 		password.style.border = "1px solid silver";
// 		pass_error.style.display = "none";
// 		return true;
// 	}
// }
