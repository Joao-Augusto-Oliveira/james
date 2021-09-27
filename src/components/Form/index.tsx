import { FormEvent, useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Product } from '../../types/products';
import validateInfo from '../../validate';
import Input from '../Input';

import * as S from './styles';

interface FormProps {
  label: string;
  product?: Product;
  handleSubmit: (product: Product) => void;
}

export function Form(props: FormProps) {

  const initialState = {
    code: props.product ? props.product.code : '',
    title: props.product ? props.product.title : '',
    category: props.product ? props.product.category : '',
    provider: props.product ? props.product.provider : '',
    price: props.product? props.product.price: 0,
  }
  const [product, setProduct] = useState(
  initialState,
  )

  const initialStateErrors = {
    code: '',
    title: '',
    category: '',
    provider: '',
    price: '',
  }

  const [errors, setErrors] = useState(
    initialStateErrors,
  )

  const { code, title, category, provider, price } = product

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault();
    const product = {
      id: uuidv4(),
      code,
      title,
      category,
      provider,
      price,
    }

    setErrors(validateInfo(product))

    if(
      product.code &&
      product.category &&
      product.provider &&
      product.title &&
      product.price
      )
      {
        props.handleSubmit(product)

        setProduct(initialState);
      }

  }

  const handleInputChange = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      setProduct({
        ...product,
        [event.currentTarget.name]: event.currentTarget.value,
      });
    },
    [product]
  );


  return (
    <>
      <S.Container onSubmit={handleOnSubmit}>
        <Input
          type="text"
          placeholder="Código do Produto"
          name="code"
          value={code}
          onChange={handleInputChange}
          label='Código do Produto'
        />
          {!!errors.code && <p>{errors.code}</p>}

        <Input
          type="text"
          placeholder="Nome do Produto"
          name="title"
          value={title}
          onChange={handleInputChange}
          label="Nome do Produto"
        />
        {!!errors.title && <p>{errors.title}</p>}

        <Input
          type="text"
          placeholder="Categoria do Produto"
          name="category"
          value={category}
          onChange={handleInputChange}
          label="Categoria do Produto"
        />
        {!!errors.category && <p>{errors.category}</p>}

        <Input
          type="text"
          placeholder="Nome do Fornecedor"
          name="provider"
          value={provider}
          onChange={handleInputChange}
          label="Nome do Fornecedor"
        />
        {!!errors.provider && <p>{errors.provider}</p>}

        <Input
          type="number"
          placeholder="Valor do Produto"
          name="price"
          value={price}
          onChange={handleInputChange}
          label="Valor do Produto"
        />
        {!!errors.price && <p>{errors.price}</p>}

        <button type="submit">
          {props.label}
        </button>
      </S.Container>
   </>
  )

}

