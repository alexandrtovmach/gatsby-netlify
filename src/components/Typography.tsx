import styled from 'styled-components';

const darkBlueColor = `#13273f`;

export const H1 = styled.h1`
  font-size: 48px;
  line-height: 60px;
  font-weight: bold;
  color: ${darkBlueColor};
`;

export const H2 = styled.h2`
  font-size: 36px;
  line-height: 45px;
  font-weight: bold;
  color: ${darkBlueColor};
`;

export const H3 = styled.h3`
  font-size: 26px;
  line-height: 40px;
  font-weight: bold;
  color: #${darkBlueColor};
`;

export const P = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: ${darkBlueColor};
`;

export const Strong = styled(P)`
  font-weight: bold;
`;
export const Subtitle1 = styled(P)`
  font-size: 45px;
  line-height: 56px;
  font-weight: 700;
`;
export const Subtitle2 = styled(P)`
  font-size: 34px;
  line-height: 43px;
  font-weight: 700;
`;
export const Subtitle5 = styled(P)`
  font-size: 18px;
  line-height: 28px;
  font-weight: bold;
`;
export const SecondaryP = styled(P)`
  font-size: 15px;
  line-height: 18px;
  font-weight: 500;
  color: #6c6c8a;
`;
