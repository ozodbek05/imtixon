'use strict'

function OutSignPage(){
    if(!localStorage.getItem('token')){
        window.location.replace('./sign_up.html')
    }
}
OutSignPage()

$('#userNameHome').innerHTML = localStorage.getItem('name')

$('.navbar-toggler-icon').addEventListener('click', ()=>{
    $('.res_mob_menu').classList.toggle('close_menu')
    $('body').style.overflowY = 'hidden'
    $('.res_mob_menu').style.transition='all 1s'

})
$('.bi-x-lg').addEventListener('click', ()=>{
    $('.res_mob_menu').classList.toggle('close_menu')
    $('body').style.overflowY = 'unset'
    $('.res_mob_menu').style.transition='all 1s'

})
$('.res_back').addEventListener('click', ()=>{
    $('.res_mob_menu').classList.toggle('close_menu')
    $('.res_mob_menu').style.transition='all 1s'
    $('body').style.overflowY = 'unset'
})

$('.username_icon').addEventListener('click', ()=>{
    $('#outSignIn').classList.toggle('close')
})
$('#outSignIn').addEventListener('click',()=>{
    localStorage.clear()
    window.location.reload()
})
$('#btn_res_signOut').addEventListener('click',()=>{
    localStorage.clear()
    window.location.reload()
})


