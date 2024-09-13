export interface Item {
  id: number,
  name: string,
  document: string,
  address: {
    number: number,
    complement: string,
    cep: string,
    neighborhood: string,
    street: string,
    city: {
      name: string;
      state: {
        id: number;
      };
    };
  },

  sex: string,
  dataNascimento: string,



}
