    let cuname ="myadmin";
    let cpass ="1234";
    let userattempts=3;

    function login(){
        let myuser=document.getElementById("uname").value;
        let mypass=document.getElementById("pass").value;
        let mybtn=document.getElementById("btn");

        if(cuname === myuser && cpass === mypass){
            alert("Login Successfull");
            window.location.replace("calculator.html");

        }
        
        if(cuname !== myuser && cpass !== mypass){
            alert("Both user and password are wrong!");
        }else if(cuname !== myuser){
            alert("Incorrect username");
        }else if(cpass !== mypass){
            alert("Incorrect password");
        }
        userattempts -= 1;
        if(userattempts > 0){
            alert("Attempts left you have:"+" "+ userattempts);
        }else{
            alert("No more attempts you have try after 6s");
            mybtn.disabled = true;
            mybtn.innerHTML = "Login Disable";

            setTimeout(function(){
                userattempts = 3;
                mybtn.disabled=false;
                mybtn.innerHTML="Login";
                alert("You can try now");
            },6000)



        }
    }
   