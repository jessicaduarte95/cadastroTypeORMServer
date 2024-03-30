import { Request, Response } from "express";
import { getClienteService, createClienteService, updateClienteService, deleteClienteService } from '../Service/clienteService';

export async function getCliente(req: Request, res: Response) {
    try {
        const cliente = await getClienteService();
        return res.status(200).json(cliente);
    } catch (error: any) {
        return res.status(500).json({ error: "Por favor, tente mais tarde!" })
    }
}
export async function createCliente(req: Request, res: Response) {
    try {
        const data: any = req.body
        const cliente = await createClienteService(data);
        return res.status(201).json(cliente);
    } catch (error: any) {
        return res.status(500).json({ error: "Erro ao adicionar cliente. Por favor, tente mais tarde!" })
    }
}

export async function updateCliente(req: Request, res: Response) {
    try {
        // const data: any = req.body
        const data = {
            nome: "Novo nome",
            email: "novoemail@example.com",
            cpf: "1111111111111",
        }
        const cliente = await updateClienteService(data);
        return res.status(201).json(cliente);
    } catch (error: any) {
        return res.status(500).json({ error: "Erro ao atualizar dados. Por favor, tente mais tarde!" })
    }
}

export async function deleteCliente(req: Request, res: Response) {
    try {
        const id: any = req.params.id;
        const cliente = await deleteClienteService(id);
        return res.status(201).json(cliente);
    } catch (error: any) {
        return res.status(500).json({ error: "Erro ao deletar cliente. Por favor, tente mais tarde!" })
    }
}