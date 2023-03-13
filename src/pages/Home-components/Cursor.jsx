import { listCourse } from './Cards';

import img from '../../assets/icons/Name.svg'
const Cursor = () => {
  

  return (
    <div className="body">
      <div id="cards" className="md:block flex justify-center">        
      <Card head={'Dr Adebolaji'} department={listCourse[0].Header} />
      <Card head={'Dr Adebolaji'} department={listCourse[1].Header} />
      <Card head={'Dr Adebolaji'} department={listCourse[2].Header} />
      <Card head={'Dr Adebolaji'} department={listCourse[3].Header} />
      <Card head={'Dr Adebolaji'} department={listCourse[4].Header} />
      <Card head={'Dr Adebolaji'} department={listCourse[5].Header} />
                        
      </div>
      
    </div>
  );
}

export default Cursor;


const Card = ({head, department}) => {

  const handleOnMouseMove = e => {
    for (const card of document.getElementsByClassName("card")){
        const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
    
  };

  return(
    <div onMouseMove={handleOnMouseMove} className="card shadow-lg">
            
    <div className="card-content">
    <div className='flex justify-center'>
      <div id='pic-holder' className='bg-white w-24 h-24 border-2 border-gray-900 rounded-full mt-5 '> </div>        
    </div>
      <h1 className='flex justify-center text-center m-5 text-gray-300 font-bold'>HEAD OF {department}</h1>
      <span className='flex justify-center text-center gap-2 text-gray-700 bg-indigo-200 rounded-lg m-2'><img src={img} className='w-5' alt="" /> <p>{head}</p></span>
    </div>
    <div className="card-border"></div>
</div>
  )
}
// <p>{listCourse.map((item, index)=>{item[index].Header.toLowerCase()})}</p>
// for (i in ListCourse) { return()}
