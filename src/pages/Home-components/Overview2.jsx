import { useState } from 'react'
import img from '../../assets/icons/checked.png'





const Overview = () => {
    return (
        <div>
            <section className='mt-20 ml-5'>
                <div id='overview' className='grid grid-cols-1 md:grid-cols-2  border shadow-lg p-10 h-[500px] mr-2 rounded-lg'>
                    <div id='overview-text'>
                        <div id='header'>
                            <h1 className='font-black text-[2.5vw] mb-5'>THE COLLEGE OF ENGINEERING IS <span className="text-oran">THE FASTEST GROWING COLLEGE IN THE UNIVERSITY</span> IN TERMS OF STUDENT ENROLMENT.</h1>
                        </div>
                        <div id='list'>
                            <div className='flex gap-3'>
                                <div>
                                    <img src={img} className='list-img' alt="check" /><span className=''>Organised Timetable</span><br/>
                                    <img src={img} className='list-img' alt="check" /><span>Qualified</span><br/>
                                    <img src={img} className='list-img' alt="check" /><span>Dynamic Experiments</span><br/>
                                </div>
                                <div className=''>
                                    <img src={img} className='list-img' alt="check" /><span>World Class Facilities</span><br/>
                                    <img src={img} className='list-img' alt="check" /><span>Available Safety Features</span><br/>
                                    <img src={img} className='list-img' alt="check" /><span>Appropraite Dress-Code</span><br/>
                                </div>
                            </div>
                        </div>
                        <p className='mt-5'>Library facilities are available in form of traditional physical library stocked with 
                            up-to-date books and journals, as well as the e-library with hundreds of 
                            networked computer systems, for students and staff .</p>
                    </div>
                    <div id="image" className='ml-36 rounded w-[70%] bg-oran relative'><img className='w-[60%] absolute left-3 top-2 rounded mb-20 ' src="../../assets/img/ikr.jpg" alt="" /></div>
                </div>
            </section>
            
        </div>
    )
}

export default Overview