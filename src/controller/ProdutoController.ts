import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {

    private listaProdutos = new Array<Produto>();

    public id: number = 0;

    criarProduto(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("\nO Produto foi criado com sucesso!");
    }

    listarTodosOsProdutos(): void {
        for (const produto of this.listaProdutos) {
            produto.visualizar();            
        };
    }

    consultarProdutoPorId(id: number): void {
        const consultaProduto = this.consultarProdutoPorId(id);

        if (consultaProduto !== null)
            consultaProduto.visualizar();
        else
            console.log("\nProduto não encontrada!");
    }

    atualizarProduto(produto: Produto): void {
        throw new Error("Method not implemented.");
    }

    deletarProduto(id: number): void {
        throw new Error("Method not implemented.");
    }

    public consultarNoArray(id: number): Produto | null {
        for (let produto of this.listaProdutos) {
            if (produto.id === id) {
                return produto;                    
            }
        }
        return null;            
    }
    
}