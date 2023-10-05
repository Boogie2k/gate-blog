
import { Inter, Poppins } from 'next/font/google'
import Nav from '../components/clientComponent/Nav'
import Hero from '@/components/clientComponent/Hero'
import New from '@/components/clientComponent/New'
import Trending from '@/components/clientComponent/Trending'
import Reads from '@/components/clientComponent/Reads'
import Blog from '@/components/clientComponent/Blog'
import Footer from '@/components/clientComponent/Footer'

const inter = Inter({ subsets: ['latin'] })
 
const poppins = Poppins({ weight: '400',
 subsets: ['latin'] })

export default function Home({isMenu, setIsMenu, user}:any) {
  console.log(user)

  return (
  <>
<div className={` ${poppins.className}`}>
  
  <Nav isMenu ={isMenu} user={user}  setIsMenu={setIsMenu}/></div>
 <Hero/>
 <New/>
 <Trending/>
 <Reads/>
 <Blog/>
 <Footer/>
  </>
  )
}
