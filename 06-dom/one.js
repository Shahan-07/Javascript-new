document.getElementById('title');   // getting the elements by thier by ids

document.getElementById('title').className;   // getting the elements by thier by ids to identify thier class name

document.getElementById('title').style.color = 'red';   // getting the elements by thier id to change its color

document.getElementById('title').style.fontSize = '20px';   // getting the elements by thier id to change the fontsize 

document.getElementById('title').getAttribute('id');  // getting the values of  the attributes of the elements by thier id.... it will always returns the value

document.getElementById('title').setAttribute('title','test');  // it will override the past value and will set the new value

document.querySelector('#title');   // select the id  of the element 

document.querySelector('.Heading');  // select the class of the element

document.querySelectorAll('li');    // select all the elements of the list


// example of changing the colors of the list items through querySelectorAll
document.querySelectorAll('li');
const TempList = document.querySelectorAll('li');
TempList[0].style.color = 'red';


// example of changing the  style of a node through forEach function

document.querySelectorAll('li');
const list = document.querySelectorAll('li');
list.forEach(function (li) {
    li.style.Color = 'tan';
})


// examle of getting the elements through class selector and changing the style of HTMl collection  through Array.from()

document.getElementsByClassName("list-items");
const newList = document.getElementsByClassName("list-items");

Array.from(newList);
const convertedArray = Array.from(newList);
convertedArray.forEach(function (li) {
    li.style.color = 'teal';
})