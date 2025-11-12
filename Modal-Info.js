// Mensajes Modal Info Servicios y Turnos

// Abre el modal informativo y coloca contenido según el tipo de servicio recibido
// Parámetros:
//  - tipo: string que determina qué contenido cargar. Valores esperados: "mantenimiento", "accesorios"
function abrirModalInfo(tipo) {
    let contenido = "";
    // Si es de tipo mantenimiento, se crea el HTML correspondiente
    if (tipo === "mantenimiento") {
        contenido = `
        <h2>Servicios de Mantenimiento</h2>
        
        <p>Ofrecemos mantenimiento preventivo y correctivo con técnicos certificados, diagnóstico computarizado y repuestos originales. ¡Solicita tu turno!</p>
        <ul>
            <li>Cambio de aceite y filtros</li>
            <div class="modal-img-row">
            <img src="Atencion al Cliente Fotos/IMG servicios/Aceite.png" alt="Cambio de aceite" style="height:150px;">
            <img src="Atencion al Cliente Fotos/IMG servicios/Filtro.png" alt="Filtro" style="height:150px;">
            
        </div>
            <li>Revisión de frenos y suspensión</li>
            <div class="modal-img-row">
            <img src="Atencion al Cliente Fotos/IMG servicios/Frenos.png" alt="Frenos" style="height:150px;">
            <img src="Atencion al Cliente Fotos/IMG servicios/Suspension.png" alt="Suspension" style="height:150px;">
        </div>
            <li>Chequeo general y escaneo electrónico</li>
            <div class="modal-img-row">
            <img src="Atencion al Cliente Fotos/IMG servicios/Chequeo.png" alt="Chequeo" style="height:150px;">
            <img src="Atencion al Cliente Fotos/IMG servicios/Escaner.png" alt="Escaner" style="height:150px;">
        </div>
        </ul>
        <p><strong>¡Solicita tu turno y mantené tu auto como nuevo!</strong></p>
        <button class="BTN_Turno" onclick="abrirFormularioTurno()">Solicitar turno</button>
    `;
        // Si es de tipo accesorios, se crea el bloque HTML correspondiente
    } else if (tipo === "accesorios") {
        contenido = `
            <h2>Venta de Accesorios y Repuestos</h2>
            <p>Contamos con repuestos originales y accesorios para todos los modelos. Garantía y calidad asegurada.</p>
            <ul>
                <li>Baterías, lámparas, limpiaparabrisas</li>
            <div class="modal-img-row">
                <img src="Atencion al Cliente Fotos/IMG servicios/Bateria.png" alt="Bateria" style="height:150px;">
                <img src="Atencion al Cliente Fotos/IMG servicios/Focos.png" alt="Focos" style="height:150px;">
                <img src="Atencion al Cliente Fotos/IMG servicios/LimpiaParabrisas.png" alt="LimpiaParabrisas" style="height:150px;">
                <!-- Agrega más imágenes aquí -->
            </div>
                <li>Tapizados, alfombras, cubiertas</li>
            <div class="modal-img-row">
                <img src="Atencion al Cliente Fotos/IMG servicios/Tapizado.png" alt="Tapizado" style="height:150px;">
                <img src="Atencion al Cliente Fotos/IMG servicios/Alfombras.png" alt="Alfombras" style="height:150px;">
                <img src="Atencion al Cliente Fotos/IMG servicios/Cubiertas.png" alt="Cubiertas" style="height:150px;">
               
            </div>

                
            </ul>
        `;
    }
    // Inserta el contenido generado en el modal
    document.getElementById('modal-texto').innerHTML = contenido;
    // se muestra el modal informativo cambiando su estilo a visible (flex)
    document.getElementById('modal-info').style.display = 'flex';
}
// Cierra el modal informativo
function cerrarModalInfo() {
    // Oculta el modal ajustando display a none
    document.getElementById('modal-info').style.display = 'none';
}
// Abre el modal con el formulario para solicitar turno
function abrirFormularioTurno() {
    document.getElementById('modal-turno').style.display = 'flex';
}
// Cierra el modal del formulario de turno
function cerrarFormularioTurno() {
    // Oculta el modal ajustando display a none
    document.getElementById('modal-turno').style.display = 'none';
}
