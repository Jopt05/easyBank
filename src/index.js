import './index.css'

const menuBtn = document.querySelector('.nav__menu'),
    navigator = document.querySelector('.navigator'),
    body      = document.querySelector('body'),
    cortain   = document.querySelector('.cortain'),
    span      = document.querySelectorAll('span');

menuBtn.addEventListener('click', () => {
    navigator.classList.toggle('show');
    body.classList.toggle('blocked');
    cortain.classList.toggle('cortainShow');
    span[0].classList.toggle('hidden1');
    span[1].classList.toggle('hidden2');
    span[2].classList.toggle('hidden3');
})