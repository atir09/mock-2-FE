const URL="https://json-server-mock-2.onrender.com/"

let form =document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    let obj={
        name:document.getElementById("input-name").value,
        age:document.getElementById("input-age").value,
        place:document.getElementById("input-place").value,
        batch_name:document.getElementById("input-batch").value,
        profession:document.getElementById("input-prof").value,
    }

    fetch(`${URL}users`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(obj)
    })

    .then(()=>{
        alert("Successfully Registered")
    })

})