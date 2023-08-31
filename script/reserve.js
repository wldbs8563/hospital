const reserve_btn = document.querySelectorAll('.reserve_btn a')
const reserve_contents = document.querySelectorAll('.reserve_title')
console.log(reserve_btn, reserve_contents)
reserve_contents[1].style.display='none'
reserve_btn.forEach(function(t,i){
    t.addEventListener('click',function(e){
        e.preventDefault()
        for(let j of reserve_btn){j.classList.remove('active')}
        t.classList.add('active')
        for(let n of reserve_contents){n.style.display='none'}
        reserve_contents[i].style.display='block'
    })
})