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
  display: inline-block;
  border-bottom: 2px dotted #ff923c;
  padding: 2rem 0 3rem 3rem;
  width:22%;

    @media (max-width: 1200px) {
     font-size:calc(2rem + 2vw);
     width:100%;
  }
    @media (max-width: 700px) {
     padding: 0;
     font-size:2rem;
     
  }
`;

const BlogPostContent = styled.div`
  background: #e6e6e6;
  padding: calc(6rem + 0.5vw);

`;

export default BlogTitle;
