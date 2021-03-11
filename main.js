let array = [];
if (localStorage != "null") {
  array = JSON.parse(localStorage.getItem("array") || "[]");
}
function save(){
  let theTask = document.getElementById("task");
  let saveDate = document.getElementById("date");
  let saveTime = document.getElementById("time");

  let details={
    task: theTask.value,
    date: saveDate.value,
    time: saveTime.value
  }

  array.push(details);

  let json = JSON.stringify(array);
  localStorage.setItem("array", json);
}

function findActiveTask() {
  const json = localStorage.getItem("details");
  const note = JSON.parse(json);

  for (let i=0; i<array.length; i++) {
    let array_final_date = array[i].date;
    let array_final_time = array[i].time;

    const time_and_date = array_final_date + array_final_time;
    const current_time = new Date();
    const timeConvert = current_time.toISOString();

    if (time_and_date > timeConvert) {
      let pitkit = document.createElement("div");
      pitkit.className = "note";
      pitkit.innerHTML =
      "<button onclick=\"removeNote(this,"+i+");\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-x-circle\" viewBox=\"0 0 16 16\">\
      <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>\
      <path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"/>\
      </svg></button>"
      let mission = document.createElement("textarea");
      mission.className = "mission";
      mission.innerHTML = array[i].task;

      let final_time = document.createElement("div");
      final_time.className = "final_time";
      final_time.innerHTML = array[i].date + "<br/>" + array[i].time;

      document.getElementById("pitkit_container").appendChild(pitkit);
      pitkit.appendChild(mission);
      pitkit.appendChild(final_time);
    }
  }
}

function removeNote(html_obj, location_in_array) {
  html_obj.parentElement.remove();

  array = JSON.parse(localStorage.getItem("array"));

  for (let i = 0; i < array.length; i++) {
    if (i == location_in_array) {
      array.splice(location_in_array, 1);
      location.reload();
    }

    const json = JSON.stringify(array);
    localStorage.setItem("array", json);
  }
}

