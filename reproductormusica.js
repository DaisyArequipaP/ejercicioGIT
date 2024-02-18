/*document.addEventListener("DOMContentLoaded", function () {
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
});*/
const input = document.getElementById('input')
const boton = document.getElementById('buttom_search')
const lista = document.getElementById('lista')
const canciones = ['Cancion 1', 'Cancion 2', 'Cancion 3 ','Cancion 22 ' ]


boton.addEventListener('click', function () {
  const valor = input.value


  const cancionesQueCumplen = canciones.filter(c => c.includes(valor))

  lista.innerHTML = cancionesQueCumplen.map(cancionQueCumplio => `<li>${cancionQueCumplio}</li>`)
  if (cancionesQueCumplen.length === 0) {
    lista.innerHTML = '<li>No se encontraron canciones</li>'
  }
})
/*Clase Canciones para saber los detalles de cada cancion*/
class Song{
    constructor(nombre, autor, duracion, anio, genero, letra, cover, urlSong){
        this.nombre = nombre;
        this.autor = autor;
        this.duracion = duracion;
        this.anio = anio;
        this.genero = genero;
        this.letra = letra;
        this.cover = cover;
        this.urlSong = urlSong;
    }


}
/*Clase Playlist para saber los detalles de cada cancion*/
class Playlist{
    constructor(nombre, listaCanciones, ordenEscucha){
        this.nombre = nombre;
        this.listaCanciones = listaCanciones;
        this.ordenEscucha = ordenEscucha;
    }
}
/*Clase Reproductor para saber los detalles de cada cancion*/
class Reproductor {
    catalogodeCancione;
    currentSong;
    currentPlaylist;
    constructor(){
        this.catalogodeCancione = [
            new Song(nombre:)
        ]
    }
}



/*class Reproductor {
    catalogodecanciones;
    currentSong;
    constructor (nombre, artista, año, duracion, genero){
        this.catalogodecanciones = [
            new Song(nombre:"cancion 1",artista: "artista 1", año: "año 1",duracion: "duracion 1", genero: "genero 1"),
            new Song(nombre:"cancion 2",artista: "artista 2", año: "año 2",duracion: "duracion 2", genero: "genero 2"),
            new Song(nombre:"cancion 3",artista: "artista 3", año: "año 3",duracion: "duracion 3", genero: "genero 3"),
            new Song(nombre:"cancion 4",artista: "artista 4", año: "año 4",duracion: "duracion 4", genero: "genero 4"),
            new Song(nombre:"cancion 5",artista: "artista 5", año: "año 5",duracion: "duracion 5", genero: "genero 5"),
            new Song(nombre:"cancion 6",artista: "artista 6", año: "año 6",duracion: "duracion 6", genero: "genero 6"),
            new Song(nombre:"cancion 7",artista: "artista 7", año: "año 7",duracion: "duracion 7", genero: "genero 7"),
            new Song(nombre:"cancion 8",artista: "artista 8", año: "año 8",duracion: "duracion 8", genero: "genero 8"),
            new Song(nombre:"cancion 9",artista: "artista 9", año: "año 9",duracion: "duracion 9", genero: "genero 9"),
            new Song(nombre:"cancion 10",artista: "artista 10", año: "año 10",duracion: "duracion 10", genero: "genero 10"),
            new Song(nombre:"cancion 11",artista: "artista 11", año: "año 11",duracion: "duracion 11", genero: "genero 11"),
            new Song(nombre:"cancion 12",artista: "artista 12", año: "año 12",duracion: "duracion 12", genero: "genero 12"),
            new Song(nombre:"cancion 13",artista: "artista 13", año: "año 13",duracion: "duracion 13", genero: "genero 13"),
            new Song(nombre:"cancion 14",artista: "artista 14", año: "año 14",duracion: "duracion 14", genero: "genero 14"),
            new Song(nombre:"cancion 15",artista: "artista 15", año: "año 15",duracion: "duracion 15", genero: "genero 15"),
            new Song(nombre:"cancion 16",artista: "artista 16", año: "año 16",duracion: "duracion 16", genero: "genero 16"),
            new Song(nombre:"cancion 17",artista: "artista 17", año: "año 17",duracion: "duracion 17", genero: "genero 17"),
            new Song(nombre:"cancion 18",artista: "artista 18", año: "año 18",duracion: "duracion 18", genero: "genero 18"),
            new Song(nombre:"cancion 19",artista: "artista 19", año: "año 19",duracion: "duracion 19", genero: "genero 19"),
            new Song(nombre:"cancion 20",artista: "artista 20", año: "año 20",duracion: "duracion 20", genero: "genero 20"),
            new Song(nombre:"cancion 21",artista: "artista 21", año: "año 21",duracion: "duracion 21", genero: "genero 21"),
            new Song(nombre:"cancion 22",artista: "artista 22", año: "año 22",duracion: "duracion 22", genero: "genero 22"),
            new Song(nombre:"cancion 23",artista: "artista 23", año: "año 23",duracion: "duracion 23", genero: "genero 23"),
            new Song(nombre:"cancion 24",artista: "artista 24", año: "año 24",duracion: "duracion 24", genero: "genero 24"),
            new Song(nombre:"cancion 25",artista: "artista 25", año: "año 25",duracion: "duracion 25", genero: "genero 25"),
            new Song(nombre:"cancion 26",artista: "artista 26", año: "año 26",duracion: "duracion 26", genero: "genero 26"),
            new Song(nombre:"cancion 27",artista: "artista 27", año: "año 27",duracion: "duracion 27", genero: "genero 27"),
            new Song(nombre:"cancion 28",artista: "artista 28", año: "año 28",duracion: "duracion 28", genero: "genero 28"),
            new Song(nombre:"cancion 29",artista: "artista 29", año: "año 29",duracion: "duracion 29", genero: "genero 29"),
            new Song(nombre:"cancion 30",artista: "artista 30", año: "año 30",duracion: "duracion 30", genero: "genero 30"),    
        ];
        this.catalogodecanciones();
        this this.currentSong = this.catalogodecanciones[0];

    }
}*/