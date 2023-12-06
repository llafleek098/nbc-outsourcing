import React from 'react';
import { useInterviewForm } from '../../contexts/interview.context';
import useInterview from '../../hooks/useInterview';
import useProduct from '../../hooks/useProduct';
import InterviewChart from './InterviewChart';
import { getAgesCountData, getGenderCountData } from './form.data';

function InterviewResult() {
  const { interviews } = useInterview();
  const { products } = useProduct();
  const { category, productName } = useInterviewForm();

  const product =
    category &&
    productName &&
    products[category].find((product) => product.name === productName);
  const filteredInterviews = interviews
    ? interviews.filter((interview) => interview.productName === productName)
    : [];

  const { agesCountData, genderCountData } = filteredInterviews.reduce(
    (counterObject, interview) => {
      counterObject.agesCountData[interview.ages].count++;
      counterObject.genderCountData[interview.gender].count++;
      return counterObject;
    },
    { agesCountData: getAgesCountData(), genderCountData: getGenderCountData() }
  );
  return (
    productName &&
    interviews && (
      <div>
        <figure>
          <h2>My Favorite Pick</h2>
          <img src={product?.imgSrc} alt={product?.name} />
          <p>{product?.name}</p>
        </figure>
        <div>
          <InterviewChart
            title="나이대"
            total={filteredInterviews.length}
            countData={agesCountData}
          />
          <InterviewChart
            title="성별"
            total={filteredInterviews.length}
            countData={genderCountData}
          />
        </div>
      </div>
    )
  );
}

export default InterviewResult;
