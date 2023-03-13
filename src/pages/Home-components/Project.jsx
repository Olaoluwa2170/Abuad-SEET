// importing Background image

import image from '../../assets/img/design-ux-engineering-and-art_0.png'


// Project Gallery function


const Project=()=>{
    return(
        <div>
            <div id="" className='project mt-10 md:mx-0 mx-5 rounded mb-10 h-[208px] flex justify-center items-center'>
                <Button/>
            </div>
            
        </div>
    )
}




const Button = () => {
	return(
			<a href="#_" className="relative inline-flex items-center shadow-xl justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-oran transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
				<span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-oran group-hover:h-full"></span>
				<span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
				<svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
				</span>
				<span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
				<svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
				</span>
				<span className="relative w-full text-2xl text-left transition-colors duration-200 ease-in-out group-hover:text-white">Our Project Gallery</span>
			</a>
)

}

export default Project