import { Form } from '../../components/Form';
import { Header } from '../../components/Header';
import { useProducts } from '../../hooks/useProducts';
import { Product } from '../../types/products';

import * as S from './styles';

export function AddProduct () {

  const { createProduct } = useProducts();

  const handleOnSubmit = (product: Product) => {
    createProduct(product);
  }

  return(
    <>
    <Header />
    <S.Container>
      <h2>Cadastrar Produto</h2>
    </S.Container>
    <Form handleSubmit={handleOnSubmit} label="Cadastrar" />
    </>
  )
}


