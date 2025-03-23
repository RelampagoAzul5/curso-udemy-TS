export class Escritor {
  private _ferramenta: Ferramenta | null = null;
  constructor(private _nome: string) {}
  get nome(): string {
    return this._nome;
  }
  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }
  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }
  escrever(): void {
    if (this.ferramenta === null) {
      console.log('Não posso escrever sem ferramenta');
      return;
    }
    this.ferramenta.escrever(this.nome);
  }
}
export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(nomeDoEscritor: string): void;
  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(nomeDoEscritor: string): void {
    console.log(`${nomeDoEscritor} esta escrevendo com ${this.nome}...`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(nomeDoEscritor: string): void {
    console.log(`${nomeDoEscritor} esta digitando com ${this.nome}...`);
  }
}

const escritor = new Escritor('Giovanni');
const caneta = new Caneta('Bic');
const maquinaEscrever = new MaquinaEscrever('Máquina de Escrever');

// console.log(escritor.nome);
// console.log(caneta.nome);
// console.log(maquinaEscrever.nome);
escritor.ferramenta = caneta;
escritor.escrever();
