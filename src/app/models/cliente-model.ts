import { EnderecoModel } from './endereco-model';
export class ClienteModel {
    nome: string;
    sobrenome: string;
    nascimento: string;
    email: string;
    celular: string;
    sexo: string;
    endereco: EnderecoModel;

    constructor(obj?) {
        if (obj) {
            this.nome = obj.nome;
            this.sobrenome = obj.sobrenome;
            this.nascimento = obj.nascimento;
            this.email = obj.email;
            this.celular = obj.celular;
            this.sexo = obj.sexo;
            this.endereco = obj.endereco;
        } else {
            this.nome = null;
            this.sobrenome = null;
            this.nascimento = null;
            this.email = null;
            this.celular = null;
            this.sexo = null;
            this.endereco = null;
        }
    }
}
