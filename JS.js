// Modal de compra de vehículo que muestra detalles dinámicos
document.addEventListener('DOMContentLoaded', function () {
  // Datos de los coches 
  const carData = {
    // Ejemplo de datos para cada coche
    "alaskan": {
      title: "Renault Alaskan 2.3 Dci 4x4 Confort",
      image: "Autos/car4.png",
      description: "Color Negro, 4 puertas, Transmisión manual.",
      price: "$65,000",
      financing: "Hasta 60 meses con 10% de enganche",
      discounts: "5% de descuento por pago de contado",
      warranty: "2 años o 100,000 km"
    },

    "GAC EMPOW": {
      title: "GAC EMPOW",
      image: "Autos/car5.png",
      description: "Color Shiny Fighter Green, Megastar chasis.",
      price: "$35,000",
      financing: "Hasta 60 meses con 10% de enganche",
      discounts: "5% de descuento por pago de contado",
      warranty: "5 años o 100,000 km"
    },

    "Swift Booster Green": {
      title: "Suzuki Swift",
      image: "Autos/Suzuki Swift.png",
      description: "Transmision 6 velocidades.",
      price: "$15,000",
      financing: "Hasta 60 meses con 10% de enganche",
      discounts: "5% de descuento por pago de contado",
      warranty: "3 años o 100,000 km"
    },

    "Chevrolet": {
      title: "Chevrolet Camaro",
      image: "Autos/car14.png",
      description: "Chevrolet Camaro v8 ss deportivo.",
      price: "$45,000",
      financing: "Hasta 60 meses con 10% de enganche",
      discounts: "10% de descuento por pago de contado",
      warranty: "2 años o 80,000 km"
    },

    "Volkswagen Beetle": {
      title: "Volkswagen Beetle Usado",
      image: "Autos/car15.png",
      description: "Cupé o descapotable de 2 puertas.",
      price: "$18,000",
      financing: "Hasta 48 meses con 15% de enganche",
      discounts: "5% de descuento por pago de contado",
      warranty: "1 año o 150,000 km"
    },

    "Chevrolet Cruze": {
      title: "Chevrolet Cruze",
      image: "Autos/car7.png",
      description: "Chevrolet Cruze v8 ss deportivo.",
      price: "$25,000",
      financing: "Hasta 60 meses con 10% de enganche",
      discounts: "10% de descuento por pago de contado",
      warranty: "2 años o 80,000 km"
    },

    "Ford Mustang": {
      title: "Ford Mustang",
      image: "Autos/Ford Mustang.png",
      description: "Deportivo americano clásico.",
      price: "$55,000",
      financing: "Hasta 48 meses con 15% de enganche",
      discounts: "5% de descuento por pago de contado",
      warranty: "1 año o 50,000 km"
    },

    "New Grand Lion 4x4": {
      title: "New Grand Lion 4x4",
      image: "Autos/car9.png",
      description: "Camioneta 4x4 de 4 Puertas.",
      price: "$55,000",
      financing: "Hasta 48 meses con 15% de enganche",
      discounts: "5% de descuento por pago de contado",
      warranty: "1 año o 80,000 km"
    },

    "VolksWagen Polo": {
      title: "VolksWagen Polo",
      image: "Autos/Volswagen polo.png",
      description: "Automóvil compacto de 4 puertas.",
      price: "$25,000",
      financing: "Hasta 48 meses con 15% de enganche",
      discounts: "5% de descuento por pago de contado",
      warranty: "1 año o 50,000 km"
    },

    "Lada granta": {
      title: "Lada granta",
      image: "Autos/Lada granta.png",
      description: "Automóvil compacto de 4 puertas.",
      price: "$25,000",
      financing: "Hasta 24 meses con 5% de enganche",
      discounts: "5% de descuento por pago de contado",
      warranty: "1 año o 90,000 km"
    },

    "Toyota Premio": {
      title: "Toyota Premio",
      image: "Autos/Toyota Premio.png",
      description: "Automático, 4 puertas, color plata.",
      price: "$25,000",
      financing: "Hasta 48 meses con 15% de enganche",
      discounts: "5% de descuento por pago de contado",
      warranty: "1 año o 250,000 km"
    },

    "Fiat Tipo Station": {
      title: "Fiat Tipo Station",
      image: "Autos/Fiat Tipo Station.png",
      description: "4 puertas, color plata.",
      price: "$25,000",
      financing: "Hasta 48 meses con 15% de enganche",
      discounts: "5% de descuento por pago de contado",
      warranty: "1 año o 20,000 km"
    },


  };

  // Abrir modal al hacer clic en Comprar
  document.querySelectorAll('.BTN_Comprar').forEach(button => {
    // Añadir evento de clic a cada botón Comprar
    button.addEventListener('click', function () {
      const carId = this.getAttribute('data-car-id');
      const car = carData[carId];

      if (car) {
        // Rellenar modal con datos del coche
        document.getElementById('modal-car-image').src = car.image;
        document.getElementById('modal-car-title').textContent = car.title;
        document.getElementById('modal-car-description').textContent = car.description;
        document.getElementById('modal-car-price').textContent = car.price;
        document.getElementById('modal-car-financing').textContent = car.financing;
        document.getElementById('modal-car-discounts').textContent = car.discounts;
        document.getElementById('modal-car-warranty').textContent = car.warranty;

        document.getElementById('modal-compra').style.display = 'block';
      }
    });
  });

  // Cerrar modal
  document.querySelector('.close-modal').addEventListener('click', function () {
    document.getElementById('modal-compra').style.display = 'none';
  });

  // Cerrar al hacer clic fuera del modal
  window.addEventListener('click', function (event) {
    if (event.target == document.getElementById('modal-compra')) {
      document.getElementById('modal-compra').style.display = 'none';
    }
  });

  // Confirmar compra
  document.querySelector('.BTN_Confirmar').addEventListener('click', function () {
    alert('¡Gracias por su compra! Nos pondremos en contacto con usted.');
    document.getElementById('modal-compra').style.display = 'none';
  });
});



// Animación de botones flotantes
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelectorAll('.fab-float').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 200 * i);
    });
  }, 400);
});
