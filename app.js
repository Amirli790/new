// inputs  j
const inputname = document.getElementById("name");
const inputsurname = document.getElementById("surname");
const inputposition = document.getElementById("position");
const defaultVal = document.querySelector("#birthday");
const inputphone = document.getElementById("phone");

//-------guncell inputlar 
// var x = document.querySelector("#birthday");
// var defaultVal = x.value;
// let ul = document.querySelector(".user_infos");

// let inputname = document.getElementById("name").value;
// let inputsurname = document.getElementById("surname").value;
// let inputposition = document.getElementById("position").value;
// let inputphone = document.getElementById("phone").value;


// // others

const header = document.querySelector(".todo_list")
const btn = document.querySelector(".buttonumuz");
const clearALL = document.querySelector(".btn-clear");

// edit icons
const user_infos = document.querySelector(".user_infos")
// edit

let editId;
let isEditTask = false;

//----
var inputListesi = []
//  inputListesi = [ {"id" : 1, "gorevadi" : {"inputadi" :  inputname, "surname" : inputsurname, "position" : inputposition, "phone" : inputphone, "defaultVal" : defaultVal} }
//   ];


alleventlisteners();
if(localStorage.getItem("inputListesi") !==null){
  inputListesi = JSON.parse(localStorage.getItem("inputListesi"))
}

//events
function alleventlisteners() {
  btn.addEventListener("click", addinfos);
  // document.addEventListener("DOMContentLoaded", loadtodos)
  document.querySelector("#name").addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
      document.querySelector(".buttonumuz").click();
    }
  });

  document.addEventListener("DOMContentLoaded" , f5ucun)

  clearALL.addEventListener("click" , clearALLthem)
  // user_infos.addEventListener("click", deleteTask)
  
}
//delete All
function clearALLthem(){
  if(confirm("Do You Want to DELETE ALL OF THEM")){  
    inputListesi.splice(0,inputListesi.length);
  displayTask()
  localStorage.setItem("inputListesi", JSON.stringify(inputListesi));
}
}

// delete
// function deleteTask(e){
//   console.log(e.target)
//   if(e.target.className === "fa-solid fa-trash"){
//     e.target.parentElement.parentElement.parentElement.remove();
//   }
// }

// const name = inputname.value.trim();
// const surname = inputsurname.value.trim();
// const position = inputposition.value.trim();
// const phone = inputphone.value.trim();


// const date = inputdate.value;
// name,surname,position,phone



// add infos

function displayTask() {

  let ul = document.querySelector(".user_infos");
  ul.innerHTML = "";

  for (let gorev of inputListesi) {
    let addtodo = document.createElement("div")
    addtodo.innerHTML = `
  <div class="container">
  <div class="userinfo">
  
  <ul>
  
      <li id = "${gorev.id}" >${gorev.gorevadi.inputadi}</li>
      <li>${gorev.gorevadi.surname}</li>
      <li>${gorev.gorevadi.position}</li>
      <li>${gorev.gorevadi.phone}</li>
      <li>${gorev.gorevadi.defaultVal}</li>
      <li></li>
  </ul>
  
  <section>
  <i  onclick='editTask(${gorev.id}, "${gorev.gorevadi}", "${gorev.gorevadi.surname}","${gorev.gorevadi.position}","${gorev.gorevadi.phone}","${gorev.gorevadi.defaultVal}")' class="fa-solid fa-pencil"></i>

   <i  onclick="deleteTask(${gorev.id})" class="fa-solid fa-trash"></i>
    
  </section>
  
  
  
  </div>
  <hr>
  <!-- the end of userinfo -->
  </div>
  
  `
    ul.appendChild(addtodo);
  }


}


function addinfos(e) {
  //values
  let x1 = document.querySelector("#birthday");
  let inputname1 = document.getElementById("name");
  let inputsurname1 = document.getElementById("surname");
  let inputposition1= document.getElementById("position");
  let inputphone1 = document.getElementById("phone");
  // const namein = inputname.trim();
  // const surname = this.inputsurname.value.trim();
  // const position = this.inputposition.value.trim();
  // const phone = this.inputphone.value.trim();
  var x2 = document.querySelector("#birthday");
  var defaultVal = x2.value;

  var inputname = document.getElementById("name").value;
  var inputsurname = document.getElementById("surname").value;
  var inputposition = document.getElementById("position").value;
  var inputphone = document.getElementById("phone").value;
  inputname.value = "";
  if (inputname == "" || inputsurname === "" || inputposition === "" || inputphone === "" || defaultVal === "") {
    alert("Please, full all form")
    // || inputsurname === "" || inputposition === "" || inputphone === "" || defaultVal === ""
  }
  else {
   
    

if(!isEditTask){ // ekleme
 inputListesi.push({ "id": inputListesi.length + 1, "gorevadi": { "inputadi": inputname, "surname": inputsurname, "position": inputposition, "phone": inputphone, "defaultVal": defaultVal } });

 }
 else{ // guncelleme
  for(let gorev of inputListesi){
    if(gorev.id == editId){
      gorev.gorevadi.inputadi = inputname;
      gorev.gorevadi.surname = inputsurname;
      gorev.gorevadi.position = inputposition;
      gorev.gorevadi.phone = inputphone;
      gorev.gorevadi.defaultVal = defaultVal;
    }
    isEditTask = false;
  }

 }

    
 inputname1.value = " ";
 inputsurname1.value  = "";
 inputposition1.value  =  "";
 inputphone1.value  =  "";
    // inputname.value = "";
    displayTask();
    localStorage.setItem("inputListesi", JSON.stringify(inputListesi));
  }

  e.preventDefault();
}


// edit
function editTask(taskId, taskname,taskSurname,taskPos,taskPhone, taskDate){
  editId = taskId;
  isEditTask = true;
  // input elements
  let x1 = document.querySelector("#birthday");
  let defaultVal1 = x1.value;
  let inputname1 = document.getElementById("name");
  let inputsurname1 = document.getElementById("surname");
  let inputposition1= document.getElementById("position");
  let inputphone1 = document.getElementById("phone");
  // values
  // var x1 = document.querySelector("#birthday");
  // var defaultVal = x1.value;

  // var inputname = document.getElementById("name").value;
  // var inputsurname = document.getElementById("surname").value;
  // var inputposition = document.getElementById("position").value;
  // var inputphone = document.getElementById("phone").value;
  // //input
  inputname1.value = taskname;
  inputsurname1.value  = taskSurname;
  inputposition1.value  = taskPos;
  inputphone1.value  = taskPhone;
  defaultVal1.value  = taskDate;
  //focus
inputname1.focus();
inputsurname1.focus();
inputposition1.focus();
x1.focus();
inputphone1.focus();
x1.focus();
}


// delete ID
function deleteTask(id){
  console.log(id)
  let deleteID;
  // for(let index in inputListesi){
  //   if(inputListesi[index].id == id){
  //     deleteID = index
  //   }
  // }

  deleteID = inputListesi.findIndex(function(gorev){
    return gorev.id == id
  })
  inputListesi.splice(deleteID , 1)
  displayTask();
  localStorage.setItem("inputListesi", JSON.stringify(inputListesi));

}




function f5ucun(){
  let todos = inputListesi
  todos.forEach(function(todo){
    localStorage.setItem("inputListesi", JSON.stringify(todos));
    displayTask();
  })
}





