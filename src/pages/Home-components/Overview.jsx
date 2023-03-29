import img from '../../assets/img/Types-of-Engineering-Degrees.jpg'
import { useState } from "react"


const Overview = () => {
    const[moreText, SetmoreText] = useState(false)
    return (
        <div>
            <h1 className="overview">Overview of The School Of Engineering</h1>
            <div className={`border bg-slate-100 m-5 rounded-lg shadow shadow-purple-300 hover:shadow-indigo-500/40`}>
                <div className="md:flex m-5  container">
                    <div className="w-full flex items-center justify-center"><img src={img} className="max-w-[300px] md:max-w-[400px] max-h-[170px] md:max-h-[250px] ml-0 shadow-xl rounded m-5 " alt="" /></div>
                    <p className="mt-1 pr-5 "><span className="font-black text-[2.5vw] mb-5">
                        Welcome to the <span className="text-oran">College of Engineering</span>, an esteemed academic institution that offers a wide
                         range of degree programs in engineering, science, and technology.
                    </span> <br/> 
                    <span className="md:text-xs text-[2vw]">
                        We pride ourselves on our cutting-edge research,
                         innovative teaching methods, and strong industry partnerships.<p className={`${moreText ? "block" : "hidden md:block"} md:m-0 md:p-0`}>Our commitment is to provide students with the knowledge and skills necessary to thrive in their chosen fields. With an emphasis on experiential learning and hands-on training, our students gain practical experience and can apply the theories they learn in the classroom to real-world situations.
                            Our undergraduate and graduate degree programs include various fields such as mechanical engineering, civil engineering, electrical engineering, chemical engineering, and computer engineering. Our graduate programs include master's and doctoral degrees in engineering, science, and technology.
                            </p> <br/>
                            <div className="mb-10 md:mt-0 mt-2">
                            <button onClick={()=>SetmoreText(!moreText)} className="block md:hidden bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-400
                                    duration-500 ">
                                        Read More
                            </button>
                                </div>
                    </span>
                    </p>
                </div>
            </div>
            
        </div>
    )
}






export default Overview
