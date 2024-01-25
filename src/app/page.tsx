
import Image from 'next/image'
import dynamic from 'next/dynamic';




export default function Example() {

  const Layout = dynamic(() => import('../app/UI/UserGuide/layout'), {
    ssr: true,
  });

  
  return (
    
    <div className=''>
     <Layout />  
    
    </div>
  )
}
