import {
  onGetTasks,
  getAuth,
  signOut
} from "./firebase.js";

// const taskForm = document.getElementById("task-form");
const tasksContainer = document.getElementById("tasks-container");


window.addEventListener("DOMContentLoaded", async (e) => {
  // const querySnapshot = await getTasks();
  // querySnapshot.forEach((doc) => {
  //   console.log(doc.data());
  // });

  onGetTasks((querySnapshot) => {
    tasksContainer.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const info = doc.data();

      tasksContainer.innerHTML += `

          <td>${info.area}</td>
          <td>${info.nombre}</td>
          <td>${info.apellido}</td>
          <td>${info.email}</td>
                    <td>${info.telefono}</td>
          <td>${info.fecha}</td>

          <td>${info.hora}</td>
    
`;
    });

  
  });
});

// taskForm.addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const title = taskForm["task-title"];
//   const description = taskForm["task-description"];

//   try {
//     if (!editStatus) {
//       await saveTask(title.value, description.value);
//     } else {
//       await updateTask(id, {
//         title: title.value,
//         description: description.value,
//       });

//       editStatus = false;
//       id = "";
//       taskForm["btn-task-form"].innerText = "Save";
//     }

//     taskForm.reset();
//     title.focus();
//   } catch (error) {
//     console.log(error);
//   }
// });
function htmlToCSV(html, filename) {
  var data = [];
  var rows = document.querySelectorAll("table tr");

  for (var i = 0; i < rows.length; i++) {
    var row = [], cols = rows[i].querySelectorAll("td, th");

    for (var j = 0; j < cols.length; j++) {
      row.push(cols[j].innerText);
    }

    data.push(row.join(","));
  }

  downloadCSVFile(data.join("\n"), filename);
}


function downloadCSVFile(csv, filename) {
  var csv_file, download_link;

  csv_file = new Blob([csv], { type: "text/csv" });

  download_link = document.createElement("a");

  download_link.download = filename;

  download_link.href = window.URL.createObjectURL(csv_file);

  download_link.style.display = "none";

  document.body.appendChild(download_link);

  download_link.click();
}
document.getElementById("exportar").addEventListener("click", function () {
  var html = document.querySelector("table").outerHTML;
  htmlToCSV(html, "students.csv");
});

document.getElementById("cerrarSesion").addEventListener("click", function () {

  const auth = getAuth();
  signOut(auth).then(() => {
    window.location.href = "index.html";
  }).catch((error) => {
    console.log(error.code, error.message)
  });

  // var html = document.querySelector("table").outerHTML;
  // htmlToCSV(html, "students.csv");
});