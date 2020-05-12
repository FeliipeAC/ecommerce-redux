export class EnderecoModel {
    cep: string;
    rua: string;
    bairro: string;
    numero: string;
    cidade: string;
    estado: string;
    complemento: string;

    constructor(obj?) {
        if (obj) {
            this.cep = obj.cep;
            this.rua = obj.rua;
            this.bairro = obj.bairro;
            this.numero = obj.numero;
            this.cidade = obj.cidade;
            this.estado = obj.estado;
            this.complemento = obj.complemento;
        } else {
            this.cep = null;
            this.rua = null;
            this.bairro = null;
            this.numero = null;
            this.cidade = null;
            this.estado = null;
            this.complemento = null;
        }
    }
}
