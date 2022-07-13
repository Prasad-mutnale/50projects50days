const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll',checkBoxes) // window is window of the page itself

checkBoxes()
function checkBoxes(){
    const triggerBottom=window.innerHeight / 5 * 4 //This line output will be the a number which represent the window height

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top //https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
        //getBoundingClientRect() this method returns a DOMREACT object providing information about the size of an element and its position relative to the viewport.
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }
        else{
            box.classList.remove('show')
        }
    })
}