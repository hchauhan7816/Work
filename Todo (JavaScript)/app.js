function addElement() {
  let li = document.createElement("li");
  li.className = "list-group-item myList";

  let userValue = document.getElementById("inputValue").value;
  let x = document.createTextNode(userValue);

  if (userValue != "") {
    li.append(x);
    document.getElementById("todo_ul").appendChild(li);
    document.getElementById("inputValue").value = "";

    let btn = document.createElement("button");
    let temp = document.createElement("i");
    temp.className = "fa fa-trash-o";

    btn.className = "del";
    btn.appendChild(temp);
    console.log(btn);
    li.appendChild(btn);

    let del = document.getElementsByClassName("del");

    btn.onclick = function () {
      let div = this.parentElement;
      console.log(div);
      div.style.display = "none";
    };
  }
}
