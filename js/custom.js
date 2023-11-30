function checkValid(){
    var name=document.getElementById('name');
    var phone=document.getElementById('phone');
    var email=document.getElementById('email');
    var user=document.getElementById('username');
    var pw=document.getElementById('pass');
    var rpw=document.getElementById('repass');

    if(name.value==''){
       document.getElementById('name_error').innerHTML='Please enter your name.';
       name.focus();
       return false;
    }else{
       document.getElementById('name_error').innerHTML=''; 
    }

    if(phone.value==''){
       document.getElementById('phone_error').innerHTML='Please enter your phone number.';
       phone.focus();
       return false;
    }else{
       document.getElementById('phone_error').innerHTML=''; 
    }

    if(email.value==''){
       document.getElementById('email_error').innerHTML='Please enter email address.';
       email.focus();
       return false;
    }else{
       document.getElementById('email_error').innerHTML=''; 
    }

    if(user.value==''){
       document.getElementById('username_error').innerHTML='Please enter username.';
       user.focus();
       return false;
    }else if(user.value.length<5){
       document.getElementById('username_error').innerHTML='Please enter minumum 5 char of username.';
       user.focus();
       return false;      
    }else if(user.value.length>10){
       document.getElementById('username_error').innerHTML='Please enter maximum 10 char of username.';
       user.focus();
       return false;      
    }else{
       document.getElementById('username_error').innerHTML=''; 
    }

    if(pw.value==''){
       document.getElementById('pass_error').innerHTML='Please enter password.';
       pw.focus();
       return false;
    }else{
       document.getElementById('pass_error').innerHTML=''; 
    }

    if(rpw.value==''){
       document.getElementById('repass_error').innerHTML='Please enter confirm password.';
       rpw.focus();
       return false;
    }else if(pw.value!=rpw.value){
       document.getElementById('repass_error').innerHTML="Password didn't match.";
       rpw.focus();
       return false;      
    }else{
       document.getElementById('repass_error').innerHTML=''; 
    }
}