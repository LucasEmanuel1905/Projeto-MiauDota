import { db } from "../database/connection.js";
import { Request, Response } from "express";

  export const listarUsuarios = async (req: Request, res: Response) =>{
    try {
    const data = await db("usuario").select("*");
    return res.json(data);
  } catch (e) {
    return res.status(500).send("Erro ao listar usuários");
  }
};

  export const buscarUsuario = async (req: Request, res: Response) => {
    try {
    const { id } = req.params;
    const data = await db("usuario").where({ id }).first();
    return res.json(data);
  } catch (e) {
    return res.status(500).send("Erro ao buscar usuário");
  }
};
export const criarUsuario = async (req: Request, res: Response) => {
  try {
    const { nome, email, telefone, cpf, senha } = req.body;

    const [id] = await db("usuario").insert({
      nome,
      email,
      telefone,
      cpf,
      senha,
    });
  return res.json({ id });
  
    await db("usuario").insert(req.body);
    return res.status(201).send("Usuário cadastrado!");
  } catch (e) {
    return res.status(500).send("Erro ao cadastrar usuário");
  }
};

export const atualizarUsuario = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db("usuario").where({ id }).update(req.body);
    return res.send("Atualizado!");
  } catch (e) {
    return res.status(500).send("Erro ao atualizar usuário");
  }
};

export const deletarUsuario = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db("usuario").where({ id }).delete();
    return res.send("Excluído!");
  } catch (e) {
    return res.status(500).send("Erro ao excluir usuário");
  }
};
