import React from 'react';
import { useInterviewForm } from '../../contexts/interview.context';
import useInterview from '../../hooks/useInterview';
import useProduct from '../../hooks/useProduct';
import InterviewChart from './InterviewChart';
function InterviewResult() {
  const { interviews } = useInterview();
  const { products } = useProduct();
  const { category, productName } = useInterviewForm();

  const product =
    category &&
    productName &&
    products[category].find((product) => product.name === productName);

  return (
    productName && (
      <div>
        <figure>
          <h2>My Favorite Pick</h2>
          <img src={product?.imgSrc} alt={product?.name} />
          <p>{product?.name}</p>
        </figure>
        <div>
          <InterviewChart
            title="나이대"
            items={['10대', '20대', '30대', '40대', '50대', '60대 이상']}
          />
          <InterviewChart title="성별" items={['여성', '남성']} />
        </div>
      </div>
    )
  );
}

export default InterviewResult;
