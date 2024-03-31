import { Cliente } from '../Model/cliente.entity';
import { AppDataSource } from '../data_source';

interface ClienteInteface {
    nome: string;
    email: string;
    cpf: string;
}

const clienteRepository = AppDataSource.getRepository(Cliente)
export async function getClienteService() {

    try {

        return await clienteRepository.find();

    } catch (error) {
        console.error('Erro ao obter dados.', error);
    }
}

export async function createClienteService(data: ClienteInteface) {

    try {

        const cliente = new Cliente()
        cliente.nome = data.nome
        cliente.email = data.email
        cliente.cpf = data.cpf
        await clienteRepository.save(cliente)

        return getClienteService();

    } catch (error) {
        console.error('Erro ao inserir cliente.', error);
    }
}

export async function updateClienteService(data: ClienteInteface, id: number) {

    try {

        const findCliente = await clienteRepository.findOneBy({
            id,
        })

        if (findCliente) {

            findCliente.nome = data.nome;
            findCliente.email = data.email;
            findCliente.cpf = data.cpf;

            await clienteRepository.save(findCliente);

        } else {
            console.log('Cliente não encontrado!');
        }

        return getClienteService();

    } catch (error) {
        console.error('Erro ao atualizar dados.', error);
    }
}

export async function deleteClienteService(id: number) {

    try {

        const clienteToRemove = await clienteRepository.findOneBy({
            id,
        })

        if (clienteToRemove) {

            await clienteRepository.remove(clienteToRemove)

        } else {
            console.log('Cliente não encontrado!');
        }

        return getClienteService();

    } catch (error) {
        console.error('Erro ao excluir cliente.', error);
    }
}