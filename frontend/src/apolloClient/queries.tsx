import { gql } from 'apollo-boost';


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