function validate()
{
    var username= document.getElementById("username").value;
    var password= document.getElementById("password").value;
if (username=="admin@login.com" && password=="welcome")
{
    alert("Login Success");
    return true;
}
else{
    alert("Invalid username or password");
    return false;
}
}
