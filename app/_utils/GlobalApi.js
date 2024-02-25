const { gql, default: request } = require("graphql-request")

const MASTER_URL="https://api-ap-south-1.hygraph.com/v2/"+process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+"/master"

const getCourseList=async()=>{
    const query=gql`
    query MyQuery {
      courseLists(first: 20, orderBy: createdAt_DESC) {
        author
        name
        id
        free
        description
        demoUrl
        banner {
          url
        }
        chapter {
          ... on Chapter {
            id
            name
            video {
              url
            }
          }
        }
        totalChapters
        sourceCode
        tag
      }
    }
    `

    const result=await request(MASTER_URL,query);
    return result;

}

const getSideBanner=async()=>{
  const query=gql`
  query GetSideBanner {
    sideBanners {
      id
      name
      banner {
        id
        url
      }
      url
    }
  }
  `

  const result=await request(MASTER_URL,query);
  return result;

}

export default{
    getCourseList,
    getSideBanner

}