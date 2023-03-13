import engr from '../assets/icons/engineering-svgrepo-com.svg'
import { useTypedSuperpower } from './useTypedSuperpower'
import BgPictures from './BgPictures'
import Overview from './Home-components/Overview'
import Courses from './Home-components/Courses'
import Project from './Home-components/Project'
import Lecturer from './Home-components/Lecturer'
import Aluminus from './Home-components/Aluminus'
import Cursor from './Home-components/Cursor'
import Alumni from './Home-components/Aluminus'
import Footer from './Home-components/Footer'


const Welcomes = ['WELCOME TO THE SCHOOL OF ENGINEERING','THE BEST SCHOOL', 'ABUAD']



const Home = () => {
    const {TypedWelcome, selectedWelcome} = useTypedSuperpower(Welcomes)
    return(
        <div className="">
            <div className='relative'>
                <div className='absolute flex justify-center md:mt-0 mt-16 md:items-center w-full h-screen '>
                    <div className="md:mb-0 ">
                        <div className="flex w-full justify-center">
                            <img src={engr} alt="engr" className='w-32 mb-8 hover:w-36 duration-300' />
                        </div>
                        <div className='text-[3vw] font-[800]
                                        text-white mb-8'>
                            <h1 className="blinking-cursor" aria-label={selectedWelcome}>{TypedWelcome}</h1>
                        </div>
                    </div>
                </div>
                <BgPictures/>
            </div>
            <Overview/>
            <Courses/>
            <Project/>
            {/* <Lecturer/> */}
            <h1 className='overview my-20'>Head Of Departments</h1>
            <Cursor/>
            <Alumni/>
            <Footer/>
            
            
            
        </div>
    )
}

export default Home