import { createContext, useContext, useState } from 'react';
import { MAX_PAGE } from '../components/interview/forms/form.data.js';
import useInterview from '../hooks/useInterview.jsx';
const FIRST_PAGE = 0;

const initialState = {
  ages: '10ages',
  gender: 'male',
  productName: '',
  category: '',
  page: 0,
  handleSubmit: (e) => {},
  handleChange: (e) => {},
  handleNavigateNextPage: () => {},
  handleNavigatePrevPage: () => {},
  handleResetInterview: () => {},
  isDisablePrev: true,
  isDisableNext: true,
  isDisableSubmit: true
};
const InterviewContext = createContext(initialState);
const initialData = {
  ages: '10ages',
  gender: 'male',
  productName: '',
  category: '선택해주세요'
};

export default function InterviewFormProvider({ children }) {
  const [data, setData] = useState(initialData);
  const [page, setPage] = useState(0);

  const { addInterview } = useInterview();

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.currentTarget.name === 'category') {
      setData((prev) => ({ ...prev, productName: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(MAX_PAGE);
    addInterview({ ...data });
  };

  const handleNavigateNextPage = () => {
    setPage((prev) => (prev + 1) % MAX_PAGE);
  };

  const handleNavigatePrevPage = () =>
    setPage((prev) => (prev - 1 + MAX_PAGE) % MAX_PAGE);

  const handleResetInterview = () => {
    setPage(FIRST_PAGE);
    setData(initialData);
  };

  const isDisablePrev = page === FIRST_PAGE;
  const isDisableSubmit =
    page !== MAX_PAGE - 1 || Object.keys(data).some((key) => !data[key]);
  const isDisableNext = page === MAX_PAGE - 1;

  const value = {
    ...data,
    handleSubmit,
    handleChange,
    page,
    handleNavigateNextPage,
    handleNavigatePrevPage,
    handleResetInterview,
    isDisablePrev,
    isDisableNext,
    isDisableSubmit
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
