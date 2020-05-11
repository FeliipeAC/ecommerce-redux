import { EnderecoModel } from './endereco-model';
export class ClienteModel {
    nome: string;
    sobrenome: string;
    nascimento: string;
    email: string;
    celular: string;
    sexo: string;
    endereco: EnderecoModel;
}
