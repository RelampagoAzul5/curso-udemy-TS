// Record - De permite passar o tipo da chave e o tipo dos valores

const objeto1: Record<string, string | number> = {
  nome: 'Giovanni',
  sobrenome: 'Henrique',
  idade: 22,
};

console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required - Transforma tudo que for opcional em Requerido
type PessoaRequired = Required<PessoaProtocol>;
// Partial - Transforma tudo que for requerido em Opcional
type PessoaPartial = Partial<PessoaProtocol>;
// Readonly - Transforma todos os valores em Readonly
type PessoaReadonly = Readonly<PessoaProtocol>;
// Pick - Permite que a escolha das chaves que vão ser copiadas
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaRequired = {
  nome: 'Giovanni',
  sobrenome: 'Henrique',
  idade: 22,
};
console.log(objeto2);

// Extract e Exclude

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

//
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
  sobrenome: string;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};
const accountMongo: AccountMongo = {
  _id: 'b1232h1oiu1h23ioksna908ief',
  nome: 'Giovanni',
  sobrenome: 'Henrique',
  idade: 22,
};
function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi: AccountApi = mapAccount(accountMongo);
console.log('API: ');
console.log(accountApi);
