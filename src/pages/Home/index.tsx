import { Header } from '../../components/Header';
import { ProductsTable } from '../../components/ProductsTable';
import * as S from './styles';

export function Home() {

  return (
    <>
      <Header isAddProduct />
      <S.Container>
      <ProductsTable />
      </S.Container>
   </>
  )
}
