import { createContext, ReactNode, useContext, useState } from 'react';
import { Product } from '../types/products';

interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsContextData {
  products: Product[];
  createProduct: (product: Product) => Promise<void>;
  removeProduct: (id: string) => Promise<void>;
  putProduct: (filteredProducts: Product[], product: Product) => Promise<void>;
}

export const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData
);

export function ProductsProvider({children}: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>(() => {
    const storagedProduct = localStorage.getItem('@James:product')

    if(storagedProduct) {
      return JSON.parse(storagedProduct);
    }

    return [];
  });

  async function createProduct(product: Product) {
    setProducts([product, ...products]);
    localStorage.setItem(
      '@James:product', JSON.stringify([product, ...products])
    )
  }

  async function removeProduct(id: string) {
    const removedProduct = products.filter((product) => product.id !== id)
    setProducts(removedProduct);
    localStorage.setItem('@James:product', JSON.stringify(removedProduct));
  }

  async function putProduct(filteredProducts: Product[], product: Product) {
    setProducts([product, ...filteredProducts]);
    localStorage.setItem('@James:product', JSON.stringify([product, ...filteredProducts]));
  }

  return (
    <ProductsContext.Provider value={{products, createProduct, removeProduct, putProduct}}>
      {children}
    </ProductsContext.Provider>
  )

}

export function useProducts() {
  const context = useContext(ProductsContext);

  return context;
}

