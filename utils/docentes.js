import{inicializarProfesores} from "./data.js"
inicializarProfesores();

const tableDiv = document.getElementById("tableDiv")
const profesoresData = JSON.parse(localStorage.getItem("profesores"))
const searchForm = document.getElementById("searchForm")
const searchInput = document.getElementById("searchInput")
const searchSelect = document.getElementById("searchSelect")


function mostrarProfesores(data){
    data.forEach(profesor => {
        if(profesor.active === true){
        const nombre = profesor.nombres
        const apellidos = profesor.apellidos
        const id = profesor.codigo
        const area = profesor.areaAcademica
        const email = profesor.email
        const foto = profesor.fotoUrl

        const profesorDiv = document.createElement("div")
        profesorDiv.classList.add("profesorDiv")
        profesorDiv.innerHTML=`
        <div class="profesorName"><img src=${foto}> ${nombre} ${apellidos}</div>
        <div>${id}</div>
        <div>${email}</div>
        <div>${area}</div>
        <div class="profesorDivBtns"><button class="btn editBtn" title="Editar Docente" data-id=${id}><i class="fa-solid fa-pen-to-square editBtnI"></i></button>
            <button class="btn deleteBtn" title="Eliminar Docente" data-id=${id}><i class="fa-solid fa-xmark"></i></button></div>
        `
        tableDiv.append(profesorDiv)
        }
    });
}
function buscarProfesores(searchQuery){
    return profesoresData.filter(profesor =>(
    (profesor.nombres.toLowerCase().includes(searchQuery.toLowerCase())
    || profesor.apellidos.toLowerCase().includes(searchQuery.toLowerCase()) 
    || profesor.codigo.toLowerCase().includes(searchQuery.toLowerCase())
    )
&&  (profesor.areaAcademica.toLowerCase() === searchSelect.value.toLowerCase() || searchSelect.value==="")))
}

searchForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    tableDiv.innerHTML=""
    tableDiv.innerHTML=`
    <div class="tableHeaderDiv">
        <div>Nombre</div>
        <div>Còdigo</div>
        <div>Email</div>
        <div>Àrea</div>
        <div></div>
    </div>
    `
    let searchQuery = searchInput.value
    let filteredProfesores = buscarProfesores(searchQuery)
    mostrarProfesores(filteredProfesores);
})

//==Carga inicial==
mostrarProfesores(profesoresData)
let areas = [];
    profesoresData.forEach(profesor => {
        if(areas.includes(profesor.areaAcademica) === false){
            areas.push(profesor.areaAcademica)
        }
    })
    areas.forEach(area => {
        let areaOpt = document.createElement("option")
        areaOpt.value=area.toLowerCase()
        areaOpt.innerHTML=area
        searchSelect.append(areaOpt)
    })


function editProfesor(editBtn){
    console.log("EDITAR"+editBtn.dataset.id)
    let profesorData = buscarProfesores(editBtn.dataset.id)
    console.log(profesorData)
    const editProfesorDiv = document.createElement("div")
    editProfesorDiv.classList.add("editProfesorDiv")
    editProfesorDiv.innerHTML=`
    <div><img src=${profesorData[0].fotoUrl}></div>
    <div>${profesorData[0].nombres} ${profesorData[0].apellidos}</div>
    <div>${profesorData[0].email}</div>
    <div>${profesorData[0].codigo}</div>
    <div>${profesorData[0].identificacion}</div>
    <div>${profesorData[0].areaAcademica}</div>
    `

    document.body.append(editProfesorDiv)
}
tableDiv.addEventListener("click", (e)=>{
    const editBtn = e.target.closest(".editBtn");
    const deleteBtn = e.target.closest(".deleteBtn");
    if(editBtn){
        editProfesor(editBtn)
    }
    if(deleteBtn){
    console.log("ELIMINAR" + deleteBtn.dataset.id)
    }
})