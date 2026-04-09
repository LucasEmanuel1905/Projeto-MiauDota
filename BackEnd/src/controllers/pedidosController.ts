import { Request, Response } from "express";
import { db } from "../database/connection.js";

export const listarPedidos = async (req: Request, res: Response) => {
  try {
    const data = await db("pedido_adocao")
      .select(
        "pedido_adocao.id",
        "pedido_adocao.data_horas",
        "pedido_adocao.status",
        "usuario.nome as usuario_nome",
        "gato.nome as gato_nome"
      )
      .innerJoin("usuario", "pedido_adocao.id_usuario", "usuario.id")
      .innerJoin("gato", "pedido_adocao.id_gato", "gato.id");
    return res.json(data);
  } catch (error) {
    return res.status(500).send("Erro ao listar pedidos");
  }
};

export const buscarPedido = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await db("pedido_adocao")
      .select(
        "pedido_adocao.id",
        "pedido_adocao.data_horas",
        "pedido_adocao.status",
        "usuario.nome as usuario_nome",
        "gato.nome as gato_nome"
      )
      .innerJoin("usuario", "pedido_adocao.id_usuario", "usuario.id")
      .innerJoin("gato", "pedido_adocao.id_gato", "gato.id")
      .where("pedido_adocao.id", id)
      .first();
    return res.json(data);
  } catch (error) {
    return res.status(500).send("Erro ao buscar pedido");
  }
};

export const criarPedido = async (req: Request, res: Response) => {
  try {
    const { id_usuario, id_gato } = req.body;
   const [id] = await db("pedido_adocao").insert({
      id_usuario,
      id_gato,
      data_horas: db.fn.now(),
      status: "pendente",
    });
    return res.status(201).send("Pedido de adoção realizado!");
  } catch (error) {
    return res.status(500).send("Erro ao criar pedido");
  }
};

export const atualizarPedido = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db("pedido_adocao").where({ id }).update(req.body);
    return res.send("Status atualizado!");
  } catch (error) {
    return res.status(500).send("Erro ao atualizar status");
  }
};

export const deletarPedido = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db("pedido_adocao").where({ id }).delete();
    return res.send("Pedido removido!");
  } catch (error) {
    return res.status(500).send("Erro ao excluir pedido");
  }
};
