import img from '../../assets/icons/house-svgrepo-com.svg'
import img1 from '../../assets/icons/about.svg' 
import img2 from '../../assets/icons/contact-svgrepo-com.svg'
import img3 from '../../assets/icons/service.svg'
import img4 from '../../assets/icons/enrol.svg'

import icon1 from '../../assets/icons/website-svgrepo-com.svg' 
import icon2 from '../../assets/icons/social-network-network-svgrepo-com.svg'
import icon3 from '../../assets/icons/shopping-svgrepo-com.svg'

import obj1 from '../../assets/icons/location-svgrepo-com.svg' 
import obj2 from '../../assets/icons/phone-svgrepo-com.svg'
import obj3 from '../../assets/icons/mail-6-svgrepo-com.svg'

import item1 from "../../assets/icons/twitter-svgrepo-com.svg"
import item2 from "../../assets/icons/linkedin-svgrepo-com.svg"
import item3 from "../../assets/icons/instagram-1-svgrepo-com.svg"
import item4 from "../../assets/icons/facebook-svgrepo-com.svg"

const Footer = () => {
    return(
        <div>
            <div className="w-full bg-[#282F3C] flex justify-between ">
                <div className="m-5"><img src="../../assets/img/Logo-ABUAD-1-1.png" alt="" /></div>
                <div className="m-5">
                    <div className="flex gap-2">
                        <div className="">
                            <input id="member_email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                            focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                            dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="email_address" aria-label="Email Address" placeholder="Mail"
                            required="" type="email"></input>
                        </div>
                        <button data-element="submit" class="">
                            <span class="px-5 py-3 text-sm font-medium text-center text-white
                             bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-800
                            focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-[#111827] md:flex relative justify-between ">
                    <div className="md:w-[600px] border-b border-oran">
                        <p className="text-white break-words md:m-5 md:p-0 p-5 text-sm">Mechatronics is a novel and innovative programme 
                            offered in only a few institutions at present, though it is an
                             indispensable one in modern engineering and technology. It is an interdisciplinary 
                             programme encompassing mechanical, electrical, electronics, computer and control 
                             engineering disciplines. Virtually all modern machineries, equipment and 
                             instrumentation are combinations of these engineering disciplines, ranging
                              from automobiles, aviation, military hardware, satellite 
                            and space technology, robotics, to computer games and toys, etc.</p>
                    </div>
                    <div class="md:block hidden absolute left-1/2 -ml-0.5 md:w-0.5 md:h-full w-full bg-oran"></div>
                    <div className="md:flex gap-16 mr-5 mt-5">
                        <ul className=''>
                        <div className="text-sm text-gray-300 md:mt-0 mt-5 md:ml-0 ml-5">
                            <li className="font-black text-oran mb-3">Quick Link</li>
                            
                                <li><a href=""> <span><img src={img} className="w-5 mr-2 inline" alt="bb" /></span>Home</a></li>
                                <li><a href=""><span><img src={img1} className="w-5 inline mr-2" alt="bb" /></span>About</a></li>
                                <li><a href=""><span><img src={img2} className="w-5 inline mr-2" alt="bb" /></span>Contact</a></li>
                                <li><a href=""><span><img src={img3} className="w-5 inline mr-2" alt="bb" /></span>Service</a></li>
                                <li><a href=""><span><img src={img4} className="w-5 inline mr-2" alt="bb" /></span>Enroll</a></li>
                            </div>
                        </ul>
                        <ul className='text-gray-300 text-sm '>
                        
                        <div className='md:mt-0 mt-5 md:ml-0 ml-5'>
                            <li className="font-black mb-3 md:mr-10 text-oran">Other Link</li>
                            
                                <li><img src={icon1} className="w-5 mr-2 inline" alt="" /><a href="#">Our Main Website</a></li>
                                <li><img src={icon2} className="w-5 mr-2 inline" alt="" /><a href="#">Social Media</a></li>
                                <li><img src={icon3} className="w-5 mr-2 inline" alt="" /><a href="#">Abuad Shooping</a></li>
                            </div>
                        </ul>
                        <ul className=' text-gray-300 text-sm'>
                            <div className='md:mt-0 mt-5 md:ml-0 ml-5'>
                                <div>
                                    <li><img src={obj1} className="w-5 mr-2 inline" alt="" />Afe-Babalola Ado-ekiti, Ekiti State.</li>
                                    <li><img src={obj2} className="w-5 mr-2 inline" alt="" />+012 345 67890</li>
                                    <li><img src={obj3} className="w-5 mr-2 inline" alt="" />Afe-Babalola@gmail.com</li>
                                </div>
                                <div className='flex gap-5 mt-4'>
                                    <li><a href=""><img src={item1} className="w-10" alt="" /></a></li>
                                    <li><a href=""><img src={item2} className="w-10" alt="" /></a></li>
                                    <li><a href=""><img src={item3} className="w-10" alt="" /></a></li>
                                    <li><a href=""><img src={item4} className="w-10" alt="" /></a></li>
                                </div>
                            </div>
                        </ul>
                    </div>
            </div>
        </div>
    )
}


export default Footer