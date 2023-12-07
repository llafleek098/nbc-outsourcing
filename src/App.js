import YoutubeWrapper from './components/home/YoutubeWrapper';
import { InterviewClientProvider } from './hooks/useInterview';
import { ProductClientProvider } from './hooks/useProduct';

function App() {
  return (
    <InterviewClientProvider>
      <ProductClientProvider>
        <YoutubeWrapper />
      </ProductClientProvider>
    </InterviewClientProvider>
  );
}

export default App;
