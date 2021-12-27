import * as React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '@/containers/Layout';
import { H3 } from '@/components/Typography';

const Content = styled.div`
  background-color: #ffff;
  padding: 0 25rem;
  padding-bottom: 5rem;
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
const Date = styled.p`
  font-size: 14px;
  margin: 2rem 0;
`;

const CoverImage = styled.img`
  margin-bottom: 2rem;
  border: 1px solid #dbe3eb;
  border-radius: 20px;
`;
const Body = styled.section``;
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
      <Content
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <Header>
          <PageTitle itemProp="headline">{post.frontmatter.title}</PageTitle>
          <Date>{post.frontmatter.date}</Date>
          <CoverImage src={post.frontmatter.coverImage} alt="cover" />
        </Header>
        <Body
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
      </Content>
      <StyledNav className="blog-post-nav">
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
      excerpt(pruneLength: 160)
      html
      frontmatter {
        coverImage
        title
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
