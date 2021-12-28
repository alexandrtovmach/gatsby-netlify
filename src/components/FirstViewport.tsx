import React from 'react';
import styled from 'styled-components';
import Section from './Section';

const FirstViewportWrapper = styled(Section)<{ withRightPadding: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - 70px - 5rem * 2);
  padding-right: ${(props) => (props.withRightPadding ? `` : 0)};
  @media (max-width: 1200px) {
    height: auto;
  }
`;

const LeftSideContent = styled.div`
  flex: 1 1 30%;
`;
const RightImage = styled.img`
  height: 100%;
  @media (max-width: 1200px) {
    height: auto;
    width: 100%;
    margin-top: 3rem;
  }
`;
interface ViewportProps {
  img: string;
  withRightPadding?: boolean;
}
const FirstViewport: React.FunctionComponent<ViewportProps> = ({
  children,
  img,
  withRightPadding,
}) => (
  <FirstViewportWrapper withRightPadding={withRightPadding}>
    <LeftSideContent>{children}</LeftSideContent>
    <RightImage src={img} alt="application screnshot" />
  </FirstViewportWrapper>
);

export default FirstViewport;
