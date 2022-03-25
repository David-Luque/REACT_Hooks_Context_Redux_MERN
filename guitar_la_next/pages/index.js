import Layout from '../components/Layout'
import GuitarList from '../components/GuitarList'
import CourseSection from '../components/CourseSection.js';


export default function Home({ guitarsData, courseData }) {
  console.log(guitarsData, courseData)
  return (
    <Layout page={"Home"} >
      <main className='container'>
        <h1 className='heading'>Our collection</h1>
        <GuitarList 
          guitars={guitarsData}
        />
      </main>
      <CourseSection {...courseData} />
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

  const [ resGuitars, resCourse ] = await Promise.all([
    fetch(guitarsURL),
    fetch(courseURL)
  ]);
  const [ guitarsData, courseData ] = await Promise.all([
    resGuitars.json(),
    resCourse.json()
  ]);

  return {
      props: {
        guitarsData,
        courseData
      }
  }
};