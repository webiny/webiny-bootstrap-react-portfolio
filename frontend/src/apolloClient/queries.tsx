import { gql } from 'apollo-boost';

// You will change the queries here based on your Content Models 
export const GET_BLOGS = gql`
  query listBlogs {
    listBlogs {
      data {
        id
        title
        link
        cover
        subtitle
      }
    }
  }
`;

export const GET_PROJECTS = gql`{
    listProjects {
      data {
        title
        subtitle
        link
      }
    }
}`;