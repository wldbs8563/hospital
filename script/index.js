const btn = document.querySelectorAll('.tab_left > a')
const contents = document.querySelectorAll('.contents')
console.log(btn, contents)
contents[1].style.display='none'
btn.forEach(function(t,i,a){
    t.addEventListener('click',function(e){
        e.preventDefault()
        for(let j of btn){j.classList.remove('active')}
        t.classList.add('active')
        for(let n of contents){n.style.display='none'}
        contents[i].style.display='block'
    })
})