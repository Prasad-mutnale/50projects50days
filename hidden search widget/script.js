const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const body = document.querySelector('.body');

btn.addEventListener('click', ()=>{
    search.classList.toggle('active') // toggle() this method does add and remove classList of element what we pass in parameter.
    input.focus()
})