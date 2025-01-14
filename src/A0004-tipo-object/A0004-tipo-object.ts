const objetoA: {
  chaveA: string;
  readonly chaveB: string; // Faz com que a chave não possa ser alterada
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveA = 'Outro valor';
objetoA.chaveC = 'Nova chave';
objetoA.chaveD = 'Nova chave'; // Não é reconhecido
