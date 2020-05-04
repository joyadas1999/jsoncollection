let mainContatiner = document.getElementById('mainContatiner');

let jsonDatabase = [
  {
    "title" : "Strawberry Lemonade",
    "picture_url" : "1.jpg",
    "price" : "$5.00",
    "info" : "Made from fresh squeezed Lemons and Strawberry.",
  },
  {
    "title" : "Mangonada",
    "picture_url" : "2.jpg",
    "price" : "$5.50",
    "info" : "A fresh mango smoothie with chamoy sauce and chilipowder.",
  },
  {
    "title" : "Thai Tea",
    "picture_url" : "3.jpg",
    "price" : "$6.50",
    "info" : "Tastes like flowers in your mouth with a sweet taste.",
  },
  {
    "title" : "Whipped Iced Coffee",
    "picture_url" : "4.jpg",
    "price" : "$4.50",
    "info" : "Hand whisked coffee and cold milk to make a fluffy and refreshing drink.",
  }
]

function createElement(incomingJSON) {
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItem');

  let imgContainer = document.createElement("IMG");
  imgContainer.classList.add("newImage");
  imgContainer.src = incomingJSON['picture_url'];
  newContentElement.appendChild(imgContainer);

  let subHeading = document.createElement("H3");
  subHeading.innerText = incomingJSON['title'];
  newContentElement.appendChild(subHeading);

  let priceTage = document.createElement("H5");
  priceTage.innerText = incomingJSON['price'];
  newContentElement.appendChild(priceTage);

  let infoContainer = document.createElement("P");
  infoContainer.innerText = incomingJSON['info'];
  newContentElement.appendChild(infoContainer);

  mainContatiner.appendChild(newContentElement);
}

for (var i = 0; i < jsonDatabase.length; i++) {
  createElement(jsonDatabase[i]);
}
