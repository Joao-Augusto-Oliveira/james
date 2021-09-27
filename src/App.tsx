import { ProductsProvider } from './hooks/useProducts';
import Routes from './routes';
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
    <ProductsProvider>
      <Routes />
      <GlobalStyle />
    </ProductsProvider>
    </>
  );

}

export default App;
