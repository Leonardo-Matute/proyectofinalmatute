let opcionesNoches = document.querySelector(".opciones-noches");

let mostrarReserva = () => {
  let listadoreserva = JSON.parse(localStorage.getItem("reserva"));

  for (let index = 0; index < listadoreserva.length; index++) {
    let div = document.createElement("div");
    div.className = "col s4";
    div.innerHTML = `
		<div class="card text-center">
		<div class="card-header">
		${listadoreserva[index].mail}
			</div>
			<div class="card-body">
			<h5 class="card-title">${listadoreserva[index].nombre}</h5>
				<p class="card-text">${listadoreserva[index].apellido}</p>
					</div>
					<div class="card-footer text-muted">
					Telefono: 
					${listadoreserva[index].telefono}
						</div>
						</div>
						`;

    opcionesNoches.appendChild(div);
  }
};

if (localStorage.getItem('reserva')) {
    swal("Hay Reservas");
    mostrarReserva();
} else {
    swal("No hay Reservas");;
  }

