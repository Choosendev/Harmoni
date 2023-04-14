import Image from 'next/image';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import PageLink from './PageLink';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleHandler = () => {
    setOpen((value) => !value);
  };
  return (
    <div>
      <div>
        <div className='flex justify-between items-end'>
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
              {!open ? (
                <FiMenu size={16} />
              ) : (
                <AiOutlineClose className='' size={16} />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Screen Nav */}
        {open && (
          <nav className=''>
            <ul className=''>
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
        )}

        {/* Desktop Screen Nav */}
        <nav className=''>
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
