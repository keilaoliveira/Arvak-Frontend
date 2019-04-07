import { CidadeDTO } from "./cidade.dto";

export interface EnderecoDTO{
    idEndereco: string;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cep: string;
    cidade: CidadeDTO;
}