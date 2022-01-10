import * as React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '@/containers/Layout';
import { H3 } from '@/components/Typography';
import Markdown from '../containers/Markdown';

const Article = styled.article`
  padding: 5rem calc((100vw - 700px) / 2);

  @media (max-width: 1440px) {
    padding: 2rem;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const PageTitle = styled(H3)`
  padding-top: 5rem;
  font-size: 33px;
`;
const Meta = styled.p`
  font-size: 14px;
  margin: 2rem 0;
`;

const CoverImage = styled.img`
  margin-bottom: 2rem;
  border: 1px solid #dbe3eb;
  border-radius: 20px;
`;
// const Body = styled.section``;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const SwitchButton = styled.p`
  padding: 2rem 5rem;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  color: #13273f;
`;

const StyledNav = styled.nav`
  background-color: #ffff;
`;
const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const { previous, next } = data;

  return (
    <Layout>
      <Article>
        <Header>
          <PageTitle itemProp="headline">{post.frontmatter.title}</PageTitle>
          <Meta>
            by <strong>{post.frontmatter.author}</strong>
            {` `}
            on <strong>{post.frontmatter.date}</strong>
          </Meta>
          {post.frontmatter.coverImage && (
            <CoverImage src={post.frontmatter.coverImage} alt="cover" />
          )}
        </Header>
        <Markdown>{post.rawMarkdownBody}</Markdown>
      </Article>
      <StyledNav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <StyledLink to={previous.fields.slug} rel="prev">
                <SwitchButton>← {previous.frontmatter.title}</SwitchButton>
              </StyledLink>
            )}
          </li>
          <li>
            {next && (
              <StyledLink to={next.fields.slug} rel="next">
                <SwitchButton>{next.frontmatter.title} →</SwitchButton>
              </StyledLink>
            )}
          </li>
        </ul>
      </StyledNav>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      rawMarkdownBody
      frontmatter {
        coverImage
        title
        author
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
