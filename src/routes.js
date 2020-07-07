import { Router } from 'express';

// import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/init', async (req, res) => {
  return res.json({ ok: true });
});

export default routes;
