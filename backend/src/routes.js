import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './App/controllers/SessionController';
import AdminController from './App/controllers/AdminController';
import FileController from './App/controllers/FileController';
import DeliverymanController from './App/controllers/DeliverymanController';
import OrderManagementController from './App/controllers/OrderManagementController';
import DeliverymanRegController from './App/controllers/DeliverymanRegController';
import DeliveryProblemsController from './App/controllers/DeliveryProblemsController';

import authMiddleware from './App/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/destinataryregister', AdminController.store);
routes.get('/', AdminController.index);

routes.delete('/deletedeliver', DeliverymanController.delete);
routes.get('/delivers', DeliverymanController.index);
routes.put('/updatedeliver', DeliverymanController.update);
routes.post('/regdeliver', DeliverymanController.store);
routes.get('/d', DeliverymanController.allDelivers);

routes.post('/ordersend', OrderManagementController.store);
routes.put('/orderupdate', OrderManagementController.update);
routes.get('/orderindex', OrderManagementController.index);
routes.get('/p', OrderManagementController.allProducts);
routes.delete('/orderdelete', OrderManagementController.delete);

routes.get('/openorders/:id', DeliverymanRegController.indexNoDelivered);
routes.get('/closedorders/:id', DeliverymanRegController.indexDelivered);
routes.post('/insertdate', DeliverymanRegController.getDate);

routes.get('/searchproblem', DeliveryProblemsController.index);
routes.get('/searchproblem/:id', DeliveryProblemsController.indexID);
routes.post('/problemregistry/:id', DeliveryProblemsController.store);
routes.delete('/deleteproblemregistry', DeliveryProblemsController.delete);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
