import React from 'react';
import styled from 'styled-components';
import solutionCardLeft from '../assets/img/solutionCardLeft.png';
import solutionCardRight from '../assets/img/partnershipPhone.png';
import { H1, P, Subtitle5 } from '@/components/Typography';
import Section from '@/components/Section';
import ButtonDefault from '@/components/ButtonDefault';
import { PartnershipPageContent } from '@/pages/partnership';

const FirstViewport = styled(Section)`
  background-color: #ffff;
`;
const PageTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PageTitle = styled(H1)`
  text-align: center;
  width: 70%;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
const PageDescription = styled(P)`
  text-align: center;
  width: 50%;
  margin-top: 2rem;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
const ImgBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

const PartnershipCard = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  flex-basis: 50%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1200px) {
    margin-bottom: 2rem;
  }
`;

const PartnershipCardLeft = styled(PartnershipCard)`
  background: linear-gradient(323.75deg, #70efff -21.73%, #4961e9 94.86%);
  margin-right: 2rem;
  display: flex;
  align-items: center;
  @media (max-width: 1200px) {
    margin-right: 0;
  }
`;

const PartnershipCardRight = styled(PartnershipCard)`
  background-color: #13273f;
  display: flex;
  align-items: center;
`;

const PartnershipCardLabel = styled(Subtitle5)`
  padding-top: 5rem;
  padding-left: 5rem;
  padding-right: 5rem;
  width: 60%;
  margin-bottom: 2rem;
  text-align: center;
  color: white;
  @media (max-width: 1200px) {
    padding: 2rem 2rem 0 2rem;
    line-height: 30px;
  }
`;

const PartnershipCardDescription = styled(P)`
  padding-left: 5rem;
  padding-right: 5rem;
  text-align: center;
  color: white;
  @media (max-width: 1200px) {
    padding: 1rem 2rem 0 2rem;
  }
`;

const CodeImg = styled.img`
  padding-top: 2rem;
  align-self: flex-end;
  width: 90%;
`;
const PhoneImg = styled.img`
  padding-top: 2rem;
  width: 75%;
  align-self: center;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;
interface PartnershipPageProps {
  content: PartnershipPageContent;
}

const PartnershipContainer: React.FunctionComponent<PartnershipPageProps> = ({
  content: { viewport1, partnershipCards },
}) => (
  <FirstViewport>
    <PageTitleWrapper>
      <PageTitle>
        {viewport1.title1}
        <span className="accent-text"> {viewport1.title2}</span>
        {` `}

        {viewport1.title3}
      </PageTitle>
      <PageDescription>{viewport1.description}</PageDescription>
    </PageTitleWrapper>

    <ImgBox>
      <PartnershipCardLeft>
        <PartnershipCardLabel>
          <span className="accent-text-black">
            {partnershipCards.leftTitle1}
          </span>
          {` `}
          {partnershipCards.leftTitle2}
          {` `}
          <span className="accent-text-black">
            {partnershipCards.leftTitle3}
          </span>
        </PartnershipCardLabel>
        <PartnershipCardDescription>
          {partnershipCards.leftDescription}
        </PartnershipCardDescription>
        <PhoneImg src={solutionCardRight} alt="app screenshot" />
      </PartnershipCardLeft>
      <PartnershipCardRight>
        <PartnershipCardLabel>
          {partnershipCards.rightTitle1}&nbsp;
          <span className="accent-text">{partnershipCards.rightTitle2}</span>
        </PartnershipCardLabel>
        <PartnershipCardDescription>
          {partnershipCards.rightDescription}
        </PartnershipCardDescription>
        <CodeImg src={solutionCardLeft} alt="code screenshot" />
      </PartnershipCardRight>
    </ImgBox>
    <Button>
      <ButtonDefault to={partnershipCards.button.url}>
        {partnershipCards.button.label}
      </ButtonDefault>
    </Button>
  </FirstViewport>
);

export default PartnershipContainer;
