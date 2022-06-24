function User(namePaerm, userParam, emailParam, passwordPaeram, adminParam) {
  this.name = namePaerm;
  this.username = userParam;
  this.email = emailParam;
  this.pasword = passwordPaeram;
  this.admin = adminParam;
}
const userArray = JSON.parse(localStorage.getItem("users")) || [
  new User("admin", "dim", "admin@gmail.com", 1234, "true"),
];

function enter() {
  let name = document.getElementById("name").value;
  let username = document.getElementById("user").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  let admin = document.getElementById("admin").checked;

  const user = new User(name, username, email, pass, admin);
  

      localStorage.setItem("users", JSON.stringify(userArray));

  const userto = JSON.parse(localStorage.getItem("users"));
 let smple = userto.find((users) => users.username === username);
  console.log(smple);
  if (smple !== undefined) {
    document.querySelector("h5").innerText = "bunday foydalanuvchi ismi bor!";

    return;
  }  if(admin === false){
    userArray.push(user);
    localStorage.setItem("users", JSON.stringify(userArray));
    window.location.href ="/public/main.html";
  } if( admin === true){ 
    userArray.push(user);
    localStorage.setItem("users", JSON.stringify(userArray));
    window.location.href ="/public/main.html";
    document.querySelector("h4").innerHTML = `${user.username}`;
  }else{
    return ;
  }

}
