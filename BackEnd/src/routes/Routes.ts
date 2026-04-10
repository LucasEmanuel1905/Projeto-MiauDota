import express from 'express'
import { Router } from 'express';
import { 
  listarUsuarios, 
  criarUsuario, 
  buscarUsuario, 
  atualizarUsuario, 
  deletarUsuario,
  login
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
  deletarPedido,
  listarPedidosPorDono
} from '../controllers/pedidosController.js';
import { authMiddleware } from '../middleware/auth.js';

const routes = Router();

// --- ROTAS PÚBLICAS ---
routes.post('/login', login);
routes.post('/usuarios', criarUsuario);
routes.get('/gatos', listarGatos);
routes.get('/gatos/:id', buscarGato);
routes.post('/gatos', criarGato); // Cadastro de gato é público, mas gera o Token

// --- ROTAS PROTEGIDAS (Exigem Header Authorization: Bearer <TOKEN>) ---

// Usuários
routes.get('/usuarios', authMiddleware, listarUsuarios);
routes.get('/usuarios/:id', authMiddleware, buscarUsuario);
routes.put('/usuarios/:id', authMiddleware, atualizarUsuario);
routes.delete('/usuarios/:id', authMiddleware, deletarUsuario);

// Gatos (Edição e Exclusão)
routes.put('/gatos/:id', authMiddleware, atualizarGato);
routes.delete('/gatos/:id', authMiddleware, deletarGato);

// Pedidos de Adoção
routes.get('/pedidos', authMiddleware, listarPedidos);
routes.get('/pedidos/dono/:email', authMiddleware, listarPedidosPorDono);
routes.post('/pedidos', criarPedido); // Qualquer um pode pedir adoção
routes.patch('/pedidos/:id', authMiddleware, atualizarPedido); // Apenas o dono do gato pode aceitar
routes.delete('/pedidos/:id', authMiddleware, deletarPedido);


export default routes;
