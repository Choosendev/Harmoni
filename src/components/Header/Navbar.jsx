import Image from 'next/image';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import PageLink from './PageLink';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleHandler = () => {
    setOpen((value) => !value);
  };
  return (
    <div>
      <div className='px-8 py-7 relative'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2'>
            <Image
              src='/assets/images/kulture-logo.png'
              alt='kulture'
              height={24}
              width={17}
            />
            <p>Kulture</p>
          </div>
          <div>
            {/* HAMBURGER MENU AND CLOSE */}
            <div type='button' onClick={toggleHandler}>
              {!open && <FiMenu size={16} />}
            </div>
          </div>
        </div>

        {/* Mobile Screen Nav */}
        {open && (
          <div className='absolute top-0 left-0 pl-5 h-screen w-screen z-10 bg-background'>
            {open && (
              <div
                type='button'
                onClick={toggleHandler}
                className='flex justify-end m-3'
              >
                <AiOutlineCloseCircle className='' size={16} />
              </div>
            )}
            <nav>
              <ul className='flex flex-col gap-8'>
                <li className=''>
                  <PageLink
                    class=''
                    page='Home'
                    //   selectedPage={selectedPage}
                    //   setSelectedPage={setSelectedPage}
                  />
                </li>
                <li className=''>
                  <PageLink
                    class=''
                    page='About'
                    //   selectedPage={selectedPage}
                    //   setSelectedPage={setSelectedPage}
                  />
                </li>
                <li className=''>
                  <PageLink
                    class=''
                    page=' Portfolio'
                    //   selectedPage={selectedPage}
                    //   setSelectedPage={setSelectedPage}
                  />
                </li>
                <li className=''>
                  <PageLink
                    page='Contact'
                    //   selectedPage={selectedPage}
                    //   setSelectedPage={setSelectedPage}
                  />
                </li>
              </ul>
            </nav>
          </div>
        )}

        {/* Desktop Screen Nav */}
        <nav className='hidden'>
          <ul className=''>
            <li className=''>
              <PageLink
                class=''
                page='Home'
                // selectedPage={selectedPage}
                // setSelectedPage={setSelectedPage}
              />
            </li>
            <li className=''>
              <PageLink
                class=''
                page='About'
                // selectedPage={selectedPage}
                // setSelectedPage={setSelectedPage}
              />
            </li>
            <li className=''>
              <PageLink
                class=''
                page=' Portfolio'
                // selectedPage={selectedPage}
                // setSelectedPage={setSelectedPage}
              />
            </li>
            <li className=''>
              <PageLink
                page='Contact'
                // selectedPage={selectedPage}
                // setSelectedPage={setSelectedPage}
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
