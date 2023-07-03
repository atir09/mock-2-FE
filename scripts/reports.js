const URL = "https://json-server-mock-2.onrender.com/"
let main = document.getElementById("main")

let userData = []

fetch(`${URL}users`)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        userData = data
        RenderDisplay(userData)
    })



function RenderDisplay() {
    let total_guests = userData.length
    let students = 0
    let working = 0
    let total_age=0
    let avg = 0

    for(let i of userData){
        if(i.profession=="Student" || i.profession=="student"){
            students++
        }else{
            working++
        }

        total_age+=i.age
    }

    document.getElementById("guests").innerText=total_guests
    document.getElementById("students").innerText=students
    document.getElementById("working").innerText=working
    document.getElementById("average").innerText=total_age/total_guests

}