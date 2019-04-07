import { RefProdutoDTO } from "./refProduto.dto";

export interface ItemPedidoDTO{
    quantidade: number;
    produto: RefProdutoDTO;
}