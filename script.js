const button = document.getElementById('buttonid')
const username = document.getElementById('username')
const password = document.getElementById('password')

const dan = 'daniel'
const password1 = 'daniel'


button.addEventListener('click',checker)

function checker(){
    if (username.value == dan && password.value == password1)
        doSomething();

}

function doSomething() {
    document.getElementById("failed").innerText = "Success";
}
