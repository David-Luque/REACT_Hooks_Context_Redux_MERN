import Layout from '../components/Layout'
import GuitarList from '../components/GuitarList'
import CourseSection from '../components/CourseSection.js';
import BlogList from '../components/BlogList';


export default function Home({ guitarsData, courseData, blogData }) {
  console.log(guitarsData)
  return (
    <Layout page={"Home"} guitar={guitarsData[8]}>
      <main className='container'>
        <h1 className='heading'>Our collection</h1>
        <GuitarList 
          guitars={guitarsData}
        />
      </main>
      <CourseSection {...courseData} />
      <section className='container'>
        <BlogList blogData={blogData} />
      </section>
    </Layout>
  )
}


export async function getServerSideProps() { // we cannot use this function (and getStaticProps) on component file, only on page file
  //REQUEST FOR ONLY 1 FETCH; IN CASE OF MORE, BETTER THE OPTION BELOW
  // const response = await fetch(url);
  // const guitars = await response.json();
  // return {
  //   props: {
  //     guitars
  //   }
  // }

  const guitarsURL = `${process.env.API_URL}/guitars?_sort=createdAt:desc`;
  const courseURL = `${process.env.API_URL}/courses`;
  const blogUrl = `${process.env.API_URL}/blogs?_limit=3&_sort=createdAt:desc`;

  const [ resGuitars, resCourse, resBlog ] = await Promise.all([
    fetch(guitarsURL),
    fetch(courseURL),
    fetch(blogUrl)
  ]);
  const [ guitarsData, courseData, blogData ] = await Promise.all([
    resGuitars.json(),
    resCourse.json(),
    resBlog.json()
  ]);

  return {
      props: {
        guitarsData,
        courseData,
        blogData
      }
  }
};