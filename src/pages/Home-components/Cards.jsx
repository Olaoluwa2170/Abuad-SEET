import img1 from '../../assets/img/portfolio-1.jpg' 
import img2 from '../../assets/img/Mechanical-Engineering-Jobs.jpg'
import img3 from '../../assets/img/mechatron.jpeg'
import img4 from '../../assets/img/Civil-Enginering.jpg'
import img5 from '../../assets/img/pteng.jpg'
import img6 from '../../assets/img/chhemengr.jpg'
import screw1 from '../../assets/icons/engineer-worker-svgrepo-com.svg'
import screw2 from '../../assets/icons/mechanic-svgrepo-com.svg'
import screw3 from '../../assets/icons/robot-arm-1-svgrepo-com.svg'
import screw4 from '../../assets/icons/building-small-svgrepo-com.svg'
import screw5 from '../../assets/icons/petrol-barrel-svgrepo-com.svg'
import screw6 from '../../assets/icons/chemical-chemistry-education-learning-school-scientist-svgrepo-com.svg'

export const listCourse = [
    {
        Header : 'ELECTRICAL ELECTRONICS ENGINEERING',
        text : 'Electrical engineering is an engineering discipline concerned with the study, design, and application of equipment, devices,',
        text2: 'and systems which use eletricity.'

    },{
        Header : 'MECHANICAL ENGINEERING',
        text : 'Mechanical engineering is one of the broadest engineering disciplines. Mechanical engineers design, develop, build, and test.',
        text2: 'They deal with anything that deals with the dynamics of materials'
    },{
        Header : 'MECHATRONICS ENGINERING',
        text : 'Mechatronics is a multidisciplinary field that refers to the skill sets needed in the contemporary,',
        text2: 'advanced automated manufacturing industry.'
    },{
        Header : 'CIVIL ENGINEERING',
        text : 'Civil engineering is a professional engineering discipline that deals with the design, construction, ',
        text2: 'and maintenance of the physical and naturally built infastructures.'
    },{
        Header : 'PETROLEUM ENGINERRING',
        text : 'Petroleum engineering is a field of engineering concerned with the activities related to the production of Hydrocarbons,',
        text2: 'which can be either crude oil or other natural resources'
    },{
        Header : 'CHEMICAL ENGINERRING',
        text : 'Chemical engineering involves the production and manufacturing of products through chemical processes. This includes designing equipment, systems,',
        text2: ' and processes for refining raw materials and for mixing, chemicals.'
    }
]

export const Card = () => {
    return(<div id="courses" className="grid grid-cols-1 md:grid-cols-3 gap-20 ">
                <CourseBox Header={listCourse[0].Header} text={listCourse[0].text} text2={listCourse[0].text2} img={img1} screw={screw1} />
                <CourseBox Header={listCourse[1].Header} text={listCourse[1].text} text2={listCourse[1].text2} img={img2} screw={screw2}/>
                <CourseBox Header={listCourse[2].Header} text={listCourse[2].text} text2={listCourse[2].text2} img={img3} screw={screw3}/>
                <CourseBox Header={listCourse[3].Header} text={listCourse[3].text} text2={listCourse[3].text2} img={img4} screw={screw4}/>
                <CourseBox Header={listCourse[4].Header} text={listCourse[4].text} text2={listCourse[4].text2} img={img5} screw={screw5}/>
                <CourseBox Header={listCourse[5].Header} text={listCourse[5].text} text2={listCourse[5].text2} img={img6} screw={screw6}/>
                
    </div>)}

const CourseBox = ({Header, text, text2, img, screw}) => {return(
    <div className="box">
            <div className='relative h-[100%]'>
                <img src={img} className="h-[250px] w-full rounded-t-lg" alt="" />
                <div className="absolute hidden md:block md:bottom-44 left-[176px] md:left-36">
                    <div className="w-20 h-20 relative rounded-full bg-slate-100 "><img src={screw} className='w-10 absolute ml-5 mt-5 ' alt="" /></div>
                </div>
                <div className=' w-full flex-col text-center'>
                    <h1 className='font-black md:text-[1.5vw] mt-10'>{Header}</h1>
                    <p className='text-sm mt-2 m-2 mb-5'>{text}<br/>{text2}</p>
                </div>
            </div>
                                                            
    </div>) }   



 