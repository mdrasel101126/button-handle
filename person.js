function getPersonNumber() {
  const personList = document.getElementsByClassName("list-item");
  const personNumber = personList.length;
  return personNumber;
}
function setPersonName(persnonName) {
  const personList = document.getElementById("list");
  const li = document.createElement("li");
  li.classList.add("list-item");
  li.innerText = persnonName;
  personList.appendChild(li);
}

function handlePersonButton(event) {
  const personNumber = getPersonNumber();
  if (personNumber === 5) {
    alert("You cant not add more than 5 person");
    return;
  }
  const persnonName = event.parentNode.childNodes[1].innerText;
  setPersonName(persnonName);
  event.setAttribute("disabled", true);
  event.style.backgroundColor = "grey";
  event.style.cursor = "default";
}
