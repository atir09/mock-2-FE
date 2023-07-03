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




function RenderDisplay(userData) {
    main.innerHTML = `
        ${Listofcards(userData).join(" ")}
     `
}

function Listofcards(userData) {
    let list = []
    userData.forEach((el) => {
        list.push(Card(el))
    })

    return list
}

function Card(el) {
    return `
    <div class="card">
    <div class="img-icon">
        <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="">
    </div>
    <div>Name:${el.name}</div>
    <div>
        Age:${el.age}
    </div>
    <div>Place:${el.place}</div>
    <div>Batch-No:${el.batch_name}</div>
    <div>Profession:${el.profession}</div>
    <div><button onclick="Edit(${el.id})">Edit</button>
    <button onclick="Delete(${el.id})">Delete</button></div>
</div>
    `
}




// ......................Sort Functionality..............................

let sort=document.getElementById("sort-age")

sort.addEventListener("change",(e)=>{
    e.preventDefault()
    if(sort.value=="asc"){
        userData=userData.sort((a,b)=>{
            return (a.age - b.age)
        })
    }else{
        userData=userData.sort((a,b)=>{
            return (b.age - a.age)
        })
    }

    RenderDisplay(userData)
})



// .......................Filter ........................

let filter_input=document.getElementById("filter-prof")

function filter(){
    // if(filter_input.value=""){
    //     RenderDisplay(userData)
    //     return
    // }
    let temp=userData.filter((el)=>{
        if(filter_input.value==el.profession || filter_input.value==""){
            return true
        }
    })

    RenderDisplay(temp)
}


// Search.................

let search_input=document.getElementById("search-txt")

function Search(){
    let tempSearch=userData.filter((el)=>{
        if(el.name.toLowerCase().includes(search_input.value.toLowerCase())){
            return true
        }
        
    })

    RenderDisplay(tempSearch)
}