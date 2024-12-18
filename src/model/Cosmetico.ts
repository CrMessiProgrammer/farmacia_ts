import { Produto } from "./Produto";

export class Cosmetico extends Produto {

    // Atributo específico da Classe Cosmetico
    private _fragancia: string;

    // Método Construtor
    constructor(id: number, nome: string, tipo: number, preco: number, fragancia: string) {
        super(id, nome, tipo, preco);
        this._fragancia = fragancia;
    }

    // Métodos Get e Set
    public get fragancia(): string {
        return this._fragancia;
    }

    public set fragancia(value: string) {
        this._fragancia = value;
    }

    public visualizar() {
        super.visualizar();
        console.log(`Fragrância: ${this._fragancia}`);
    }

}