let listaNombresGastos = [], listaValoresGastos = [], listaDescripcionesGastos = [];

function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;

    if (Number(valorGasto) > 150) {
        alert('¡Ten Cuidado! Este gasto supera los 150$');
    } else {
        listaNombresGastos.push(nombreGasto);
        listaValoresGastos.push(valorGasto);
        listaDescripcionesGastos.push(descripcionGasto);
        actualizarListaGastos();
    }
}

function actualizarListaGastos() {
    let htmlLista = '', totalGastos = 0;
    listaNombresGastos.forEach((nombre, pos) => {
        let valor = Number(listaValoresGastos[pos]);
        htmlLista += `<li>${nombre} - USD ${valor.toFixed(2)} - ${listaDescripcionesGastos[pos]}
                      <button onclick="eliminarGasto(${pos})">Eliminar</button>
                      <button onclick="modificarGasto(${pos})">Modificar</button></li>`;
        totalGastos += valor;
    });
    document.getElementById('listaDeGastos').innerHTML = htmlLista;
    document.getElementById('totalGastos').innerHTML = totalGastos.toFixed(2);
    limpiar();
}

function limpiar() {
    ['nombreGasto', 'valorGasto', 'descripcionGasto'].forEach(id => document.getElementById(id).value = '');
}

function eliminarGasto(pos) {
    listaNombresGastos.splice(pos, 1);
    listaValoresGastos.splice(pos, 1);
    listaDescripcionesGastos.splice(pos, 1);
    actualizarListaGastos();
}

function modificarGasto(pos) {
    ['nombreGasto', 'valorGasto', 'descripcionGasto'].forEach((id, i) => 
        document.getElementById(id).value = [listaNombresGastos, listaValoresGastos, listaDescripcionesGastos][i][pos]);
    document.getElementById('botonFormulario').innerHTML = 'Guardar Cambios';
    document.getElementById('botonFormulario').onclick = () => guardarCambios(pos);
}

function guardarCambios(pos) {
    ['nombreGasto', 'valorGasto', 'descripcionGasto'].forEach((id, i) =>
        [listaNombresGastos, listaValoresGastos, listaDescripcionesGastos][i][pos] = document.getElementById(id).value);
    actualizarListaGastos();
    document.getElementById('botonFormulario').innerHTML = 'Agregar Gasto';
    document.getElementById('botonFormulario').onclick = clickBoton;
}
