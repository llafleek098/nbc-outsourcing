import { Provider } from 'react-redux';
import Router from './Router';
import { InterviewClientProvider } from './hooks/useInterview';
import { ProductClientProvider } from './hooks/useProduct';
import store from './modules/store';

function App() {
  return (
    <Provider store={store}>
      <InterviewClientProvider>
        <ProductClientProvider>
          <Router />
        </ProductClientProvider>
      </InterviewClientProvider>
    </Provider>
  );
}

export default App;
