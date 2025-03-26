function inverteNomeECor<T extends new (...args: any[]) => any>(target: T): T {
  console.log('Sou o decorador e recebi', target);
  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      this.cor = this.inverte(args[0]);
      this.nome = this.inverte(args[1]);
    }
    inverte(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}

@inverteNomeECor
export class Animal {
  constructor(
    public nome: string,
    public cor: string,
  ) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('Cachorro', 'roxo');
console.log(animal);
