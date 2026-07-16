function savestd(){
    let name=document.getElementById("name").value
    let age=document.getElementById("age").value
    let course=document.getElementById("course").value
    let email=document.getElementById("email").value

     let gender =
    document.querySelector('input[name="gender"]:checked').value;

    let table = document.getElementById("studentTable")
                    .getElementsByTagName('tbody')[0];

                     let row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = age;
    row.insertCell(2).innerHTML = course;
    row.insertCell(3).innerHTML = gender;
    row.insertCell(4).innerHTML = email;

    let action = row.insertCell(5);

    action.innerHTML =
    "<button class='deleteBtn' onclick='deleteRow(this)'>Delete</button>";

    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("email").value="";
}

function deleteRow(button){

    let row = button.parentNode.parentNode;

    row.remove();

}