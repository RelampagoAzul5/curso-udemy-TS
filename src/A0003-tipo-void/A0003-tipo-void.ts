function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}
const pessoa = {
  nome: 'Giovanni',
  sobrenome: 'Henrique',
  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Giovanni', 'Henrique');
pessoa.exibirNome();
export { pessoa };
