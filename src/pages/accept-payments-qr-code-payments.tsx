import React from 'react';
import styled from 'styled-components';
import Main from '../containers/Layout';
import qrCodePaymentsContent from '../../content/pages/accept-payments-qr-code-payments.yml';
import { H1, P } from '@/components/Typography';
import ButtonDefault from '@/components/ButtonDefault';
import page3viewport1 from '../assets/img/page3viewport1.svg';
import FirstViewport from '../components/FirstViewport';

// const Section = styled.section`
//   padding: 5rem calc((100vw - 1400px) / 2);

//   @media (max-width: 1440px) {
//     padding: 5rem calc((100vw - 900px) / 2);
//   }
// `;

const Description = styled(P)`
  margin: 1rem 0;
  &:last-of-type {
    margin-bottom: 2em;
  }
  &:first-of-type {
    margin-top: 2em;
  }
`;

// const SecondViewport = styled(Section)`
//   background-image: ${(props) => `url(${props.resource})`};
//   background-repeat: no-repeat;
//   background-size: cover;
//   display: flex;
//   padding-bottom: 0;
// `;

// const ThirdViewport = styled(Section)`
//   background-image: ${(props) => `url(${props.resource})`};
//   background-repeat: no-repeat;
//   background-size: cover;
// `;
// const BenefitCardsLeft = styled.div``;
// const BenefitCardsRight = styled(BenefitCardsLeft)``;
// const PluginCardWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 5rem;
// `;

// const TextWrapper = styled.div`
//   width: 50%;
// `;

// const FourthViewport = styled(Section)`
//   background-color: #ffff;
// `;
// const FifthViewport = styled(Section)`
//   padding-top: 0;
//   background-color: #ffff;
// `;
interface QrCodePaymentsContent {
  viewport1: {
    title1: string;
    title2: string;
    description: string;
  };
  benefitCards: {
    title: string;
    description: string;
  }[];
  viewport3: {
    title1: string;
    title2: string;
    description: string;
  };
  pluginCards: {
    title: string;
    image: string;
  }[];
  viewport4: {
    title: string;
    carouselItems: {
      title: string;
      text: string;
      image: string;
    }[];
  };
  viewport5: {
    bannerLabel: string;
    bannerDescription: string;
    lowerTitle1: string;
    lowerTitle2: string;
    lowerText: string;
  };
}
const AcceptPaymentsAccountToAccount: React.FunctionComponent = () => {
  const { viewport1 } =
    qrCodePaymentsContent as unknown as QrCodePaymentsContent;
  return (
    <Main>
      <FirstViewport withRightPadding img={page3viewport1}>
        <H1>
          {viewport1.title1}&nbsp;
          <span className="accent-text"> {viewport1.title2}</span>
        </H1>
        <Description>{viewport1.description}</Description>
        <ButtonDefault>REGISTER NOW</ButtonDefault>
      </FirstViewport>
    </Main>
  );
};

export default AcceptPaymentsAccountToAccount;
