import img from '../../src/assets/img/IMG_0371.jpg'

const About = () => {
    return (
        <div className="md:mt-[100px] h-screen bg-[#D6DEED]">
            <div className="flex flex-col md:pt-10">
                <div className="relative">
                    <div className="top-11 ml-16">
                        <h1 className="text-[3vw] font-black text-primary mt-2">We Teach High level Courses <br/> <span className="text-oran">Engineering</span> School Number One</h1>
                    </div>
                </div>
                <div className="flex text-xs mr-2 text-gray-700 items-center justify-center max-w-[800px] ml-16 md:mt-3 mt-2">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis voluptatem enim quibusdam! Facere reprehenderit sunt est eius deserunt sequi a, ullam corrupti quaerat, necessitatibus nesciunt amet labore ducimus mollitia explicabo?</p>
                </div>        
                </div>
            <div>
                <img className="h-[400px] mt-10 w-full" src={img} alt="" />
            </div>

        </div>
    )
}

export default About