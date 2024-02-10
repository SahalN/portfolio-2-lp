/** @format */

export default function Header() {
  return (
    <>
      <div className='relative flex flex-row justify-between items-center'>
        <div className='absolute -top-10 -left-40 -z-10'>
          <img src='/images/design.png' alt='' />
        </div>
        <div className='flex justify-start'>
          <img src='/images/Logo.png' alt='' />
        </div>
        <div>
          <nav>
            <ul className='flex flex-row gap-8 '>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Skills</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>Testimonial</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <button className='outline-2 border-black '>Download</button>
        </div>
      </div>
    </>
  );
}
