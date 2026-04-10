import {db} from "../database/connection.js";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const SECRET = process.env.JWT_SECRET || 'miau_dota_secret_key_2024';

export const listarGatos = async (req: Request, res: Response) => {
  try {
    const gatos = await db("gato").select("*");
    return res.json(gatos);
  } catch (error) {
    return res.status(500).send("Erro ao listar gatos");
  }
};

export const listarGatosCompleto = async (req: Request, res: Response) => {
  try {
    const data = await db("gato")
      .select(
        "gato.*",
        "usuario.nome as protetor"
      )
      .innerJoin("usuario", "gato.id_usuario", "usuario.id");
    return res.json(data);
  } catch (error) {
    return res.status(500).send("Erro ao listar gatos completo");
  }
};

export const buscarGato = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const gato = await db("gato").where({ id }).first();
    return res.json(gato);
  } catch (error) {
    return res.status(500).send("Erro ao buscar gato");
  }
};

export const criarGato = async (req: Request, res: Response) => {
  try {
    const { 
      nome, raca, idade, descricao, sexo, porte, foto_principal, vacinado,
      responsavel_nome, responsavel_email, responsavel_telefone, responsavel_cpf 
    } = req.body;

    // 1. Verifica ou cria o usuário automaticamente
    let user = await db("usuario").where({ email: responsavel_email }).first();

    if (!user) {
      const [newUserId] = await db("usuario").insert({
        nome: responsavel_nome,
        email: responsavel_email,
        telefone: responsavel_telefone,
        cpf: responsavel_cpf,
        senha: 'login_automatico'
      });
      user = { id: newUserId };
    }

    // 2. Cadastra o gato vinculado a este usuário
    const [id] = await db("gato").insert({
      nome,
      raca,
      idade,
      descricao,
      sexo,
      porte,
      foto_principal,
      cadastrado: true,
      vacinado: vacinado || false,
      id_usuario: user.id
    });

    // 3. GERA O TOKEN PARA O DONO DO GATO
    const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: '7d' });

    return res.status(201).json({ 
      id, 
      token, 
      message: "Gato cadastrado com sucesso! Use este token para gerenciar as adoções." 
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Erro ao cadastrar gato");
  }
};

export const atualizarGato = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nome, raca, idade, descricao, sexo, porte, foto_principal, cadastrado, vacinado, id_usuario } = req.body;

    await db("gato")
      .where({ id })
      .update({ 
          nome, 
          raca, 
          idade, 
          descricao, 
          sexo, 
          porte, 
          foto_principal, 
          cadastrado, 
          vacinado, 
          id_usuario 
      });

    return res.json({ message: "Gato atualizado com sucesso!" });
  } catch (error) {
    return res.status(500).send("Erro ao atualizar gato");
  }
};

export const deletarGato = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db("gato").where({ id }).delete();
    return res.send("Gato excluído!");
  } catch (error) {
    return res.status(500).send("Erro ao excluir gato");
  }
};


