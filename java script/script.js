console.log("Hello world! :D");



function prueba() {
    console.log("prueba de la funcion");
    let textInput = document.querySelector("#analisis").value;
    let tituloH1 = document.querySelector("#beta");
    let EstilosBody = document.querySelector("#cuerpo");
    let FormaDiv = document.querySelector("#elemento");
    console.log(textInput);
    tituloH1.textContent = textInput;
    tituloH1.style.color = `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256}`;
    EstilosBody.style.backgroundColor = `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256}`;
    FormaDiv.style.backgroundColor = `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256}`;

}