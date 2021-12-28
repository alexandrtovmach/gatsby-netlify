import styled from 'styled-components';

const Section = styled.section`
  padding: 5rem calc((100vw - 1200px) / 2);
  flex-wrap: wrap;

  /* @media (max-width: 1440px) {
    padding: 5rem calc((100vw - 900px) / 2);
    padding-bottom: 10rem;
  } */
  @media (max-width: 1200px) {
    padding: 5rem 2rem;
  }
`;
export default Section;
