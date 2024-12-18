import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { colors } from "../util/Colors";

export class ProdutoController implements ProdutoRepository {

    listaProdutos = new Array<Produto>();

    public id: number = 0;

    procurarPorId(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto != null) {
            buscaProduto.visualizar();
        } else
            console.log(colors.fg.red, "\nO Produto Id: " + id
                + " não foi encontrado!", colors.reset);
    }

    listarTodas(): void {
        this.listaProdutos.forEach(produto => produto.visualizar());

        // Outra forma de fazer (igual Conta_Bancaria)
        /*for (let produto of this.listaProdutos) {
            produto.visualizar();            
        };*/
    }

    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("\nO Produto foi cadastrado com sucesso!");
    }

    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.id);

        if (buscaProduto != null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log(colors.fg.green, "\nO Produto Id: " + produto.id + " foi atualizado com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nO Produto Id: " + produto.id + " não foi encontrado!", colors.reset);
    }

    deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto != null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log(colors.fg.green, "\nO Produto Id: " + id + " foi apagado com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nO Produto Id: " + id + " não foi encontrado!", colors.reset);
    }

    // Métodos Auxiliares
    // Gerar Número da Conta 
    public gerarId(): number {
        return ++this.id;
    }

    /*Checa se uma Conta existe*/
    public buscarNoArray(id: number): Produto | null {

        for (let produto of this.listaProdutos) {
            if (produto.id === id)
                return produto;
        }

        return null;
    }

}