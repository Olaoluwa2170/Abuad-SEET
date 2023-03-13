import img1 from '../../assets/img/team-1.jpg';
import location from '../../assets/icons/location-svgrepo-com.svg';
import name from '../../assets/icons/user-2-svgrepo-com (1).svg'
import link from '../../assets/icons/link-svgrepo-com.svg'
import mail from '../../assets/icons/mail-svgrepo-com.svg'
import word from '../../assets/icons/menu.svg'



const Lecturer = () => {
    return (
        <div className='mt-20'>
            <h1 className='overview'>Meet Our Highly Esteemed Head Of Deparments</h1>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-5 m-5 bg-slate-100 p-5 rounded">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
            </div>
        </div>
    )
}



const Card = () => {
    return (
      <div className="shadow-lg relative">
       <div className='flex justify-center items-center'><img src={img1} alt="" className=" " /></div>
        <div>
          <h1 className="flex text-gray-700 mt-3 justify-center mb-2 text-2xl font-black font-fatface">
            HOD
          </h1>
          <hr />
          <div className="text-gray-700 text-sm m-5 border border-oran shadow-lg rounded p-1">
            <p className="mt-2">
              <span>
                <img src={link} className="w-5 mr-2 inline" alt="v" />
              </span>
              <a href="">@name.com</a>
            </p>
            <p className="mt-2">
              <span>
                <img src={name} className="w-5 mr-2 inline" alt="v" />
              </span>
              Babalola Elisha
            </p>
            <p className="mt-2">
              <span>
                <img src={location} className="w-5 mr-2 inline" alt="v" />
              </span>
              Ogun State
            </p>
            <p className="mt-2">
              <span>
                <img src={mail} className="w-5 mr-2 inline" alt="v" />
              </span>
              mail@mail.com
            </p>
            <p className="mt-2">
              <span>
                <img src={word} className="w-5 mr-2 inline" alt="v" />
              </span>
              Motto: Share Love
            </p>
          </div>
        </div>
      </div>
    );
  };
  

export default Lecturer