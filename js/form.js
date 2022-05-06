
// import firebase from "./firebase";
import {
  saveInfo
} from "./firebase.js";
// const db = firebase.firestore()
const formTask =  document.getElementById('form-task');

formTask.addEventListener('submit'  , async(e) => {
  
  e.preventDefault();
  const nombre = formTask['nombres'].value;
  const email = formTask['correo_electronico'].value;
  const apellido = formTask['apellido'].value;
  const telefono = formTask['telefono'].value;
  const area = formTask['ciudad_de_residencia'].value;
  const f = new Date();
  const fecha = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear(); 
  const hora = f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds();

  saveInfo(nombre, email , apellido , telefono , area, fecha, hora )
  .then(function(){
    window.location.href= "https://ide-esan.edu.pe/comenzar/gracias/"
    
  })

  // db.collection('informacion').doc().set({
  //   email , nombre , apellido , telefono , area , fecha , hora
  // })
  // .then(function(){
  //   window.location.href= "../gracias/index.html"
    
  // })
  
  
} )



const select = document.getElementById('ciudad_de_residencia');

select.onclick=selectclick;
function selectclick(){
  select.style.backgroundColor = "#404041";
}




const areonautica =  document.getElementById('aeronauticaButton');
areonautica.onclick = areonauticaButton; // Agrega función onclick al elemento  
function areonauticaButton() {
  select.value='Aeronáutica';
  select.style.backgroundColor = "#2524D2";
}

const agricola =  document.getElementById('agricolaButton');

agricola.onclick = agricolaButton; // Agrega función onclick al elemento
  
function agricolaButton() {
  document.getElementById('ciudad_de_residencia').value='Agrícola';
  select.style.backgroundColor = "#42AB4A";
}



const pesca =  document.getElementById('pescaButton');

pesca.onclick = pescaButton; // Agrega función onclick al elemento
    
function pescaButton() {
  document.getElementById('ciudad_de_residencia').value='Pesca y Acuicultura'
  select.style.backgroundColor = "#3CC8C8";
}


const turismo =  document.getElementById('turismoButton');

turismo.onclick = turismoButton; // Agrega función onclick al elemento
    
function turismoButton() {
  document.getElementById('ciudad_de_residencia').value='Turismo Rural'
  select.style.backgroundColor = "#640078";
}


const veterinaria =  document.getElementById('veterinariaButton');

veterinaria.onclick = veterinariaButton; // Agrega función onclick al elemento
    
function veterinariaButton() {
  document.getElementById('ciudad_de_residencia').value='Veterinaria'
  select.style.backgroundColor = "#FF6423";
}

