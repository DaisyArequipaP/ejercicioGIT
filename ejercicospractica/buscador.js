const input = document.getElementById('input')
const boton = document.getElementById('buscar')
const lista = document.getElementById('lista')

const canciones = ['cancion de duki', 'cancion de emilia', 'cancion de tini ', 'otra de duki']

boton.addEventListener('click', function () {
  const valor = input.value


  const cancionesQueCumplen = canciones.filter(c => c.includes(valor))

  lista.innerHTML = cancionesQueCumplen.map(cancionQueCumplio => `<li>${cancionQueCumplio}</li>`)
  if (cancionesQueCumplen.length === 0) {
    lista.innerHTML = '<li>No se encontraron canciones</li>'
  }
})