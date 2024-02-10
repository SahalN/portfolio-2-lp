/** @format */

export default function LandingPage() {
  return (
    <>
      <div className='flex flex-row py-20 items-center'>
        <div className='flex-1 flex flex-col gap-y-4'>
          <div className=''>
            <h1 className='font-semibold text-6xl leading-snug py-2 '>
              I have{" "}
              <span className='font-bold text-[#0DB760]'>Creative Design</span>{" "}
              Experience
            </h1>
            <p className='font-normal text-base py-5'>
              I’m Tanvir, a creative Product Designer. I’ve been helping
              businesses to solve their problems with my design for 2 years.
            </p>
          </div>
          <div className='flex flex-row gap-4 items-center'>
            <div>
              <button className='bg-[#0DB760] p-3 rounded-md text-base font-medium text-white'>
                Contact Me
              </button>
            </div>
            <div>
              <button className='text-base font-medium'>View Portfolio</button>
            </div>
          </div>
        </div>
        <div className='flex-1 flex justify-end'>
          <img src='/images/photoOne.png' alt='' />
        </div>
      </div>
      {/*  */}
      <div className='flex flex-row text-left justify-between py-44'>
        <div className=''>
          <h1 className='text-5xl text-[#0DB760] pb-2 font-semibold'>80+</h1>
          <p className='text-[28px] font-normal'>Satisfied clients</p>
        </div>
        <div className='border-r-2 border-[#0DB760]'></div>
        <div className=''>
          <h1 className='text-5xl text-[#0DB760] pb-2 font-semibold '>200+</h1>
          <p className='text-[28px] font-normal'>Projects completed</p>
        </div>
        <div className='border-l-2 border-[#0DB760]'></div>
        <div className=' '>
          <h1 className='text-5xl text-[#0DB760] pb-2 font-semibold'>99+</h1>
          <p className='text-[28px] font-normal'>Reviews given</p>
        </div>
      </div>
      {/*  */}
      <div className='pt-10 pb-44 flex flex-row'>
        <div className='flex flex-col gap-4 pr-5'>
          <div>
            <img src='/images/mySkills.png' alt='' />
            <h1 className='font-semibold text-[40px]'>
              Why Hire Me For Your Next{" "}
              <span className='text-[#0DB760]'>Project?</span>
            </h1>
          </div>
          <div>
            <p className='font-normal text-base'>
              I’m specialist in UI/UX Designe. My passion is designing & solving
              problems through user experience and research.
            </p>
          </div>
          <div>
            <button className='bg-[#0DB760] p-3 px-6 text-white rounded-md'>
              Hire Me
            </button>
          </div>
        </div>
        <div className='grid grid-cols-2'>
          <div>
            <img src='/images/diamond-outline.png' alt='' className='pb-2' />
            <h1 className='font-semibold text-xl'>Visual Design</h1>
            <p className='text-sm'>
              Create user interface design with unique & modern ideas
            </p>
          </div>
          <div></div>
          <div></div>
          <div>
            <img src='/images/pulse-outline.png' alt='' className='pb-2' />
            <h1 className='font-semibold text-xl'>Design Prototype</h1>
            <p className='text-sm'>
              Create advance design prototype with Figma apps.
            </p>
          </div>
          <div>
            <img src='/images/school-outline.png' alt='' className='pb-2' />
            <h1 className='font-semibold text-xl'>UX Research</h1>
            <p className='text-sm'>
              Create digital user products with updated ideas
            </p>
          </div>
          <div></div>
        </div>
      </div>
      {/*  */}
      <div className='pt-10 pb-44 flex flex-row'>
        <div className='flex flex-col gap-4 pr-5'>
          <div>
            <img src='/images/portfolio.png' alt='' />
            <h1 className='font-semibold text-[40px]'>
              My Creative Works Latest{" "}
              <span className='text-[#0DB760]'>Projects</span>
            </h1>
          </div>
          <div>
            <p className='font-normal text-base'>
              I have selected and mentioned here some of my latest projects to
              share with you.
            </p>
          </div>
          <div>
            <button className='bg-[#0DB760] p-3 px-6 text-white rounded-md'>
              Hire Me
            </button>
          </div>
        </div>
        <div className='flex flex-row w-full '>
          <div className='pr-4'>
            <img src='/images/lp1.png' alt='' />
          </div>
          <div className='pr-4'>
            <img src='/images/lp2.png' alt='' />
          </div>
          <div className='pr-4 '>
            <img src='/images/lp3.png' alt='' />
          </div>
        </div>
      </div>
      {/*  */}
      <div className='flex flex-col gap-4 pr-5'>
        <div>
          <img src='/images/reviews.png' alt='' />
          <h1 className='font-semibold text-[40px]'>
            Our Customer Say Something{" "}
            <span className='text-[#0DB760]'>About Us</span>
          </h1>
        </div>
        <div>
          <p className='font-normal text-base'>
            I have selected and mentioned here some of my latest projects to
            share with you.
          </p>
        </div>
        <div>
          <button className='bg-[#0DB760] p-3 px-6 text-white rounded-md'>
            Hire Me
          </button>
        </div>
        <div className='flex flex-row justify-between gap-4 pt-4'>
          <div>
            <img src='/images/stars.png' alt='' />
            <p className='pt-3'>
              We will also facilitate the business marketing of these products
              with our SEO experts so that they become a ready to use website &
              help sell product from company
            </p>
            <div className='flex flex-row gap-x-4 pt-3 items-center'>
              <div>
                <img src='/images/pp1.png' alt='' />
              </div>
              <div>
                <h3 className='font-semibold text-[#11142D]'>Amir Uddin</h3>
                <p>UX Designer </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src='/images/stars.png' alt='' />
              <p className='pt-3'>
                We will also facilitate the business marketing of these products
                with our SEO experts so that they become a ready to use website
                & help sell product from company
              </p>
              <div className='flex flex-row gap-x-4 pt-3 items-center'>
                <div>
                  <img src='/images/pp2.png' alt='' />
                </div>
                <div>
                  <h3 className='font-semibold text-[#11142D]'>Salim Ahmed</h3>
                  <p>UI Designer </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src='/images/stars.png' alt='' />
              <p className='pt-3'>
                We will also facilitate the business marketing of these products
                with our SEO experts so that they become a ready to use website
                & help sell product from company
              </p>
              <div className='flex flex-row gap-x-4 pt-3 items-center'>
                <div>
                  <img src='/images/pp3.png' alt='' />
                </div>
                <div>
                  <h3 className='font-semibold text-[#11142D]'>Guy Hawkins</h3>
                  <p>UX Designer </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='flex flex-col py-44'>
        <div className='flex flex-col gap-2 items-center p-2'>
          <div className=''>
            <img src='/images/contact.png' alt='' />
          </div>
          <div className='text-center'>
            <h1 className='font-semibold text-[40px] '>
              Let’s Discuss Your <span className='text-[#0DB760]'>Project</span>
            </h1>
            <p>
              Let’s make something new, different and more meaningful or make
              thing more visual or conceptual
            </p>
          </div>
        </div>
        <div className='flex flex-row gap-8 '>
          <div className='flex flex-col gap-8 pt-4 basis-1/3'>
            <div className='flex flex-row gap-5 items-center'>
              <div>
                <img src='/images/call.png' alt='' />
              </div>
              <div>
                <p className='text-[#92929D] text-base'>Call me</p>
                <p className='text-[#11142D] font-medium'>+8801613968687</p>
              </div>
            </div>
            <div className='flex flex-row gap-5 items-center'>
              <div>
                <img src='/images/email.png' alt='' />
              </div>
              <div>
                <p className='text-[#92929D] text-base'>Email me</p>
                <p className='text-[#11142D] font-medium'>
                  ahmedtanvir8687@gmail.com
                </p>
              </div>
            </div>
            <div className='flex flex-row gap-5 items-center'>
              <div>
                <img src='/images/address.png' alt='' />
              </div>
              <div>
                <p className='text-[#92929D] text-base'>Address</p>
                <p className='text-[#11142D] font-medium'>
                  Zakigonj, Sylhet, Bangladesh.
                </p>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 place-items-stretch gap-x-8 basis-2/3'>
            <div>
              <input type='text' />
            </div>
            <div>
              <input type='text' />
            </div>
            <div>
              <input type='text' />
            </div>
            <div>
              <input type='text' />
            </div>
            <div>
              <input type='text' />
            </div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
          </div>
        </div>
      </div>
    </>
  );
}
