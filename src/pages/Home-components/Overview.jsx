import Button from "../../layouts/Button"
import img from '../../assets/img/Engineering ext.jpg'


const Overview = () => {
    return (
        <div>
            <h1 className="font-black m-8 text-3xl">Overview of The School Of Engineering</h1>
            <div className="h-[400px] border m-5 rounded-lg shadow shadow-purple-300 hover:shadow-indigo-500/40">
                <div className="md:flex m-5 md:h-[700px] container">
                    <img src={img} className="w-[50%] h-[40%] md:ml-0 ml-20 md:w-[50%] md:ml:0 shadow-xl rounded m-5" alt="" />
                    <p className="mt-5 pr-5 ">Welcome to the Faculty of Engineering, an esteemed academic institution that offers a wide
                     range of degree programs in engineering, science, and technology. We pride ourselves on our cutting-edge research,
                     innovative teaching methods, and strong industry partnerships.<p className="hidden md:block md:m-0 md:p-0">Our commitment is to provide students with the knowledge and skills necessary to thrive in their chosen fields. With an emphasis on experiential learning and hands-on training, our students gain practical experience and can apply the theories they learn in the classroom to real-world situations.
                        Our undergraduate and graduate degree programs include various fields such as mechanical engineering, civil engineering, electrical engineering, chemical engineering, and computer engineering. Our graduate programs include master's and doctoral degrees in engineering, science, and technology.
                        </p> <br/><div className="mb-10 md:mt-0 mt-2"><Button>Read More</Button></div>
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default Overview