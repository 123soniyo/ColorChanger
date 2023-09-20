const button=document.querySelectorAll('.button')
const body=document.getElementById('body')

button.forEach((item)=>{
    console.log(item)
    item.addEventListener('click',(event)=>{
        console.log(event)
        console.log(event.target)

        if(event.target.id=='orange'){
            body.style.backgroundColor=event.target.id
        }
        else if(event.target.id=='white'){
            body.style.backgroundColor=event.target.id
        }
        else if(event.target.id=='blue'){
            body.style.backgroundColor=event.target.id
        }
        else if(event.target.id=='green'){
            body.style.backgroundColor=event.target.id
        }
    })
})