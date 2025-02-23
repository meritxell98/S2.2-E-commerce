// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress");
	let fLastN = document.getElementById("fLastN");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");


	// // Get the error elements
	// let errorName = document.getElementById("errorName");
	// let errorEmail = document.getElementById("errorEmail"); 
	// let errorAddress = document.getElementById("errorAddress");
	// let errorLastN = document.getElementById("errorLastN");
	// let errorPassword = document.getElementById("errorPassword");
	// let errorPhone = document.getElementById("errorPhone");

	// // Validate fields entered by the user: name, phone, password, and email
	function checkRequiredField(field){
		if (field == "") {
			field.classList.remove("is-invalid")
			return
		}else{
			field.classList.add("is-invalid")
			return
		}
	}

	function checkRequiredLenght(field){
		if (field.length <= 3) {
			field.classList.remove("is-invalid")
			return
		}else {
			field.classList.add("is-invalid")
			return
		}
	}

	function validateOnlyLetters(field){
		const lettersPatter = /^[a-zA-ZÀ-ÿ]+$/;

		if (field == lettersPatter.test(field) ) {
			field.classList.remove("is-invalid")
			return
		}else{
			field.classList.add("is-invalid")
			return
		}
	}


	function validatePassword(password){
		const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{3,}$/;
		let result  = passwordPattern.test(password)
	
		if (password == result ) {
			field.classList.remove("is-invalid")
			return
		}else{
			field.classList.add("is-invalid")
			return
		}
	}

	function validatePhoneNumber(phone){
		const phonePattern = /^\d{9,}$/;
		let result = phonePattern.test(phone)

		if (phone == result ) {
			phone.classList.remove("is-invalid")
			return
		}else{
			phone.classList.add("is-invalid")
			return
		}
	}

	function validateEmail(email){
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    	let result = emailPattern.test(email);

		if (email == result ) {
			email.classList.remove("is-invalid")
			return
		}else{
			email.classList.add("is-invalid")
			return
		}

	}

	// //validate name
	checkRequiredField(fName)
	checkRequiredLenght(fName)

	validateOnlyLetters(fName)

	// //validate surname 
	checkRequiredField(fLastN)
	checkRequiredLenght(fLastN)
	validateOnlyLetters(fLastN)

	// //validate mail 
	checkRequiredField(fEmail)
	validateEmail(fEmail)

	// //validate address
	checkRequiredField(fAddress)
	checkRequiredLenght(fAddress)

	// //validate password
	checkRequiredField(fPassword)
	validatePassword(fPassword)

	// //validate phone
	checkRequiredField(fPhone)
	validatePhoneNumber(fPhone)
}