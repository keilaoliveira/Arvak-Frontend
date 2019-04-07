import { EstadoDTO } from "./estado.dto";

export interface CidadeDTO {
    idCidade: string;
    descricaoCidade: string;
    estado? : EstadoDTO;
}