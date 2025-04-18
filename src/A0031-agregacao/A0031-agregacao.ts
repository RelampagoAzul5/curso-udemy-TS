export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProduto(...produtos: Produto[]) {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }
  quantidadeProdutos(): number {
    return this.produtos.length;
  }
  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}
export class Produto {
  constructor(
    private _nome: string,
    public preco: number,
  ) {}
  get nome(): string {
    return this._nome;
  }
}
const produto1 = new Produto('Camiseta', 49.9);
const produto2 = new Produto('Caneta', 15.5);
const produto3 = new Produto('Camiseta', 1);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProduto(produto1, produto2, produto3);
console.log(carrinhoDeCompras);
console.log(carrinhoDeCompras.quantidadeProdutos());
console.log(carrinhoDeCompras.valorTotal());
