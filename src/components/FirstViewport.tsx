import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 5rem calc((100vw - 1400px) / 2);

  @media (max-width: 1440px) {
    padding: 5rem calc((100vw - 900px) / 2);
  }
`;

const FirstViewportWrapper = styled(Section)<{ withRightPadding: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - 70px - 5rem * 2);
  padding-right: ${(props) => (props.withRightPadding ? `` : 0)};
`;

const LeftSideContent = styled.div`
  flex: 1 1 30%;
`;
const RightImage = styled.img`
  height: 100%;
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
