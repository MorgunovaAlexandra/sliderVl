const slides=document.querySelectorAll('.slide');

for(let slide of slides){
slide.addEventListener('click',()=>{
    slide.classList.add('active')
})
}