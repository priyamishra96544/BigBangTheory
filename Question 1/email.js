let users=[{
  "name":"ABC",
  "email":"abc123",
  "password":"12345"
},
{
  "name":"CDE",
  "email":"cde456",
  "password":"123456"
}]

let checkLogin = (email, password, allUsers)=>{
let isUserFound=false
let isPasswordCorrect=false

for(currentUser in allUsers){
console.log(currentUser)
if(allUsers[currentUser]['email']==email){

if(allUsers[currentUser]['password']==password){
isUserFound=true
isPasswordCorrect=true
break
}

else{
isUserFound=true
isPasswordCorrect=false
break
}
}

else{
isUserFound=false
break
}
}

if(isUserFound==true && isPasswordCorrect==true){
alert('You are logged in')
}
else if(isUserFound==true && isPasswordCorrect==false){
alert('You have provided incorrect password')
}
else{
alert('No user with this email found')
}
}

let email=prompt("Enter email")
let password=prompt("enter password")
checkLogin(email,password,users)
