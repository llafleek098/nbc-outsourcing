import { createContext, useContext, useState } from 'react';
import { MAX_PAGE } from '../components/interview/form.data.js';
import useInterview from '../hooks/useInterview.jsx';

const initialState = {
  ages: '10ages',
  gender: 'male',
  productName: '',
  category: '',
  page: 0,
  interviews: [],
  handleSubmit: (e) => {},
  handleChange: (e) => {},
  handleNavigateNextPage: () => {},
  handleNavigatePrevPage: () => {}
};
const InterviewContext = createContext(initialState);

export default function InterviewFormProvider({ children }) {
  const [ages, setAges] = useState('10ages');
  const [gender, setGender] = useState('male');
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('선택해주세요');
  const [page, setPage] = useState(0);

  const { interviews, mutation } = useInterview();

  const setters = {
    ages: setAges,
    gender: setGender,
    product: setProductName,
    category: setCategory
  };

  const handleChange = (e) => {
    setters[e.target.name](e.target.value);

    if (e.currentTarget.name === 'category') {
      setProductName('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (page < MAX_PAGE - 1) return;
    if (!ages || !gender || !productName || !category) {
      alert('모든 항목을 선택해주세요');
      setPage(0);
      return;
    }

    mutation.mutate({ ages, gender, productName, category });
  };

  const handleNavigateNextPage = () => setPage((prev) => (prev + 1) % MAX_PAGE);
  const handleNavigatePrevPage = () =>
    setPage((prev) => (prev - 1 + MAX_PAGE) % MAX_PAGE);

  const value = {
    ages,
    gender,
    productName,
    category,
    handleSubmit,
    handleChange,
    interviews,
    page,
    handleNavigateNextPage,
    handleNavigatePrevPage
  };

  return (
    <InterviewContext.Provider value={value}>
      {children}
    </InterviewContext.Provider>
  );
}

export function useInterviewForm() {
  return useContext(InterviewContext);
}
