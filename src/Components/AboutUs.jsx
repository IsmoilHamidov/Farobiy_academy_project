import React from 'react'
import like from '../assets/like.png'
import star from '../assets/medal-star.png'
import Frame1 from '../assets/Frame1.png'
import Frame2 from '../assets/Frame2.png'


function AboutUs() {
  return (
    <div className='mt-12 md:mt-20' id='AboutUs'>
      <h3 className="text-title-size font-semibold leading-normal text-lighter-black mb-8">
        Biz haqimizda
      </h3>

        <div className='flex flex-col md:flex-row justify-between h-auto gap-x-8'>
            <div className='lg:w-2/5 flex-col grid content-between'>
                <div data-aos="fade-down"
                  className='bg-[#F1E2C1] p-8 md:h-[16rem] lg:h-auto  rounded-[40px]'>
                    <img src={like} alt="like" />
                    <p className='lg:w-w-3/5 xl:w-10/12 text-[1.3rem] leading-8 mt-5
                     text-lighter-black lg:mt-9'>Farobiy IT Academy - da biz oddiy ko'rinadigan yaratish harakati odamlar hayotida o'sish.</p>
                </div>
                <div  data-aos="fade-up" className='hidden lg:block'>
                    <img src={Frame2} className='w-full h-full ' alt="about_img" />
                </div>
            </div>

            <div 
             className='lg:w-3/4 xl:w-3/5 grid content-between mt-6 md:mt-0'>
                <div data-aos="fade-down" className='hidden lg:block'>
                    <img src={Frame1} className='w-full h-[28rem] mb-7' alt="about_img" />
                </div>
                <div   data-aos="fade-up"
                className='bg-[#D8DBFB] md:h-[16rem] lg:h-auto p-8 lg:pb-16  rounded-[40px]'>
                    <img src={star} alt="like" />
                    <p className=' lg:w-8/12 text-[1.3rem] leading-8
                    mt-5 text-lighter-black  lg:mt-9'>Farobiy IT Academy - bu illyustratsiya, dizayn, fotografiya, video, freelancing va boshqa mavzularda ijodiy va qiziquvchan.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
