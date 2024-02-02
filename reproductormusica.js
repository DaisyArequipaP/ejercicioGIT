document.addEventListener("DOMContentLoaded", function () {
    let canciones = ["Cancion 1", "Cancion 2", "Cancion 3"];
    canciones.push("Cancion 4", "Cancion 5", "Cancion 6", "Cancion 7", "Cancion 8", "Cancion 9", "Cancion 10");

    document.getElementById("buttom_search").addEventListener("click", function () {
        let loqueelusuariometio = document.getElementById("buttom_search").value;
        let expresion = new RegExp(loqueelusuariometio, "i");

        let cancionesFiltradas = canciones.filter(
            song => expresion.test(song)
        );
        console.log("resultado de búsqueda: " + cancionesFiltradas);
    });

    debugger;

    let contendorBusqueda = document.getElementById("resultados");

    if (contendorBusqueda) {
        canciones.forEach(
            song => {
                contendorBusqueda.innerHTML += `<li class="cancion">${song} <button class="fa-solid fa-play" id="play-btn"></button>
                    <button class="fa-solid fa-heart" id="fav-btn"></button>
                    <button class="fa-regular fa-heart" id="favsel-btn"></button>
                    <button class="fa-solid fa-plus" id="add-btn"></button>
                </li>`;
            }
        );
    } else {
        console.error("No se encontró el elemento con el ID 'resultados'");
    }
});
