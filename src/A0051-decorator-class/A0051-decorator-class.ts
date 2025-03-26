@decorator
export class Animal {
  constructor(
    public nome: string,
    public cor: string,
  ) {}
}
function decorator<T extends new (...args: any[]) => any>(target: T): T {
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

const animal = new Animal('Cachorro', 'roxo');
console.log(animal);
