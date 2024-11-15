//your JS code here. If required.
let name= document.querySelector("#name");
let age= document.querySelector("#age");
let form= document.querySelector("form");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	new Promise((resolve, reject) => {
		setTimeout(() => {
			if(age.value>=18) {
				resolve(`Welcome, ${name.value}. You can vote.`);
			}
			else {
				reject(`Oh sorry ${name.value}. You aren't old enough.`);
			}
		}, 4000);
	})
	.then(res => {
		console.log(res);
		alert(res);
	})
	.catch(err => {
		console.log(err);
		alert(err);
	})
})



