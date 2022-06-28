const slides=document.querySelectorAll('.slide');

for(let slide of slides){
slide.addEventListener('click',()=>{
    cliarActiveClasses()
    slide.classList.add('active')
})
}
function  cliarActiveClasses(){
    
}