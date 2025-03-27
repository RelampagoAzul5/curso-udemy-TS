namespace MeuNamespace {
  export const nomeDoNamespace = 'Giovanni';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }
  const pessoaDoNamespace = new PessoaDoNamespace(nomeDoNamespace);
  console.log(pessoaDoNamespace);

  export namespace OutroNamespace {
    export const nomeDoNamespace = 'Outro Giovanni';
  }
}
const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace(
  MeuNamespace.nomeDoNamespace,
);
console.log(pessoaDoNamespace);
console.log(MeuNamespace.nomeDoNamespace);
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);
