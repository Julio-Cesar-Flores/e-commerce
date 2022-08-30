import express from 'express';
//import authRoutes from './routes/authRoutes.js';

const api = express();
api.use(express.json());

//TODO: registrar middlewares y rutas

api.get('/status', (_, res) => {
  return res.json({
    msg: 'API funcionando',
  });
});

//api.use(authRoutes);
//TODO: rutas

export default api;