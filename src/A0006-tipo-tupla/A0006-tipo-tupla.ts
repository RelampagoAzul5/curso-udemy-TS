// tuple

const dadosCliente1: readonly [number, string] = [1, 'Giovanni'];
const dadosCliente2: [number, string, string] = [1, 'Giovanni', 'Henrique'];
const dadosCliente3: [number, string, string?] = [1, 'Giovanni'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Giovanni'];

// dadosCliente1[0] = 100;
// dadosCliente1[1] = 'Henrique';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);

// readonly array
const array1: readonly string[] = ['Giovanni', 'Henrique'];
const array2: ReadonlyArray<string> = ['Giovanni', 'Henrique'];
