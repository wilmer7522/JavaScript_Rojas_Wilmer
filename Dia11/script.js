let url = 'https://randomuser.me/api/'

let imagen = document.querySelector(".imagenPerfil")
let texto =  document.querySelector(".texto")
let name1 = document.querySelector(".name")
let lastName = document.querySelector(".lastName")
let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")
let img4 = document.getElementById("img4")
let img5 = document.getElementById("img5")
let img6 = document.getElementById("img6")



fetch(url)
    .then(res => res.json())
    .then(Data => {

        imagen.src = Data.results[0].picture.large
        texto.innerHTML = "Hi, My Name is"
        name1.innerHTML = Data.results[0].name.first
        lastName.innerHTML = Data.results[0].name.last
       

        
       img1.addEventListener("mousemove", (w)=>{
            w.target.style = "background-position-y: -0.1em;"
            img2.style  = "background-position-y: 6em;"
            img3.style  = "background-position-y: 6em;"
            img4.style  = "background-position-y: 6em;"
            img5.style  = "background-position-y: 6em;"
            img6.style  = "background-position-y: 6em;"

            imagen.src = Data.results[0].picture.large
            texto.innerHTML = "Hi, My Name is"
            name1.innerHTML = Data.results[0].name.first
            lastName.innerHTML = Data.results[0].name.last
        })


        img2.addEventListener("mouseenter", (w)=>{
            w.target.style = "background-position-y: -0.1em;"
            img1.style  = "background-position-y: 6em;"
            img3.style  = "background-position-y: 6em;"
            img4.style  = "background-position-y: 6em;"
            img5.style  = "background-position-y: 6em;"
            img6.style  = "background-position-y: 6em;"
            imagen.src = Data.results[0].picture.large
            texto.innerHTML = "My email address is"
            name1.innerHTML = Data.results[0].email
            lastName.innerHTML = ""
        })

        
        img3.addEventListener("mouseenter", (w)=>{
            w.target.style = "background-position-y: -0.1em;"
            img1.style  = "background-position-y: 6em;"
            img2.style  = "background-position-y: 6em;"
            img4.style  = "background-position-y: 6em;"
            img5.style  = "background-position-y: 6em;"
            img6.style  = "background-position-y: 6em;"
            imagen.src = Data.results[0].picture.large
            texto.innerHTML = "My birthday is"
            name1.innerHTML = new Date(Data.results[0].dob.date).toLocaleDateString('en-US', 
            { year: 'numeric', month: '2-digit', day: '2-digit' })
            lastName.innerHTML = ""
        })


        img4.addEventListener("mouseenter", (w)=>{
            w.target.style = "background-position-y: -0.1em;"
            img1.style  = "background-position-y: 6em;"
            img2.style  = "background-position-y: 6em;"
            img3.style  = "background-position-y: 6em;"
            img5.style  = "background-position-y: 6em;"
            img6.style  = "background-position-y: 6em;"
            imagen.src = Data.results[0].picture.large
            texto.innerHTML = "My address is"
            name1.innerHTML = Data.results[0].location.street.number
            lastName.innerHTML = Data.results[0].location.street.name
        })


        img5.addEventListener("mouseenter", (w)=>{
            w.target.style = "background-position-y: -0.1em;"
            img1.style  = "background-position-y: 6em;"
            img2.style  = "background-position-y: 6em;"
            img3.style  = "background-position-y: 6em;"
            img4.style  = "background-position-y: 6em;"
            img6.style  = "background-position-y: 6em;"
            imagen.src = Data.results[0].picture.large
            texto.innerHTML = "My phone number is"
            name1.innerHTML = Data.results[0].phone
            lastName.innerHTML = ""
        })


        img6.addEventListener("mouseenter", (w)=>{
            w.target.style = "background-position-y: -0.1em;"
            img1.style  = "background-position-y: 6em;"
            img2.style  = "background-position-y: 6em;"
            img3.style  = "background-position-y: 6em;"
            img4.style  = "background-position-y: 6em;"
            img5.style  = "background-position-y: 6em;"
            imagen.src = Data.results[0].picture.large
            texto.innerHTML = "My password is"
            name1.innerHTML = Data.results[0].login.password
            lastName.innerHTML = ""
        })


            


        

        
    })