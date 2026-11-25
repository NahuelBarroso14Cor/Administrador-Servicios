import {Router} from 'express';
import express from 'express';
import ServiceManager from '../managers/ServiceManager.js';

const router = Router();
const serviceManager = new ServiceManager();

console.log('Cargando services.router.js');



//OBTENCION DE TODOS LOS SERVICIOS
router.get('/', async (req, res) => {
    try {
        const services = serviceManager.getServices();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ error : error.message})
    }
});

//OBTENCION DE SERVICIO POR ID
router.get('/:sid', async (req, res) => {
    try{
        const serviceId = req.params.sid;
        const service = serviceManager.getServiceById(serviceId)
        if (!service) {
            return res.status(404).json({ error: 'Service not found' });
        }
        res.status(200).json(service);
    } catch (error) {
        res.status(500).json({error : error.message})
    }
});


//CREACION DE NUEVO SERVICIO
router.post('/',(req, res) =>{
    try{
        const servicesData = req.body;
        if (!servicesData.name || !servicesData.description || !servicesData.duration || !servicesData.price || !servicesData.category || !servicesData.available) {
            return res.status(400).json({ error: 'Faltan campos requeridos' });
        }
        const newService = serviceManager.addService(servicesData);
        res.status(201).json(newService);
    
    }catch (error){
        res.status(500).json({error : error.message})
    }
})

//MODIFICACION DE SERVICIO POR ID
router.put('/:sid', (req, res) =>{
    try{
        const serviceId = req.params.sid;
        const updateData = req.body;
        
        if (!updateData.name || !updateData.description || !updateData.duration || !updateData.price || !updateData.category || !updateData.available) {
            return res.status(400).json({ error: 'Faltan campos requeridos' });
        }
        const updatedService = serviceManager.updateService(serviceId, updateData);
        if (!updatedService) {
            return res.status(404).json({ error: 'Service not found' });
        }
        res.status(200).json(updatedService);


    } catch(error){
        res.status(500).json({error : error.message})
    }
})

//ELIMINACION DE SERVICIO POR ID
router.delete('/:sid', (req, res) => {
    console.log('Entró al controlador DELETE');
    try {
        const serviceId = req.params.sid;
        const deletedService = serviceManager.deleteService(serviceId);
        if (!deletedService) {
            return res.status(404).json({ error: 'Service not found' });
        }
        res.status(200).json({ message: 'Service deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


export default router;
