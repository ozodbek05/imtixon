'use strict'
$('.open_eye').addEventListener('click',()=>{
    const type = $('#reg_password').getAttribute("type") 
    if(type === "password") {
        $('#reg_password').setAttribute("type", "text")
    }
    else{
        $('#reg_password').setAttribute("type", "password")
    }
    $('.close_eye').style.display='block';
    $('.open_eye').style.display='none';
})
$('.close_eye').addEventListener('click',()=>{
    const type = $('#reg_password').getAttribute("type") 
    if(type === "text") {
        $('#reg_password').setAttribute("type", "password")
    }
    else{
        $('#reg_password').setAttribute("type", "text")
    }
    $('.close_eye').style.display='none';
    $('.open_eye').style.display='block';
})

const urlReg = "https://task.samid.uz/v1/user/sign-up"

$('#send_signUp').addEventListener('submit', (e) => {
    e.preventDefault()
    let name = $('#reg_name').value.trim()
    let email = $('#reg_email').value.trim()
    let password = $('#reg_password').value.trim()
    const users = {
        username: name,
        email: email,
        password: password
    }
    if (users.username.length === 0 || users.email.length === 0 || users.password.length === 0) {
        alert('Plase fill ...')
    } else {
        fetch(`${urlReg}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(users)
        }).then(data => data.json()).then(res =>{
            if(res.code == '-1'){
                alert(res.errors.username)
            }else{
                alert(res.message)
                setTimeout(()=>{
                    window.location.replace('../sign_in.html')
                },1000)
            }
        })
    }

})

