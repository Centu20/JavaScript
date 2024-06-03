console.log("Hello world! :D");



function prueba() {
    console.log("prueba de la funcion");
    let textInput = document.querySelector("#analisis").value;
    let tituloH1 = document.querySelector("#beta");
    console.log(textInput);
    tituloH1.textContent = textInput;
    tituloH1.style.color = 'rgb($(math.random() * 256),$(math.random() * 256),$(math.random() * 256)';

}