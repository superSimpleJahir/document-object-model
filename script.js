// html selecti With javaScript 

//1. getElimentById

document.getElementById('hading1').innerHTML = 'Hello';
document.getElementById('hading2').innerHTML = 'Good bye, Good bye';


//2. getElementsByTagName
// index Number use korte hobe

document.getElementsByTagName('p')[0].innerHTML = 'Jahir';

//3. getElementsByClassName
// index Number use korte hobe
document.getElementsByClassName('pra1')[0].innerHTML = 'Hello I am Jahir';

// 4.querySelector
// This is vary inportent

// Tag name quarySelector
document.querySelector('a').innerHTML = 'Hello I am Tag name quarySelector';

// Nested quarySelector
document.querySelector('ul li a').innerHTML = 'Hello I am nested quarySelector.';

// class quarySelector
document.querySelector('.div1 a').innerHTML = 'Hello I am Class quarySelector';

// id quarySelector
document.querySelector('#div1 a').innerHTML = 'Hello I am id quarySelector';

// id quarySelector
document.querySelectorAll('a')[4].innerHTML = 'Hello I am id quarySelectorAll';


// onclick event

function myMessage1() {
  document.getElementById('link1').innerHTML = 'Click Button 1';
}
function myMessage2() {
  document.getElementById('link1').innerHTML = 'Click Button 2';
}
function myMessage3() {
  document.getElementById('link1').innerHTML = 'Click Link 1';
}

// onclick event image change
function image1() {
  document.getElementById('myImage').src = 'img/img3.jpg'
}
function image2() {
  document.getElementById('myImage').src = 'img/img4.jpg'
}

// Html tag & css style menipult by document object model (DOM)

let livelink = document.getElementById('link2');
livelink.innerHTML = 'Study with Jahir';
livelink.style.color = 'red';
livelink.style.backgroundColor = '#000';
livelink.style.textDecoration = 'none';
livelink.style.fontSize = '40px';
livelink.href = 'https://www.youtube.com/';
livelink.target = "_blank";


// create a html eliment by javascript

let heading2 = document.createElement('h2');
let text = document.createTextNode('This heading creatade by javascript.');
heading2.appendChild(text);
let myDiv = document.getElementById('my_div');
myDiv.appendChild(heading2);

let headding3 = document.createElement('h3');
let text2 = document.createTextNode('This heading3 creatade by javascript.');
headding3.appendChild(text2);
myDiv.appendChild(headding3);

// remove a html eliment by javascript
let Hello = document.getElementById("hello");
let heading5 = document.getElementsByTagName("h1")[2];
Hello.removeChild(heading5);