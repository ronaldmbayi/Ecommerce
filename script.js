// Script for navigation bar
const bar = document.getElementById('bar');
const clos= document.getElementById('clos');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',() => {
            nav.classList.add('active');
        })
}
if(clos){
    clos.addEventListener (
        'click',() => {
            nav.classList.remove('active');
        }
    )
}