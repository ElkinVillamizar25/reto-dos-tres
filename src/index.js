const personajes = [
    { name:"Rhaenyra Targaryen"},
    { name:"Viserys I Targaryen"},
    { name:"Daemon Targaryen"},
    { name:"Rhaenys Targaryen"},
    { name:"Otto Hightower"},
    { name:"Alicent Hightower"},
    { name:"Corlys Velaryon"},
    { name:"Criston Cole"},
    { name:"Mysaria"}
];

personajes.map((name) => console.log(name.name) );

//Buscador

const buscador = document.querySelector('#buscador');

const boton = document.querySelector('#boton');

const resultado = document.querySelector('#resultado');

const filtrar = () => {
    //console.log(buscador.value);
    resultado.innerHTML = '';

    const texto = buscador.value.toLowerCase();
    for(let personaje of personajes){
        let nombre = personaje.name.toLowerCase();
        if(nombre.indexOf(texto) !== -1){
            resultado.innerHTML += `<li>${personaje.name}</li>`
        }
    }

    if(resultado.innerHTML === ''){
        resultado.innerHTML += `<li>Personaje no encontrado...</li>`
    }

}

boton.addEventListener('click', filtrar);
buscador.addEventListener('keyup', filtrar);