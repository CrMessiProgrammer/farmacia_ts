import { Produto } from "./Produto";

export class Medicamento extends Produto {

    // Atributo específico da Classe Medicamento
    private _generico: string;

    // Método Construtor
    constructor(id: number, nome: string, tipo: number, preco: number, generico: string) {
        super(id, nome, tipo, preco);
        this._generico = generico;
    }

    // Métodos Get e Set
    public get generico(): string {
        return this._generico;
    }

    public set generico(value: string) {
        this._generico = value;
    }

    public visualizar() {
        super.visualizar();
        console.log(`Genérico: ${this._generico}`);
    }

}