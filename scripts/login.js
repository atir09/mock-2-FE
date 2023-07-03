let form=document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log("changing")
    window.location.href="data.html"
})

function data(){
    window.location.href="data.html"
}

function reports(){
    window.location.href="reports.html"
}