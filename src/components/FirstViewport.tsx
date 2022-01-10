import React from 'react';
import styled from 'styled-components';

import Section from './Section';

const FirstViewportWrapper = styled(Section)<{ withRightPadding: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  height: calc(100vh - 70px - 5rem * 2);
  padding-right: ${(props) => (props.withRightPadding ? `` : 0)};
  @media (max-width: 1200px) {
    flex-wrap: wrap;
    height: auto;
  }
`;

const LeftSideContent = styled.div`
  flex: 1 1 30%;
`;

const RightImage = styled.img`
  max-height: 100%;
  padding-left: 1rem;
  @media (max-width: 1200px) {
    max-height: auto;
    width: 100%;
    margin-top: 2rem;
    padding-left: 0;
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
