import styled from 'styled-components';

function PageBanner({ title, description, titleColor, mobileBg, basicBg }) {
  return (
    <StPageBannerWrapper
      titleColor={titleColor}
      mobileBg={mobileBg}
      basicBg={basicBg}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </StPageBannerWrapper>
  );
}

export default PageBanner;

const StPageBannerWrapper = styled.header`
  position: relative;

  height: 50rem;
  width: 100%;
  padding: 1rem;
  background: url(${(props) => props.basicBg}) center no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  h2 {
    color: ${(props) => props.titleColor};
    letter-spacing: -5px;
    font-size: 5rem;
    text-transform: uppercase;
    font-weight: 600;
  }
  p {
    color: black;
    font-size: 2rem;
  }

  @media screen and (max-width: 37.5rem) {
    background-image: url(${(props) => props.mobileBg || props.basicBg});
    justify-content: flex-end;
    padding-bottom: 3.5%;
    text-align: center;

    h2 {
      font-size: 3.5rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;
