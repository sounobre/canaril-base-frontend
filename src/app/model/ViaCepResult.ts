
export interface ViaCepResult {
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
  }
}

/*
{
  "id": 1,
  "street": "Rua General Pinto Amando",
  "neighborhood": "Honório Gurgel",
  "cep": "21511-330",
  "city": {
      "id": 1,
      "name": "Rio de Janeiro",
      "ibgeCode": null,
      "bacenCode": null,
      "state": {
          "id": 19,
          "name": "Rio de Janeiro",
          "acronym": "RJ",
          "ibgeCode": "33",
          "commonAttributes": {
              "dataInclusao": "2022-08-04T17:07:01",
              "dataAlteracao": null,
              "nmUsuario": "compilascript"
          }
      },
      "commonAttributes": null
  },
  "commonAttributes": null
}
*/
