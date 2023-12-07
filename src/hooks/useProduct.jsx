import {
  QueryClient,
  QueryClientProvider,
  useQuery
} from '@tanstack/react-query';
import jsonServerInstance from '../api/serverInstance';

function useProduct() {
  const {
    data: products,
    isLoading,
    error
  } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: Infinity // 서버에서 한번 가져오면 더이상 CUD필요가 없다
  });
  return { products, isLoading, error };
}

async function fetchProducts() {
  const response = await jsonServerInstance.get('/products');
  return response.data;
}

export function ProductClientProvider({ children }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default useProduct;
