var MeuNamespace;
(function (MeuNamespace) {
    MeuNamespace.nomeDoNamespace = 'Giovanni';
    var PessoaDoNamespace = /** @class */ (function () {
        function PessoaDoNamespace(nome) {
            this.nome = nome;
        }
        return PessoaDoNamespace;
    }());
    MeuNamespace.PessoaDoNamespace = PessoaDoNamespace;
    var pessoaDoNamespace = new PessoaDoNamespace(MeuNamespace.nomeDoNamespace);
    console.log(pessoaDoNamespace);
    var OutroNamespace;
    (function (OutroNamespace) {
        OutroNamespace.nomeDoNamespace = 'Outro Giovanni';
    })(OutroNamespace = MeuNamespace.OutroNamespace || (MeuNamespace.OutroNamespace = {}));
})(MeuNamespace || (MeuNamespace = {}));
var pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace(MeuNamespace.nomeDoNamespace);
console.log(pessoaDoNamespace);
console.log(MeuNamespace.nomeDoNamespace);
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);
/// <reference path="modulo/module.ts" />
console.log(MeuNamespace);
// npx tsc src\A0060-namespaces\index.ts --outFile src\A0060-namespaces\index.js - compila o código
