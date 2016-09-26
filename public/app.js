var app = function(){
  addCat("Not Boba", "also sock fluff");
}

var addCat = function(name, food){
  var catArticle = createCatArticle();
  var catNameField = createName(name);
  var catFoodField = createFood(food);
  var cats = document.querySelector('#cats');
  appendElements(cats, catArticle, catNameField, catFoodField);
}

var createCatArticle = function(){
  var catArticle = document.createElement('ul');
  catArticle.classList.add('cat');
  return catArticle;
}

// var createImage = function(name){
//   var image = document.createElement('img');
//   image.widthList.add('500');
//   image.srcList.add('boba.jpg');
//   return image;
// }

var createFood = function(food){
  var favFood = document.createElement('li');
  favFood.innerText = "Favourite food: " + food;
  return favFood;
}

var createName = function(name){
  var nameField = document.createElement('li');
  nameField.innerText = "Name: " + name;
  return nameField;
}

var appendElements = function(cats, catArticle, catNameField, catFoodField){
  catArticle.appendChild(catNameField);
  catArticle.appendChild(catFoodField);
  cats.appendChild(catArticle);
}

window.onload = app