import img from '../assets/img/Abuad.jpg'
import engr from '../assets/icons/engineer-worker-svgrepo-com.svg'
import { useTypedSuperpower } from './useTypedSuperpower'

const Welcomes = ['WELCOME TO THE SCHOOL OF ENGINEERING','THE BEST SCHOOL', 'ABUAD']



const Home = () => {
    const {TypedWelcome, selectedWelcome} = useTypedSuperpower(Welcomes)
    return(
        <div className="">
            <div className='relative'>
                <div className='absolute flex justify-center items-center w-full h-screen '>
                    <div className="md:mb-0 mb-20">
                        <div className="flex w-full justify-center">
                            <img src={engr} alt="engr" className='w-32 mb-2 hover:w-36 duration-300' />
                        </div>
                        <div className='text-[3vw] font-[800]
                                        text-white'>
                            <h1 className="blinking-cursor" aria-label={selectedWelcome}>{TypedWelcome}</h1>
                        </div>
                    </div>
                </div>
                <img src={img} className='md:h-[500px] w-full' alt="" />
            </div>
        </div>
    )
}

export default Home