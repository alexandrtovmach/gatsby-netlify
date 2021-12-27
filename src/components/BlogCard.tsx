import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { P } from './Typography';

const StyledLi = styled.li`
  box-shadow: 0px 0px 6px rgba(19, 39, 63, 0.2);
  border-radius: 5px;
  background-color: #ffff;
  width: 30%;
  padding: 1rem 2rem 0 2rem;
`;

const CoverImage = styled.img`
  width: 100%;
  margin-bottom: 2rem;
`;

const Title = styled(Link)`
  font-weight: bold;
  font-size: 15px;
  text-decoration: none;
  color: black;
`;
const Date = styled.p`
  font-size: 14px;
`;
const Description = styled(P)`
  font-size: 14px;
  line-height: 24px;
  margin: 2rem 0;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #dbe3eb;
  padding: 1.5rem 0;
`;
const ReadMoreLink = styled(Link)`
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  color: #13273f;
`;
const BlogCard: React.FunctionComponent = ({ post, title }) => (
  <StyledLi key={post.fields.slug}>
    <article
      className="post-list-item"
      itemScope
      itemType="http://schema.org/Article"
    >
      <header>
        <CoverImage src={post.frontmatter.coverImage} alt="cover" />
        <p>
          <Title to={post.fields.slug} itemProp="url">
            <span itemProp="headline">{title}</span>
          </Title>
        </p>
      </header>
      <section>
        <Description
          dangerouslySetInnerHTML={{
            __html: post.frontmatter.description || post.excerpt,
          }}
          itemProp="description"
        />
        <Footer>
          <Date>{post.frontmatter.date}</Date>
          <ReadMoreLink to={post.fields.slug} itemProp="url">
            Read more &rarr;
          </ReadMoreLink>
        </Footer>
      </section>
    </article>
  </StyledLi>
);

export default BlogCard;
