import React from 'react';
import styled from 'styled-components';

function BlogTitle() {
  return (
    <BlogPostContent>
      <BlogPostTitle>Svi Blog Postovi</BlogPostTitle>
    </BlogPostContent>
  );
}

const BlogPostTitle = styled.h2`
  color: #f44336;
  font-size: calc(3rem + 0.6vw);
  font-family: 'Pacifico', sans-serif;
  font-weight: 100;
  display: block;
  border-bottom: 2px dotted #ff923c;
  padding: 2rem 0 3rem 0;
    width:25%;
`;

const BlogPostContent = styled.div`
  background: #e6e6e6;
  padding: calc(6rem + 0.5vw);

`;

export default BlogTitle;
