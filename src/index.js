document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById('list')

  document.getElementById('submit-button-overwrite').addEventListener('click', function(event){
    // prevent default behavior
    event.preventDefault();
    // get the string from the text-field
    let textFromForm = document.getElementById('new-task-description').value;
    //  create and insert the new LI
    let newTask = document.createElement('li');
    let deleteButton = '<button onclick="return this.parentNode.remove();">delete</button>'
    list.appendChild(newTask);
    // set the new LI's text
    newTask.innerHTML = `${textFromForm} ${deleteButton}`;
    // empty the text field
    document.getElementById('new-task-description').value = '';
  });

});
