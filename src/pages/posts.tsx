import * as React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '@/containers/Layout';
import { H3, P } from '@/components/Typography';

const PageTitle = styled(H3)`
  padding-top: 5rem;
  text-align: center;
  font-size: 30px;
`;

const PostsWrapper = styled.ol`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  padding: 5rem 0;
`;

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

const Description = styled(P)`
  margin: 2rem 0;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #dbe3eb;
  padding: 1.5rem 0;
`;

const Date = styled.p`
  font-size: 14px;
`;

const ReadMoreLink = styled(Link)`
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  color: #13273f;
`;
interface Nodes {
  nodes: {
    excerpt: string;
    fields: { slug: string };
    frontmatter: {
      coverImage: string;
      date: string;
      description: string;
      title: string;
    };
  }[];
}
interface AllMarkdownRemark {
  allMarkdownRemark: Nodes;
}
interface BlogIndexProps {
  data: AllMarkdownRemark;
}
const BlogIndex: React.FunctionComponent<BlogIndexProps> = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;
  if (posts.length === 0) {
    return (
      <Layout>
        <p>No blog posts found.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageTitle>
        Open Banking and beyond <span className="accent-text">by Fena</span>
      </PageTitle>
      <PostsWrapper style={{ listStyle: `none` }}>
        {posts.map((post) => {
          const title = post.frontmatter.title || post.fields.slug;

          return (
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
        })}
      </PostsWrapper>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          coverImage
        }
      }
    }
  }
`;
