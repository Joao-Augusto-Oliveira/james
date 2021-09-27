import { useParams } from 'react-router-dom';
import { Form } from '../../components/Form';
import { Header } from '../../components/Header';
import { useProducts } from '../../hooks/useProducts';
import { Product } from '../../types/products';

import * as S from './styles';

export function EditProduct({history}:any) {
  const {products, putProduct} = useProducts();
  const  { id }  = useParams<{id: string | undefined}>();
  const productUpdate = products.find((product) => product.id === id);

  const handleOnSubmitAltered = (product: Product) => {
    const filteredProducts = products.filter((product) => product.id !== id)
    putProduct(filteredProducts, product);
    history.push('/')
  }

  return(
    <>
      <Header />
      <S.Container>
        <h2>Alterar Produto</h2>
      </S.Container>
        <Form
          product={productUpdate}
          label="Alterar"
          handleSubmit={handleOnSubmitAltered}
        />
    </>
  )
}






