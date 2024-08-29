import _ from 'lodash';
import './style.css';
import {adjustFooterPosition} from './fixScroll.js';
import {changeTabs} from './changeTabs.js';
const bt1 = document.getElementById("home");
const bt2 = document.getElementById("menu");
const bt3 = document.getElementById("about");
const bt4 = document.getElementById("contact");

const footer = document.createElement("footer");
footer.textContent = "DAS";
const content = document.createElement('div');
content.classList.add("content");
document.body.appendChild(content);
document.body.appendChild(footer);



changeTabs(0,content);
window.addEventListener('scroll', adjustFooterPosition);
window.addEventListener('load', adjustFooterPosition);
window.addEventListener('resize', adjustFooterPosition);

bt1.addEventListener('click', () => {
    changeTabs(0,content)
});

bt2.addEventListener('click', () => {
    changeTabs(1,content)
});

bt3.addEventListener('click', () => {
    changeTabs(2,content)
});

bt4.addEventListener('click', () => {
    changeTabs(3,content)
});




