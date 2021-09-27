import { useHistory } from 'react-router';
import { useProducts } from '../../hooks/useProducts';
import { IconEdit, IconTrash } from '../../assets/Icons/Icons';
import { formatPrice } from '../../utils/format'
import * as S from './styles';

export function ProductsTable() {

  const history = useHistory();

  const {products, removeProduct} = useProducts();

  const handleRemoveProduct = (id:string) => {
    removeProduct(id);
  }

  return (
    <>
      <S.Container>
      {products.length > 0 ?
        <table>
          <thead>
            <tr>
              <th>Código do Produto</th>
              <th>Nome do Produto</th>
              <th>Categoria do Produto</th>
              <th>Nome do Fornecedor</th>
              <th>Valor do Produto</th>
              <th>Alterar</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.code}</td>
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>{product.provider}</td>
                <td>{formatPrice(product.price)}</td>
                <td>
                <S.ButtonEdit onClick={() => history.push(`edit/${product.id}`)}>
                  {IconEdit}
                </S.ButtonEdit>
              </td>
              <td>
                <S.ButtonTrash onClick={() => handleRemoveProduct(product.id)}>
                  {IconTrash}
                </S.ButtonTrash>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
         :
         <h2>Não há produtos para exibir.</h2>
      }
      </S.Container>


   </>
  )
}
