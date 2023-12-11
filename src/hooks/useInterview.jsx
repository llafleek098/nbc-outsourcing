import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery
} from '@tanstack/react-query';
import jsonServerInstance from '../api/serverInstance';

function useInterview() {
  const {
    data: interviews,
    error,
    isLoading,
    refetch
  } = useQuery({
    queryKey: ['interviews'],
    queryFn: fetchInterview,
    enabled: false
  });

  const mutation = useMutation({
    mutationFn: postInterview,
    onSuccess: () => {
      refetch();
    }
  });

  return {
    interviews,
    isLoading,
    error,
    mutation,
    addInterview: mutation.mutate
  };
}

async function fetchInterview() {
  const response = await jsonServerInstance.get('/interviews');
  return response.data;
}
function postInterview(newInterview) {
  return jsonServerInstance.post('/interviews', newInterview);
}

export function InterviewClientProvider({ children }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default useInterview;
