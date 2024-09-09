document.addEventListener("DOMContentLoaded", () => {
    const datosContenedor = document.querySelector(".opciones");
    const taskInput = document.getElementById('taskInput')
    const addTaskButton = document.getElementById('addTaskButton');

    async function fetchData() {
        const res = await fetch('https://66df33d9de4426916ee3e13d.mockapi.io/tareas')
        data = await res.json();
        return data;

    }

    function displayCapsula(capsula) {
        datosContenedor.innerHTML = '';
        capsula.forEach(cap => {
            const capDiv = document.createElement('div');
            if (cap.status === "ready") {

                capDiv.classList.add('capsulaNegativa')

                capDiv.innerHTML = `
            <div class="capsulaNegativa">
            <div class="infoTextNegativo">
                <p>${cap.task}</p>
            </div>
            <div class="botonesNegativo">
                <div class="terminadoNegativo">
                    <img src="./storage/storage/img/pngwing.com (2).png" data-id="${cap.id}" class="completado">
                </div> 

            </div>
            <div class="eliminadoNegativo">
                <img src="./storage/storage/img/pngwing.com (4).png" data-id="${cap.id}" class="eliminado">
            </div>


        </div>
            `

            }

            if (cap.status === "On hold") {
                capDiv.classList.add('capsula');
                capDiv.innerHTML = `
                <div class="capsula">
        <div class="infoText">
            <p>${cap.task}</p>
        </div>
        <div class="botones">
            <div class="terminado">
                <img src="./storage/storage/img/pngwing.com (2).png" data-id="${cap.id}" class="completado">
            </div>

        </div>
        <div class="eliminado">
            <img src="./storage/storage/img/pngwing.com (4).png" data-id="${cap.id}" class="eliminado">
        </div>


        </div>
                `
            }

            datosContenedor.appendChild(capDiv)

        });
        document.querySelectorAll('.completado').forEach(button=>{
            button.addEventListener('click', botonCompletado);
        })
        document.querySelectorAll('.eliminado').forEach(button=>{
            button.addEventListener('click', botonEliminado);
        })
    }

    async function addNewTask(){
        const task = taskInput.value;
        if (task.trim() === ''){
            return;
        }

        await fetch('https://66df33d9de4426916ee3e13d.mockapi.io/tareas',{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify({task,status: 'On hold'})
        });
        taskInput.value ='';
        const data = await fetchData();
        displayCapsula(data);
    }

    addTaskButton.addEventListener('click', addNewTask);


/*Agregar*/
    async function botonCompletado(event) {
        const id = event.target.getAttribute('data-id');
        await fetch(`https://66df33d9de4426916ee3e13d.mockapi.io/tareas/${id}`,{

            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify({status: 'ready'})
    });

    const data = await fetchData();
    displayCapsula(data);
    }


    /*Eliminar*/

    async function botonEliminado(event) {
        const id = event.target.getAttribute('data-id');
        await fetch(`https://66df33d9de4426916ee3e13d.mockapi.io/tareas/${id}`,{

            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json',
            },
            
    });

    const data = await fetchData();
    displayCapsula(data);
    }

    fetchData().then(data => {
        displayCapsula(data);
    })
})

