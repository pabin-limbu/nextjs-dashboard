'use client';

function page(props) {
  console.log(props);
  return <div></div>;
}

export default page;

// export async function getServerSideProps() {
//   // Fetch data from external API
//   // const res = await fetch('https://api.github.com/repos/vercel/next.js');
//   // const repo = await res.json();
//   // Pass data to the page via props
//   return { props: { name: 'pabin' } };
// }
