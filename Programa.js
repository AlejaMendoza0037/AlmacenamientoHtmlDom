//creamos unos eventliceners
let btnbtnAlmacenar=document.getElementById("btnbtnAlmacenar");
let btnbtnBorrar=document.getElementById("btnbtnBorrar");
//cuando haga click en el noton ejecuteme la funcion se puede hacer la funcion por fuera


btnbtnAlmacenar.addEventListener("click", ()=>{
    //almacenar im dato en el e sessionStorage
    sessionStorage.setItem("Nombre: ", "Alejandra");
    sessionStorage.setItem("Apellido:", "Mendoza");

    localStorage.setItem("Nombre: ", "Hola");
    localStorage.setItem("Apellido:", "feo");
    
     
}  );

btnbtnBorrar.addEventListener("click", function(){
    sessionStorage.clear();
    localStorage.clear();    

});


//Dom, recorrer session storage y local storage
//mostrando las variables como una fila en la tabla
//tabla del dom
function buildingFilas(){

    let fuenteDatos=[localStorage, sessionStorage];//dos fuentes de datos

    for(let x=0; x < fuenteDatos.length; x++){
         let fuenteActual= fuenteDatos[x];//una fuente especifica, primero una despues la otra

        for(let i=0; i<fuenteActual.length;i++){//cantidad de elementos que tenga en el session estorage
    //columna 1
            let tableBody=document.getElementById("tableBody");//cuerpo de la table, la table
            //inserteme una fila
            let fila=document.createElement("tr");
            let celda= document.createElement("td");//celda o columna
            //crear un elemento on nodo de texto
            let texto= document.createTextNode(fuenteActual.key(i));
            celda.appendChild(texto);
            fila.appendChild(celda);



    //columna2

            celda=document.createElement("td");
            let valor=fuenteActual.getItem(fuenteActual.key(i));
            texto=document.createTextNode(valor);
            celda.appendChild(texto);
            fila.appendChild(celda);//señor fila agregueme una columna o una celda
            tableBody.appendChild(fila);



    }
}

    





        }



    

buildingFilas();


 