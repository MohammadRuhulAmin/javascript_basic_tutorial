document.getElementsByTagName('p');
document.getElementsByClassName('myClass');
document.querySelector('id');



/**
 * creating new node  
 * 
 */

const para = document.createElement("p");
const node = document.createTextNode("Hellow World");
para.appendChile(node);


const element = document.getElementById("div1");
element.appendChild(para);
element.insertBefore(para,p1);

