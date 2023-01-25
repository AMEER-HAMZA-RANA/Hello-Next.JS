// export async function getServerSideProps({ params }: {params: {name:string}}) {
//   const { name } = params;
//   return {
//     props: {
//       name,
//     }
//   };
// }

import { useRouter } from "next/router"


function Greet() {
  const {query} = useRouter()
  // console.log(query)
  return (
    <>
    <h1>Hi {query.name}!</h1>
    </>
  )
}

export default Greet