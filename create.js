// fetch camas.json and display in create page#

let camas = [];

window.onload = async () => {	
	await fetch('./datos.json')
	.then(res => res.json())
	.then(data => {
		data.forEach((cama) => {
			camas.push(cama);
		})
	})
	.then(() => {
		camaOpciones(camas);
	})
	.catch(error => console.error(error));
}

// Function passes JSON data to create page

const camaOpciones = (camas) => {
	let opciones = camas.map((cama, index) =>
	`<option value=${index}>${cama.nombre} ${cama.precio}</option>`
	).join('');
	
	
	document.querySelector("#seleccion-de-camas").innerHTML = opciones;
};

// Guarda la reserva.


const guardarReserva = (clave, valor) => {
	const reservas = JSON.parse(localStorage.getItem(clave) || "[]");
	console.log(`numero de reservas ${reservas.length}`);
	reservas.push(valor);
	localStorage.setItem(clave, JSON.stringify(reservas));
    swal({
  title: "Estas Seguro de Guardar esta reserva",
  text: "Una vez que selecciones OK se guardara la reserva",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("La reserva ha sido resgistrada Exitosamente", {
      icon: "success",
    });
  } else {
    swal("La reserva esta Guardada en el resgistro");
  }
});
}

agregar.addEventListener('click', () => {
  const nuevaReserva =
    {
      nombre: document.querySelector('#nombre').value,
      apellido: document.querySelector('#apellido').value,
      mail: document.querySelector('#mail').value,
      telefono: document.querySelector('#telefono').value,
      cama: document.querySelector('#seleccion-de-camas').value  
    }



  guardarReserva('reserva', nuevaReserva);
});
