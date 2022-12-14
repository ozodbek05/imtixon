'use strict'
$('.open_eye').addEventListener('click',()=>{
    $('.close_eye').style.display='block';
    $('.open_eye').style.display='none';
    const type = $('#signIn_password').getAttribute("type") 
    if(type === "password") {
        $('#signIn_password').setAttribute("type", "text")
    }
    console.log(type);
})
$('.close_eye').addEventListener('click',()=>{
    $('.close_eye').style.display='none';
    $('.open_eye').style.display='block';
    const type = $('#signIn_password').getAttribute("type") 
    if(type === "text") {
        $('#signIn_password').setAttribute("type", "password")
    }
    console.log(type);
})


let urlUser = "https://task.samid.uz/v1/user"

$('#send_signIn').addEventListener('submit', (e) => {
    e.preventDefault()
    let name = $('#signIn_name').value.trim()
    let password = $('#signIn_password').value.trim()
    const users = {
        username: name,
        password: password
    }
    if (users.username.length === 0 || users.password.length === 0) {
        alert('Plase fill ...')
    } else {
        fetch(`${urlUser}/sign-in`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(users)
        }).then(data => data.json()).then(res =>{
            if(res.code == '-1'){
                alert(res.errors.username)
            }else{
                localStorage.setItem('token',res.data.token)
                localStorage.setItem('name',res.data.username)
                window.location.replace('../index.html')
    
            }
        })
    }

})

