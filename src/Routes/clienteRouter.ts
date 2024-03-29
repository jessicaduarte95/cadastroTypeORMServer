import { Router } from "express";
import { getCliente, createCliente, updateCliente, deleteCliente } from '../Controller/clienteControllers';

const router = Router();

export default router
    .get("/obterClientes", getCliente)
    .post("/inserir", createCliente)
    .delete("/deletar/:id", deleteCliente)
    .put("/editar/:id", updateCliente)
