let mainContatiner = document.getElementById('mainContatiner');

let jsonDatabase = [
  {
    "name" : "Tiramisu",
    "pic" : "tira1.jpg",
    "detail" : "Cake.",
  },
  {
    "name" : "Tiramisuu",
    "pic" : "tira2.jpg",
    "detail" : "This cake is so fluffy",
  },
  {
    "name" : "More Tiramisu",
    "pic" : "tira3.jpg",
    "detail" : "One bite says it all.",
  }
]

function createElement(incomingJSON) {
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItem');

  let imgContainer = document.createElement("IMG");
  imgContainer.classList.add("newImage");
  imgContainer.src = incomingJSON['pic'];
  newContentElement.appendChild(imgContainer);

  let subHeading = document.createElement("H3");
  subHeading.innerText = incomingJSON['name'];
  newContentElement.appendChild(subHeading);

  let infoContainer = document.createElement("P");
  infoContainer.innerText = incomingJSON['detail'];
  newContentElement.appendChild(infoContainer);

  mainContatiner.appendChild(newContentElement);
}

for (var i = 0; i < jsonDatabase.length; i++) {
  createElement(jsonDatabase[i]);
}
