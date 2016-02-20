/*filtro del input*/
// Nuestro arreglo de objetos
var cafeterias = [{
	nombre:"El dorado",
	distancia: 250,
	ubicacion:"Lima",
	descripcion:"Ensaladas, Postres y Gelatina."
}, {
	nombre:"El sol",
	distancia: 200,
	ubicacion:"Ica",
	descripcion:"Ensaladas, Postres y menu."
}, {
	nombre:"Juanita",
	distancia: 2,
	ubicacion:"Tacna",
	descripcion:"Ensaladas, Postres y sopas."
}, {
	nombre:"Orgánica Lucia ",
	distancia: 100,
	ubicacion:"Ica",
	descripcion:"Ensaladas, Postres y menu."
}, {
	nombre:"Marilyn",
	distancia: 90,
	ubicacion:"Tacna",
	descripcion:"Ensaladas, Postres y sopas."
}, {
	nombre:"María",
	distancia: 50,
	ubicacion:"Ica",
	descripcion:"Cafe, anis."
}, {
	nombre:"La Luna",
	distancia: 250,
	ubicacion:"Piura",
	descripcion:"Ensaladas, Cafe y Gelatina."
}, {
	nombre:"Las Estrellas",
	distancia: 10,
	ubicacion:"Cajamarca",
	descripcion:"Postres y menu."
}, {
	nombre:"Juanito",
	distancia: 112,
	ubicacion:"Tacna",
	descripcion:"Ensaladas, cafe y sopas."
}, {
	nombre:"Lucia coffee ",
	distancia: 400,
	ubicacion:"Ayacucho",
	descripcion:"Ensaladas, Postres y menu."
}, {
	nombre:"Mario",
	distancia: 40,
	ubicacion:"Tumbes",
	descripcion:"Cafe"
}, {
	nombre:"Marcia",
	distancia: 676,
	ubicacion:"Ica",
	descripcion:"Cafe, anis."
}, {
	nombre:"Guadalupe",
	distancia: 60,
	ubicacion:"Ica",
	descripcion:"Cafe, manzanilla."
}, {
	nombre:"María",
	distancia: 50,
	ubicacion:"Loreto",
	descripcion:"Cafe."
}, {
	nombre:"María",
	distancia: 70,
	ubicacion:"Ayacucho",
	descripcion:"Cafe, chocolate."
}, {
	nombre:"María",
	distancia: 790,
	ubicacion:"Huancavelica",
	descripcion:"Cafe, anis."
}];

$(document).ready(function(){	
	//Pinta las cafeterias
	$.each(cafeterias,function(index,cafeteria) { 
		$('.cafeterias').append(pintarCafeterias(cafeteria));
	});

	//Haremos el filtrado de datos
	$('#buscar').click(function() {	
		// Tomamos el valor del input
		var searchText = $("#texto").val();
		console.log(searchText);
		// limpiamos el html al hacer click en #buscar
		$('.cafeterias').html("");
		// Iteracion
		var contar = 0; //variable que nos servira para mostrar si no hubo coincidencias
		$.each(cafeterias,function(index,cafeteria) {
			var tmpSearch = searchText.toLowerCase();//variable que almacena el value en minuscula del input
			var tmpNombre = cafeteria.nombre.toLowerCase(); //variable que almacena el atributo nombre en minuscula
			var tmpUbicacion = cafeteria.ubicacion.toLowerCase();//variable que almacena el atributo ubicacion en minuscula
			var tmpDescripcion = cafeteria.descripcion.toLowerCase();//variable que almacena el atributo descripcion en minuscula
			if ((tmpNombre+tmpUbicacion+tmpDescripcion).indexOf(tmpSearch) >= 0) {
				$('.cafeterias').append(pintarCafeterias(cafeteria));	
				console.log("entra if");
				console.log(cafeteria.ubicacion);
				console.log(cafeterias[1]);
				contar = contar + 1;
			}
		});
		if(contar == 0) {
			$('.cafeterias').append('<li class="error">No se encontraron coincidencias.</li>');
		}

	});

});

function pintarCafeterias(cafeteria) {
	return  '<li class="cafeteria">'+
					'<img src="img/img.jpg" alt="taza de cafe">'+
					'<h3>'+cafeteria.nombre+' <i class="fa fa-map-marker icon-distancia">'+cafeteria.distancia+'mts</i></h3>'+
					'<form action="" class="rating">'+
					  '<input class="star star-5" id="star-5" type="radio" name="star"/>'+
					  '<label class="star star-5" for="star-5"></label>'+
					  '<input class="star star-4" id="star-4" type="radio" name="star"/>'+
					  '<label class="star star-4" for="star-4"></label>'+
					  '<input class="star star-3" id="star-3" type="radio" name="star"/>'+
					  '<label class="star star-3" for="star-3"></label>'+
					  '<input class="star star-2" id="star-2" type="radio" name="star"/>'+
					  '<label class="star star-2" for="star-2"></label>'+
					  '<input class="star star-1" id="star-1" type="radio" name="star"/>'+
					  '<label class="star star-1" for="star-1"></label>'+
					'</form>'+
					'<br>'+
					'<br>'+
					'<h4>'+cafeteria.ubicacion+'</h4>'+
					'<p>'+cafeteria.descripcion+'</p>'+
					'<hr>'+
					'<h4>Tonights availability</h4>'+
					'<span class="fa fa-clock-o clock"></span>'+
					'<div class="hra">'+
						'<a href="#">5:30PM</a><a href="#">7:30PM</a><a href="#">9:00PM</a>'+
					'</div>'+
					'<br><br>'+
					'<a href="#" class="btn-reserve btn btn-primary">RESERVE</a>'+
					'</li>'
}