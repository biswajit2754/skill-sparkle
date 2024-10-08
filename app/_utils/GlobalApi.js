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
        slug
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
const getCourseById=async(courseId)=>{
  const query=gql`
  query MyQuery {
    courseList(where: {slug: "`+courseId+`"}) {
      author
      banner {
        url
      }
      chapter (first: 50) {
        ... on Chapter {
          id
          name
          video {
            url
          }
        }
      }
      demoUrl
      description
      free
      id
      name
      slug
      sourceCode
      tag
      totalChapters
    }
  }
  `
  const result=await request(MASTER_URL,query);
  return result;
}

const enrollToCourse=async(courseId,email)=>{
  const query=gql`
  mutation MyMutation {
    createUserEnrollCourse(
      data: {courseId: "`+courseId+`", userEmail: "`+email+`", courseList: {connect: {slug: "`+courseId+`"}}}
    ) {
      id
    }
    publishManyUserEnrollCoursesConnection {
      edges {
        node {
          id
        }
      }
    }
  }
  `
  const result=await request(MASTER_URL,query);
  return result;
}

const checkEnrolledToCourse=async(courseId,email)=>{
  const query=gql`
  query MyQuery {
    userEnrollCourses(where: {courseId: "`+courseId+`", 
      userEmail: "`+email+`"}) {
      id
    }
  }
  `
  const result=await request(MASTER_URL,query);
  return result;
}

  const getUserEnrolledCourseDetails=async(id,email)=>{
    const query=gql`
    query MyQuery {
      userEnrollCourses(where: {id: "`+id+`", userEmail: "`+email+`"}) {
        courseId
        id
        userEmail
        completedChapter {
          ... on CompletedChapter {
            id
            chapterId
          }
        }
        courseList {
          author
          banner {
            url
          }
          chapter (first:50){
            ... on Chapter {
              id
              name
              shortDesc
              video {
                url
              }
            }
          }
          demoUrl
          description
          free
          id
          name
          slug
          sourceCode
          totalChapters
        }
      }
    }    
    `
    const result=await request(MASTER_URL,query);
  return result;
  }
 
  const markChapterCompleted=async(enrollId,chapterId)=>{
    const query=gql`
    mutation MyMutation {
      updateUserEnrollCourse(
        data: {completedChapter: {create: 
          {CompletedChapter: {data: {chapterId: "`+chapterId+`"}}}}}
        where: {id: "`+enrollId+`"}
      ) {
        id
      }
      publishUserEnrollCourse(where: {id: "`+enrollId+`"}) {
        id
      }
    }`
    const result=await request(MASTER_URL,query);
  return result;
  }

  const getUserAllEnrolledCourseList=async(email)=>{
    const query=gql`
    query MyQuery {
      userEnrollCourses(where: {userEmail: "`+email+`"}) {
        completedChapter {
          ... on CompletedChapter {
            id
            chapterId
          }
        }
        courseId
        courseList {
          name
          id
          totalChapters
          slug
          sourceCode
          free
          description
          demoUrl
          chapter(first: 50) {
            ... on Chapter {
              id
              name
            }
          }
          author
          banner {
            url
          }
        }
      }
    }`

      const result=await request(MASTER_URL,query);
  return result;
  }


  const addNewMember=async(email,paymentId)=>{
    const query=gql`
    mutation MyMutation {
      createMembership(data: {active: true, email: "`+email+`", paymentId: "`+paymentId+`"}) {
        id
      }
      publishManyMemberships(to: PUBLISHED) {                                                       
        count
      }
    }
    `
    const result=await request(MASTER_URL,query);
  return result;
  }

  const checkForMembership=async(email)=>{
    const query=gql`
    query MyQuery {
      memberships(where: {email: "`+email+`"}) {
        email
        id
        paymentId
        createdAt
      }
    }    
    `
    const result=await request(MASTER_URL,query);
  return result;
  }

  const getBookList=async()=>{
    const query=gql`
    query MyQuery {
      bookLists(first: 50, orderBy: name_ASC) {
        id
        name
        banner {
          url
        }
        page {
          ... on Page {
            id
            name
            image {
              url
            }
          }
        }
        totalPages
        slug
      }
    }
    `

    const result=await request(MASTER_URL,query);
    return result;

}

const getBookById=async(bookId)=>{
  const query=gql`
  query MyQuery {
    bookList (where: {slug: "`+bookId+`"}){
      banner {
        url
      }
      page(first: 50) {
        ... on Page {
          id
          name
          image {
            url
          }
        }
      }
      id
      name
      slug
      totalPages
    }
  }  
  `
  const result=await request(MASTER_URL,query);
  return result;
}

const addNewEnquiry=async(name,email,number,message)=>{
  const query=gql`
  mutation MyMutation {
    createEnquiry(data: {name: "`+name+`", email: "`+email+`", number: `+number+`, message: "`+message+`"}) {
      id
    }
    publishManyEnquiries(to: PUBLISHED) {
      count
    }
  }
  `
  const result=await request(MASTER_URL,query);
return result;
}

const getBlogList=async()=>{
  const query=gql`
  query MyQuery {
    blogPosts(first: 100, orderBy: publishedAt_ASC) {
      id
      name
      image {
        url
      }
      titel
      tarikh
      shortDesc
      url
    }
  }
  `

  const result=await request(MASTER_URL,query);
  return result;

}


export default{
    getCourseList,
    getSideBanner,
    getCourseById,
    enrollToCourse,
    checkEnrolledToCourse,
    getUserEnrolledCourseDetails,
    markChapterCompleted,
    getUserAllEnrolledCourseList,
    addNewMember,
    checkForMembership,
    getBookList,
    getBookById,
    addNewEnquiry,
    getBlogList
}