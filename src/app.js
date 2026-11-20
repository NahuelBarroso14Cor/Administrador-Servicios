import config from "./config/env.config.js"
import ServiceManager from "./managers/ServiceManager.js";

const serviceManager = new ServiceManager();



console.log("Servicios iniciales:");
console.log(serviceManager.getServices());

serviceManager.addService({
  name: "Odontología",
  description: "Extracción de muela",
  duration: 30,
  price: 100,
  category: "Dental",
  available: true
});

console.log("\nDespués de agregar:");
console.log(serviceManager.getServices());

serviceManager.updateService(1, {
  price: 150
});

console.log(`Proyecto corriendo en el puerto ${config.PORT}`);