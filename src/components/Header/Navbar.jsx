import Image from 'next/image';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { RiHome5Line, RiFileUploadLine } from 'react-icons/ri';
import { BsCartDash, BsChevronUp, BsChevronDown } from 'react-icons/bs';
import Link from 'next/link';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hideUploadList, setHideUploadList] = useState(true);

  const handleUploadListToggle = () => {
    setHideUploadList((value) => !value);
  };

  const toggleHandler = () => {
    setOpen((value) => !value);
  };
  return (
    <div className=' fixed top-0 left-0 w-full z-10'>
      {/* <div className=''></div> */}
      {/* <div className='bg-nav-gradient backdrop-blur-md px-8 py-7 sm:px-12 lg:px-28 md:flex md:justify-between md:items-center'> */}
      <div className='bg-nav-gradient  backdrop-blur-lg px-8 py-7 relative sm:px-12 lg:px-28 md:flex md:justify-between md:items-center'>
        <div className='flex justify-between items-center z-50'>
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
            {/* HAMBURGER MENU */}
            <div type='button' onClick={toggleHandler} className='md:hidden'>
              {!open && <FiMenu size={16} />}
            </div>
          </div>
        </div>

        {/* Mobile Screen Nav */}
        {open && (
          <div className='absolute top-0 left-0 pl-5 h-screen w-screen z-10 bg-background md:hidden'>
            {open && (
              <div
                type='button'
                onClick={toggleHandler}
                className='flex justify-end m-3'
              >
                <AiOutlineCloseCircle className='' size={16} />
              </div>
            )}
            <nav className=''>
              <ul className='flex flex-col gap-8'>
                <li className=' flex item-center gap-[17px]'>
                  <div className='flex items-center'>
                    <RiHome5Line />
                  </div>
                  <Link
                    href='/'
                    // className={`${
                    //   selectedPage === lowerCasePage ? 'text-blue' : ''
                    // } hover:text-blue-50`}
                    // onClick={() => setSelectedPage(lowerCasePage)}
                  >
                    Home
                  </Link>
                </li>
                <li className=' flex item-center gap-[17px]'>
                  <div className='flex items-center'>
                    <BsCartDash />
                  </div>
                  <Link
                    href='/'
                    // className={`${
                    //   selectedPage === lowerCasePage ? 'text-blue' : ''
                    // } hover:text-blue-50`}
                    // onClick={() => setSelectedPage(lowerCasePage)}
                  >
                    Cart
                  </Link>
                </li>
                <li
                  className='flex item-center flex-col relative'
                  onClick={handleUploadListToggle}
                >
                  <div className='flex  items-center  gap-[17px]'>
                    <RiFileUploadLine fill='white' color='white' />
                    <div className='flex items-center'>
                      <Link
                        href='/'
                        // className={`${
                        //   selectedPage === lowerCasePage ? 'text-blue' : ''
                        // } hover:text-blue-50`}
                        // onClick={() => setSelectedPage(lowerCasePage)}
                      >
                        Upload
                      </Link>
                      <div className='ml-[10px] flex items-center'>
                        {hideUploadList ? <BsChevronDown /> : <BsChevronUp />}
                      </div>
                    </div>
                  </div>
                  {/* SUB LISTS */}
                  {!hideUploadList && (
                    <ul className='pl-8 mt-3.5'>
                      <li className='mb-3'>
                        <Link href='/new-upload'>New Upload</Link>
                      </li>
                      <li>
                        <Link href='/myuploads'>My Uploads</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className=''>
                  <Link
                    href='/sign-in'
                    // className={`${
                    //   selectedPage === lowerCasePage ? 'text-blue' : ''
                    // } hover:text-blue-50`}
                    // onClick={() => setSelectedPage(lowerCasePage)}
                  >
                    Signin
                  </Link>
                </li>
                <li className=''>
                  <Link
                    href='/sign-up'
                    className='px-4 py-2 text-xs border rounded-lg'
                    // className={`${
                    //   selectedPage === lowerCasePage ? 'text-blue' : ''
                    // } hover:text-blue-50`}
                    // onClick={() => setSelectedPage(lowerCasePage)}
                  >
                    Signup
                  </Link>
                </li>
                <li
                  className='flex item-center flex-col relative'
                  onClick={handleUploadListToggle}
                >
                  <div className='flex  items-center  gap-[17px]'>
                    <Image
                      src='/assets/images/person.png'
                      width={24}
                      height={24}
                      alt='user'
                      className='rounded-full'
                    />{' '}
                    <div className='flex items-center'>
                      <Link
                        href='/'
                        // className={`${
                        //   selectedPage === lowerCasePage ? 'text-blue' : ''
                        // } hover:text-blue-50`}
                        // onClick={() => setSelectedPage(lowerCasePage)}
                      >
                        Hi, Muyiwa
                      </Link>
                      <div className='ml-[10px] flex items-center'>
                        {hideUploadList ? <BsChevronDown /> : <BsChevronUp />}
                      </div>
                    </div>
                  </div>
                  {/* SUB LISTS */}
                  {!hideUploadList && (
                    <ul className='pl-8 mt-3.5'>
                      <li className='mb-3'>
                        <Link href='/new-upload'>New Upload</Link>
                      </li>
                      <li>
                        <Link href='/myuploads'>My Uploads</Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        )}

        {/* DESKTOP NAVIGATION */}
        <nav className='hidden md:block'>
          <ul className='flex gap-4 lg:gap-8'>
            <li className=' flex item-center gap-2'>
              <div className='flex items-center'>
                <RiHome5Line />
              </div>
              <Link
                href='/'
                // className={`${
                //   selectedPage === lowerCasePage ? 'text-blue' : ''
                // } hover:text-blue-50`}
                // onClick={() => setSelectedPage(lowerCasePage)}
              >
                Home
              </Link>
            </li>
            <li className=' flex item-center gap-2'>
              <div className='flex items-center'>
                <BsCartDash />
              </div>
              <Link
                href='/'
                // className={`${
                //   selectedPage === lowerCasePage ? 'text-blue' : ''
                // } hover:text-blue-50`}
                // onClick={() => setSelectedPage(lowerCasePage)}
              >
                Cart
              </Link>
            </li>
            <li
              className='flex item-center flex-col relative'
              onClick={handleUploadListToggle}
            >
              <div className='flex  items-center  gap-2'>
                <RiFileUploadLine fill='white' color='white' />
                <div className='flex items-center'>
                  <Link
                    href='/'
                    // className={`${
                    //   selectedPage === lowerCasePage ? 'text-blue' : ''
                    // } hover:text-blue-50`}
                    // onClick={() => setSelectedPage(lowerCasePage)}
                  >
                    Upload
                  </Link>
                  <div className='ml-[10px] flex items-center'>
                    {hideUploadList ? <BsChevronDown /> : <BsChevronUp />}
                  </div>
                </div>
              </div>
              {/* SUB LISTS */}
              {!hideUploadList && (
                <ul className='pl-8 mt-3.5'>
                  <li className='mb-3'>
                    <Link href='/new-upload'>New Upload</Link>
                  </li>
                  <li>
                    <Link href='/myuploads'>My Uploads</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className=''>
              <Link
                href='/sign-in'
                // className={`${
                //   selectedPage === lowerCasePage ? 'text-blue' : ''
                // } hover:text-blue-50`}
                // onClick={() => setSelectedPage(lowerCasePage)}
              >
                Signin
              </Link>
            </li>
            <li className=''>
              <Link
                href='/sign-up'
                className='px-4 py-2 text-xs border rounded-lg'
                // className={`${
                //   selectedPage === lowerCasePage ? 'text-blue' : ''
                // } hover:text-blue-50`}
                // onClick={() => setSelectedPage(lowerCasePage)}
              >
                Signup
              </Link>
            </li>
            <li
              className='flex item-center flex-col relative'
              onClick={handleUploadListToggle}
            >
              <div className='flex  items-center  gap-2'>
                <Image
                  src='/assets/images/person.png'
                  width={24}
                  height={24}
                  alt='user'
                  className='rounded-full'
                />{' '}
                <div className='flex items-center'>
                  <Link
                    href='/'
                    // className={`${
                    //   selectedPage === lowerCasePage ? 'text-blue' : ''
                    // } hover:text-blue-50`}
                    // onClick={() => setSelectedPage(lowerCasePage)}
                  >
                    Hi, Muyiwa
                  </Link>
                  <div className='ml-[10px] flex items-center'>
                    {hideUploadList ? <BsChevronDown /> : <BsChevronUp />}
                  </div>
                </div>
              </div>
              {/* SUB LISTS */}
              {!hideUploadList && (
                <ul className='pl-8 mt-3.5'>
                  <li className='mb-3'>
                    <Link href='/new-upload'>New Upload</Link>
                  </li>
                  <li>
                    <Link href='/myuploads'>My Uploads</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
