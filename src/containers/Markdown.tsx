import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import { P, H1, H2, H3, Strong, Body2 } from '../components/Typography';

const MarkdownH1 = (props) => <H1 {...props} />;
const MarkdownH2 = (props) => <H2 {...props} />;
const MarkdownH3 = (props) => <H3 {...props} />;
const MarkdownP = (props) => <P {...props} />;
const MarkdownStrong = (props) => <Strong {...props} />;
const MarkdownLink = (props) => (
  <a {...props} className="accent-text-blue">
    {/* eslint-disable-next-line react/destructuring-assignment */}
    {props.children}
  </a>
);
const MarkdownListItem = (props) => (
  <li {...props}>
    {/* eslint-disable-next-line react/destructuring-assignment */}
    <Body2>{props.children}</Body2>
  </li>
);

const StyledImg = styled.img`
  width: 100%;
  display: block;
  margin: 1rem 0;
  border-radius: 5px;
`;

const MarkdownImg = (props) => <StyledImg {...props} />;

const Markdown: React.FunctionComponent<{ children: string }> = ({
  children,
}) => (
  <ReactMarkdown
    components={{
      h1: MarkdownH1,
      h2: MarkdownH2,
      h3: MarkdownH3,
      p: MarkdownP,
      strong: MarkdownStrong,
      a: MarkdownLink,
      li: MarkdownListItem,
      img: MarkdownImg,
    }}
    linkTarget="_blank"
  >
    {children}
  </ReactMarkdown>
);

export default Markdown;
