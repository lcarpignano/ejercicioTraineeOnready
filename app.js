const vehiculos = require("./vehiculos");

let consecionaria = {
  vehiculos: vehiculos,
  listadoVehiculos() {
    let detalleVehiculo = [];
    for (let i = 0; i < vehiculos.length; i++) {
      if (vehiculos[i].Puertas == undefined) {
        detalleVehiculo.push(
          "Marca: " +
            vehiculos[i].Marca +
            " // " +
            "Modelo: " +
            vehiculos[i].Modelo +
            " // " +
            "Cilindrada: " +
            vehiculos[i].Cilindrada +
            " // " +
            "Precio: $" +
            vehiculos[i].Precio
        );
      } else if (vehiculos[i].Cilindrada == undefined) {
        detalleVehiculo.push(
          "Marca: " +
            vehiculos[i].Marca +
            " // " +
            "Modelo: " +
            vehiculos[i].Modelo +
            " // " +
            "Puertas: " +
            vehiculos[i].Puertas +
            " // " +
            "Precio: $" +
            vehiculos[i].Precio
        );
      }
    }
    return detalleVehiculo.join("\n");
  },
  vehiculoMasCaro() {
    let mayorPrecio = 0;
    let nombreMasCaro = "";
    for (let i = 0; i < vehiculos.length; i++) {
      if (vehiculos[i].Precio > mayorPrecio) {
        mayorPrecio = vehiculos[i].Precio;
        nombreMasCaro =
          "Vehículo más caro: " +
          vehiculos[i].Marca +
          " " +
          vehiculos[i].Modelo;
      }
    }
    return nombreMasCaro;
  },

  vehiculoMasBarato() {
    let menorPrecio = Infinity;
    let nombreMasBarato = "";
    for (let i = 0; i < vehiculos.length; i++) {
      if (vehiculos[i].Precio < menorPrecio) {
        menorPrecio = vehiculos[i].Precio;
        nombreMasBarato =
          "Vehículo más barato: " +
          vehiculos[i].Marca +
          " " +
          vehiculos[i].Modelo;
      }
    }
    return nombreMasBarato;
  },
  vehiculoConY(str) {
    let contieneY = [];
    for (let i = 0; i < vehiculos.length; i++) {
      if (this.vehiculos[i].Modelo.includes(str)) {
        contieneY.push(
          vehiculos[i].Marca +
            " " +
            vehiculos[i].Modelo +
            " $" +
            vehiculos[i].Precio
        );
      }
    }
    return "Vehículo que contiene en el modelo la letra ‘Y’: " + contieneY;
  },

  listadoOrdenado() {
    vehiculos.sort((vehiculoA, vehiculoB) =>
      vehiculoA.Precio < vehiculoB.Precio ? 1 : -1
    );
    let marcaModelo = [];
    for (let i = 0; i < vehiculos.length; i++) {
      {
        marcaModelo.push(vehiculos[i].Marca + " " + vehiculos[i].Modelo);
      }
    }
    return (
      "Vehículos ordenados por precio de mayor a menor: " +
      "\n" +
      marcaModelo.join("\n")
    );
  },
};

console.log();
console.log(consecionaria.listadoVehiculos());
console.log("=============================");
console.log(consecionaria.vehiculoMasCaro());
console.log(consecionaria.vehiculoMasBarato());
console.log(consecionaria.vehiculoConY("Y"));
console.log("=============================");
console.log(consecionaria.listadoOrdenado());
console.log();
