const detail = document.querySelectorAll('.detail > p')
const detail_bg = document.querySelectorAll('.detail')
const doctor = document.querySelectorAll('.doctor > a')
console.log(detail_bg, detail, doctor)
for(let i of detail){i.style.display='none'}
doctor.forEach(function(t,i){
    t.addEventListener('mouseover',function(){
        detail_bg[i].style.background='rgba(0, 0, 0, 0.5)'
        detail[i].style.display='block'
    })
    t.addEventListener('mouseout',function(){
        detail_bg[i].style.background='none'
        detail[i].style.display='none'
    })
})
const doctor_btn = document.querySelectorAll('.doctor_btn a')
const doctor_contents = document.querySelectorAll('.doctor')
console.log(doctor_btn, doctor_contents)
for(let i of doctor_contents){i.style.display='none'}
doctor_contents[0].style.display='block'
doctor_btn.forEach(function(t,i){
    t.addEventListener('click',function(e){
        e.preventDefault()
        for(let j of doctor_btn){j.classList.remove('active')}
        t.classList.add('active')
        for(let n of doctor_contents){n.style.display='none'}
        doctor_contents[i].style.display='block'
    })
})


