// Récupération des éléments HTML
    
let form = document.getElementById("task-form");
let taskList = document.getElementById("task-list");
let emptyMessage = document.getElementById("emptyMessage");

// Transformation en tableau utilisable 

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Sauvegarde dans le localStorage
    
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Afficher les tâches

function renderTasks() {
taskList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
  let task = tasks[i];

  let li = document.createElement("li");

//faire disparaître le message quand on inscrit une tâche
        
  if(tasks.length === 0){
    emptyMessage.style.display = "block";
  }else{
    emptyMessage.style.display = "none";
  }
        
// Création d'une div englobant ul et li
        
  let conteneur = document.createElement("div");
  conteneur.classList.add("task-conteneur");

  let titleSpan = document.createElement("span");
  titleSpan.textContent = task.title + " (" + task.category + ")";
  if(task.done){
    titleSpan.classList.add("done");
  }

  conteneur.appendChild(titleSpan);

  // Bouton toggle
  
  let toggleBtn = document.createElement("button");
  toggleBtn.textContent = task.done ? "Non réalisée" : "Réalisée";
  toggleBtn.className = "btn toggle";
  toggleBtn.addEventListener("click", () => toggleTask(i));
 
 // Bouton modifier
  
  let editBtn = document.createElement("button");
  editBtn.textContent = "Modifier";
  editBtn.className = "btn edit";
  editBtn.addEventListener("click", () => editTask(i));
  
  // Bouton supprimer
        
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Supprimer";
  deleteBtn.className = "btn delete";
  deleteBtn.addEventListener("click", () => deleteTask(i));
  
  conteneur.appendChild(toggleBtn);
  conteneur.appendChild(editBtn);
  conteneur.appendChild(deleteBtn);

  li.appendChild(conteneur);

  // Accordéon (détails)
        
  let details = document.createElement("div");
  details.classList.add("task-details");
  details.innerHTML =
          "<p><strong>Description:</strong> " + (task.description || "Aucune") + "</p>" +
          "<p><strong>Date:</strong> " + (task.datetime || "Non précisée") + "</p>" +
          "<p><strong>Catégorie:</strong> " + task.category + "</p>";

  li.appendChild(details);

// Accordéon : clic sur conteneur sauf boutons
        
  conteneur.addEventListener("click", function(e) {
    if(!e.target.classList.contains("btn")){
      let panel = this.nextElementSibling;
      panel.style.display = panel.style.display === "block" ? "none" : "block";
          }
  });

taskList.appendChild(li);
  }

saveTasks();
}

// Ajouter une tâche
    
form.addEventListener("submit", function(e){
  e.preventDefault();

let title = document.getElementById("title").value.trim();
let description = document.getElementById("description").value.trim();
let datetime = document.getElementById("datetime").value;
let category = document.getElementById("category").value;

  if (title){
    tasks.push({ 
    title: title, 
    description: description, 
    datetime: datetime, 
    category: category, 
    done: false 
  });
  renderTasks();
    form.reset();
 }
});

// Changer état tâche
    
function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
renderTasks();
}

// Supprimer une tâche

function deleteTask(index){
  if(confirm("Voulez-vous vraiment supprimer cette tâche ?")) {
    tasks.splice(index, 1);
renderTasks();
  }
}

// Modifier une tâche
    
function editTask(index) {
  let task = tasks[index];

  let newTitle = prompt("Modifier le titre :", task.title);
  if(newTitle === null) newTitle = task.title;

  let newDescription = prompt("Modifier la description :", task.description);
  if(newDescription === null) newDescription = task.description;

  let newDatetime = prompt("Modifier la date/heure :", task.datetime);
  if(newDatetime === null) newDatetime = task.datetime;

  let newCategory = prompt("Modifier la catégorie :", task.category);
  if(newCategory === null) newCategory = task.category;

  tasks[index].title = newTitle;
  tasks[index].description = newDescription;
  tasks[index].datetime = newDatetime;
  tasks[index].category = newCategory;

  renderTasks();
}

// Afficher au chargement
    
renderTasks();
