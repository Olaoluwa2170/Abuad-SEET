// importing Background image

import image from '../../assets/img/design-ux-engineering-and-art_0.png'


// Project Gallery function


const Alumni=()=>{
    return(
        <div>
            <div id="" className='Alumni mt-10 md:mx-0 mx-5 rounded mb-10 h-[208px] flex justify-center items-center'>
                <Button/>
            </div>
            
        </div>
    )
}




const Button = () => {
	return(
    <a href="#_" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
    <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
    <span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
    <span class="relative text-white">Our Alumni Gallery</span>
    </span>
    </a>
)

}

export default Alumni