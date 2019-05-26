 var database = [
 {
 	username: "rafsan",
 	password: "supersecret"
 }
 ];

 var newsfeed = [
	 {
	 	username: "bobby",
	 	timeline:"So tired from all that learning!"
	 },
	 {
	 	username: "sally",
	 	timeline:"javascript is so cool"
	 }
 ];

 var userNamePrompt = prompt("What's your username?");
 var passWordPrompt = prompt("What's your password?");

 function signIn(user,pass){
 	if(user === database[0].username &&
       pass === database[0].password)
 	{
 		console.log(newsfeed);
 	}else{
 		alert("sorry wrong username and password!");
 	}
 }

 signIn (userNamePrompt, passWordPrompt);  //call the function to match with the argument 