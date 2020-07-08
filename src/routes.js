import { Router } from 'express';
import OrderController from './app/Controllers/OrderController';

// import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/order', OrderController.create);
routes.get('/order', OrderController.index);

export default routes;
