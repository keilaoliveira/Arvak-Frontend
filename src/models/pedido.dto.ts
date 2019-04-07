import { RefEnderecoDTO } from "./refEndereco.dto";
import { RefClienteDTO } from "./refCliente.dto";
import { PagamentoDTO } from "./pagamento.dto";
import { ItemPedidoDTO } from "./item-pedido.dto";

export interface PedidoDTO{
    cliente: RefClienteDTO;
    enderecoDeEntrega: RefEnderecoDTO;
    pagamento: PagamentoDTO;
    itens: ItemPedidoDTO[];
}