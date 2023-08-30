const nav_bg = document.querySelector('.nav_bg')
const sub = document.querySelectorAll('.sub')
const nav = document.querySelectorAll('nav ul li')
const nav_line = document.querySelectorAll('nav ul li > a')
console.log(nav_bg, sub, nav)
nav_bg.style.display='none'
for(let i of sub){i.style.display='none'}
for(let i of sub){i.style.borderTop='3px solid #fff'}
nav.forEach(function(t,i){
    t.addEventListener('mouseover',function(){
        for(let i of sub){i.style.display='flex'}
        nav_bg.style.display='block'
        sub[i].style.borderTop='3px solid #2E4198'
        sub[i].style.background='#f4f4f4'
    })
    t.addEventListener('mouseout',function(){
        for(let i of sub){i.style.display='none'}
        nav_bg.style.display='none'
        sub[i].style.borderTop='3px solid #fff'
        sub[i].style.background='none'
    })
})