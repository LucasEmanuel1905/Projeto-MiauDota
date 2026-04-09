import express from 'express'
import { Router } from 'express';
import { 
  listarUsuarios, 
  criarUsuario, 
  buscarUsuario, 
  atualizarUsuario, 
  deletarUsuario 
} from '../controllers/usuariosController.js';
import { 
  listarGatos, 
  criarGato, 
  buscarGato, 
  atualizarGato, 
  deletarGato 
} from '../controllers/catController.js';
import { 
  listarPedidos, 
  criarPedido, 
  atualizarPedido, 
  deletarPedido 
} from '../controllers/pedidosController.js';

const routes = Router();

// --- ROTAS DE USUÁRIOS ---
routes.get('/usuarios', listarUsuarios);
routes.post('/usuarios', criarUsuario);
routes.get('/usuarios/:id', buscarUsuario);
routes.put('/usuarios/:id', atualizarUsuario);
routes.delete('/usuarios/:id', deletarUsuario);

// --- ROTAS DE GATOS ---
routes.get('/gatos', listarGatos);
routes.post('/gatos', criarGato);
routes.get('/gatos/:id', buscarGato);
routes.put('/gatos/:id', atualizarGato);
routes.delete('/gatos/:id', deletarGato);

// --- ROTAS DE PEDIDOS DE ADOÇÃO ---
routes.get('/pedidos', listarPedidos);
routes.post('/pedidos', criarPedido);
routes.patch('/pedidos/:id', atualizarPedido);
routes.delete('/pedidos/:id', deletarPedido);

export default routes;
