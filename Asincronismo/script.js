document.addEventListener('DOMContentLoaded', () => {
    const pararPartidoBtn = document.querySelector('.boton');
    const cuadro = document.querySelector('.cuadro');

    // Función para simular una decisión aleatoria del VAR
    function simularDecisionVAR() {
        const decisiones = ['Falta', 'Fuera de lugar', 'Amarilla', 'Roja', 'Penal'];
        const indiceAleatorio = Math.floor(Math.random() * decisiones.length);
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(decisiones[indiceAleatorio]);
            }, 5000); // Simula 5 segundos de espera
        });
    }

    // Función para mostrar el resultado debajo del botón
    function mostrarResultado(resultado) {
        const resultadoParrafo = document.createElement('p');
        resultadoParrafo.textContent = resultado;
        cuadro.appendChild(resultadoParrafo);
    }

    // 1. Operaciones síncronas vs asíncronas (implícito)
    // La inicialización del evento es síncrona.
    // La simulación del VAR con setTimeout es asíncrona.

    // 2. Callbacks (ejemplo básico, aunque las Promesas son más elegantes aquí)
    function mostrarMensajeCallback(callback) {
        const mensajeEspera = document.createElement('p');
        mensajeEspera.textContent = 'Esperando la decisión del VAR...';
        cuadro.appendChild(mensajeEspera);
        // Aquí no se usa un callback tradicional para la decisión final,
        // las Promesas o Async/Await son más adecuadas para manejar la asincronía.
    }

    // 3. Promesas
    function pararPartidoConPromesas() {
        mostrarMensajeCallback(); // Muestra el mensaje de espera (síncrono)
        pararPartidoBtn.disabled = true; // Deshabilita el botón

        simularDecisionVAR()
            .then(decision => {
                mostrarResultado(decision);
            })
            .catch(error => {
                console.error('Error al obtener la decisión del VAR:', error);
                mostrarResultado('Hubo un error al consultar el VAR.');
            })
            .finally(() => {
                pararPartidoBtn.disabled = false; // Habilita el botón nuevamente
            });
    }

    // 4. Async/Await (una forma más moderna y legible de trabajar con Promesas)
    async function pararPartidoConAsyncAwait() {
        mostrarMensajeCallback(); // Muestra el mensaje de espera (síncrono)
        pararPartidoBtn.disabled = true; // Deshabilita el botón

        try {
            const decision = await simularDecisionVAR();
            mostrarResultado(decision);
        } catch (error) {
            console.error('Error al obtener la decisión del VAR:', error);
            mostrarResultado('Hubo un error al consultar el VAR.');
        } finally {
            pararPartidoBtn.disabled = false; // Habilita el botón nuevamente
        }
    }

    // Evento al hacer clic en el botón (puedes elegir cuál de las funciones usar)
    pararPartidoBtn.addEventListener('click', pararPartidoConAsyncAwait);
    // Si prefieres usar Promesas puras, usa la siguiente línea en su lugar:
    // pararPartidoBtn.addEventListener('click', pararPartidoConPromesas);
});
