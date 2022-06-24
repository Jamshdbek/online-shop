function login() {
    let nameus = document.getElementById("user").value;
    let pass = document.getElementById("password").value;
    let h5 = document.querySelector("h5");
   
    removeObjectFromStorage(nameus, pass)
  }



  function removeObjectFromStorage(nameus , pass){
   
 const userFulter = JSON.parse(localStorage.getItem('users'))



   

 let enat = userFulter.find((users) => {
    
     console.log(users.username);
    console.log(users.pasword);
     
    return  users.username === nameus  && users.pasword === pass ;
  })
   
    if(enat !== undefined){
        window.location.href = "/main.html";
    }else{
     document.querySelector("h5").innerText= "bunday foydalanuvchi yo'q!"

    }

   
  
  }
  
  