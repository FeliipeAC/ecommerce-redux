export class ProdutoModel {
    public id: number;
    public titulo: string;
    public fabricante: string;
    public preco: number;
    public imagem: string;
    public info: {
        armazenamento: number;
        memoria: number;
        android: string;
        camera_frontal: number;
        camera_traseira: number;
        tela: number;
    };
}
