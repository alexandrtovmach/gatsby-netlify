import React from 'react';
import styled from 'styled-components';
import {
  H2,
  P,
  SecondaryP,
  Subtitle2,
  Subtitle5,
} from '@/components/Typography';
import Section from '@/components/Section';
import bannerBg from '../assets/img/aboutPageBanner.png';
import ButtonDefault from '@/components/ButtonDefault';
import ContactIcon from './ContactIcon';
import { AboutPageContent } from '@/pages/about';

const FirstViewport = styled(Section)`
  background: linear-gradient(
    0deg,
    rgba(244, 247, 249, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
`;
const Banner = styled.div`
  background-image: ${(props) => `url(${props.resource})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  height: calc(25rem - 4rem);
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    height: auto;
    padding: 2.5rem 2rem;
    background-position: left;
  }
`;

const PageTitle = styled(Subtitle2)`
  color: white;
`;

const TextWrapper = styled.div`
  display: flex;
  margin-top: 5rem;
  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;
const LeftSide = styled.div`
  padding-right: 3rem;
`;
const RightSide = styled.div`
  @media (max-width: 1200px) {
    margin-top: 2rem;
  }
`;
const Description = styled(P)`
  margin-bottom: 2rem;
`;
const Cards = styled.div`
  display: flex;
  margin-top: 3rem;
  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;
const Card1 = styled.div`
  background-color: #ffff;
  box-shadow: 0px 12px 30px rgba(129, 129, 165, 0.2);
  border-radius: 10px;
  padding: 4rem 3rem;
  flex-basis: 30%;
  flex-grow: 1;
  margin-right: 2rem;
  &:last-of-type {
    margin-right: 0;
  }
  @media (max-width: 1200px) {
    flex-wrap: wrap;
    margin: 0 0 2rem 0;
  }
`;
const OtherCards = styled(Card1)``;

const CardTitle = styled(Subtitle5)`
  margin-bottom: 1rem;
`;

const SecondViewport = styled(Section)`
  background-color: #ffff;
`;
const TeamCards = styled.div`
  display: flex;
  margin-top: 3rem;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
  }
`;

const TeamCard = styled.div`
  margin-right: 2rem;
  border: 1px solid #dbe3eb;
  border-radius: 10px;

  @media (max-width: 1200px) {
    margin: 0 0 2rem 0;
    flex-grow: 1;
  }
`;
const Avatar = styled.img`
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 100%;
`;
const CardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Contacts = styled.div`
  margin-top: 1rem;
`;
const LowerTextBox = styled.div`
  margin-top: 5rem;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LowerTitle = styled(H2)`
  text-align: center;
`;
const LowerDescription = styled(P)`
  width: 60%;
  text-align: center;
  margin: 2rem 0;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
const Mail = styled.a`
  text-decoration: none;
`;
interface AboutPageProps {
  content: AboutPageContent;
}
const AboutContainer: React.FunctionComponent<AboutPageProps> = ({
  content: { viewport1, viewport2, lowerText },
}) => (
  <>
    <FirstViewport>
      <Banner resource={bannerBg}>
        <PageTitle>{viewport1.pageTitle}</PageTitle>
      </Banner>
      <TextWrapper>
        <LeftSide>
          <H2>
            {viewport1.title2} {` `}
            <span className="accent-text">{viewport1.title3}</span>
            {` `}
            {viewport1.title4}
          </H2>
        </LeftSide>
        <RightSide>
          <Description>{viewport1.description1}</Description>
          <Description>{viewport1.description2}</Description>
          <Description>{viewport1.description3}</Description>
        </RightSide>
      </TextWrapper>
      <Cards>
        {viewport1.viewport1Cards.slice(0, 1).map((item) => (
          <Card1>
            <CardTitle>
              {item.title1}
              <span className="accent-text"> {item.title2}</span>
            </CardTitle>
            <P>{item.description}</P>
          </Card1>
        ))}
        {viewport1.viewport1Cards.slice(1).map((item) => (
          <OtherCards>
            <CardTitle>
              {item.title1}
              <span className="accent-text"> {item.title2}</span>
              {` `}
              {item.title3}
            </CardTitle>
            <P>{item.description}</P>
          </OtherCards>
        ))}
      </Cards>
    </FirstViewport>
    <SecondViewport>
      <Subtitle2>
        {viewport2.title1}
        <span className="accent-text"> {viewport2.title2}</span>
      </Subtitle2>
      <TeamCards>
        {viewport2.teamCards.map((item) => (
          <TeamCard>
            <Avatar src={item.avatar} alt="avatar" />
            <CardContent>
              <P className="accent-text-black-bold">{item.name}</P>
              <SecondaryP>{item.position}</SecondaryP>
              <Contacts>
                {item.socials.map((socialItem) => (
                  <a
                    key={socialItem.url}
                    target="_blank"
                    href={socialItem.url}
                    rel="noreferrer"
                  >
                    <ContactIcon type={socialItem.type} />
                  </a>
                ))}
                {/* <Link href="/">
                <LinkedIn src={linkedIn} alt="linkedIn" />
              </Link>
              <Link href="/">
                <Email src={email} alt="email" />
              </Link> */}
              </Contacts>
            </CardContent>
          </TeamCard>
        ))}
      </TeamCards>
      <LowerTextBox>
        <LowerTitle>
          {lowerText.lowerTitle1}&nbsp;
          <span className="accent-text">{lowerText.lowerTitle2}</span>
        </LowerTitle>
        <LowerDescription>
          {lowerText.lowerText1}
          {` `}
          <Mail href={`mailto:${lowerText.lowerText2}`}>
            <span className="accent-text-blue">{lowerText.lowerText2}</span>
          </Mail>
        </LowerDescription>
        <ButtonDefault to={lowerText.button.url}>
          {lowerText.button.label}
        </ButtonDefault>
      </LowerTextBox>
    </SecondViewport>
  </>
);

export default AboutContainer;
