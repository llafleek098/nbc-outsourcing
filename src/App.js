import Router from './Router';
import { ProductClientProvider } from './hooks/useProduct';

function App() {
  return (
    <ProductClientProvider>
      <Router />
    </ProductClientProvider>
  );
}

export default App;
