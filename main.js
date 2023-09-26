const ventanas =[...document.querySelectorAll(".ventana")];
const btn = document.querySelectorAll(".btn")
const options = document.querySelectorAll(".option");
const topic = document.querySelector(".topics")
const nombre = document.querySelector(".nombre")
const email = document.querySelector(".mail")
const inputNombre = document.querySelector(".inputNombre")
const inputEmail = document.querySelector(".inputEmail")

let pasarNombre;
let pasarEmail;
let value;
let topics = [];
let valorIndex;

btn.forEach(x => {
    x.addEventListener("click", () =>{
        cambiarVentana(1);
       
    })
})

const cambiarVentana= (add) =>{
    let data = document.querySelector(".ventana--show").dataset.id;
    value = Number(data);
    value+= add;

 ventanas[Number(value)-2].classList.remove("ventana--show")
 ventanas[value-1].classList.add("ventana--show");
    if(value === 2){
        ponerNe();
    }
 if(value === 3){
        ponerTopics();
    }

    
}

options.forEach(k =>{
    k.addEventListener("click", () =>{
        if(k.classList[1] === "marcado"){
            valorIndex = topics.indexOf(k.textContent)
            topics.splice(valorIndex, 1);
             k.classList.remove("marcado")
             
        } else{
            k.classList.add("marcado")
            topics.push(k.textContent)
            
        }         
        
        console.log(topics)
       
       
       
    })
    
})

const ponerTopics = () =>{

     for (let i = 0; i < topics.length; i++) {
        const elemento = 
         `
        <li>${topics[i]}</li>
         `
        topic.insertAdjacentHTML("beforeend",elemento)
     }
    
    
}
const ponerNe = () =>{
    pasarNombre = inputNombre.value;
    pasarEmail = inputEmail.value;

    nombre.textContent = pasarNombre;
    email.textContent = pasarEmail;
}