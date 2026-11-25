import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ServiceManager {
  constructor() {
    this.path = path.join(__dirname, "../data/services.json");
    this.services = this.loadServices();
  }

  loadServices() {
    const data = fs.readFileSync(this.path, "utf-8");
    return JSON.parse(data);
  }

  saveServices() {
    fs.writeFileSync(
      this.path,
      JSON.stringify(this.services, null, 2)
    );
  }

  getServices() {
    return this.services;
  }

  getServiceById(id) {
    return (
      this.services.find(
        service => service.id === Number(id)
      ) || null
    );
  }

  addService(serviceData) {
    const requiredFields = [
      "name",
      "description",
      "duration",
      "price",
      "category",
      "available"
    ];

    for (const field of requiredFields) {
      if (!Object.hasOwn(serviceData, field)) {
        throw new Error(`Falta el campo ${field}`);
      }
    }

    const newId =
      this.services.length > 0
        ? Math.max(...this.services.map(s => s.id)) + 1
        : 1;

    const newService = {
      id: newId,
      ...serviceData
    };

    this.services.push(newService);

    this.saveServices();

    return newService;
  }

  updateService(id, updatedData) {
    const service = this.getServiceById(id);

    if (!service) {
      return null;
    }

    delete updatedData.id;

    Object.assign(service, updatedData);

    this.saveServices();

    return service;
  }

  deleteService(id) {
    const index = this.services.findIndex(
      service => service.id === Number(id)
    );

    if (index === -1) {
      return null;
    }

    const deletedService = this.services.splice(index, 1)[0];

    this.saveServices();

    return deletedService;
  }
}

export default ServiceManager;