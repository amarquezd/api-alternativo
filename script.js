const paco="https://github.com/amarquezd/api-alternativo/blob/main/productos.json"

function cargarDatos(url){

    fetch(url)
    .then(response => response.json())
    .then(productos => {

        productos.forEach(productos => {

            let row ="";

            row= `
            <p> Los productos que tenemos disponibles son:` + productos.id_productos + 
            `,` + productos.id_productos + `,` + productos.id_productos `. </p>`
            
            document.getElementById("info").innerHTML += row;
        });

    })

}

cargarDatos(paco);