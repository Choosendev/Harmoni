import Button from '@src/components/Button';
import Image from 'next/image';
// import { beatCardData } from '@src/utils/data';
import { AiOutlinePlayCircle, AiOutlineShareAlt } from 'react-icons/ai';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import ListWrapper from './ListWrapper';
import { RiDeleteBinLine } from 'react-icons/ri';

function BeatList() {
  return (
    <section id='beat-list' className='w-full'>
      {/* FILTER AND CARD LISTS */}
      <div>
        {/* FILTER */}
        <div>
          {/* HORIZONTAL LIST TO FILTER GENRE */}
          <ul className='flex justify-between items-center mb-12'>
            <li>All</li>
            <li>Afro-beats</li>
            <li>R&B</li>
            <li>
              <select placeholder='Filter' className='text-black'>
                <option value=' '>Filter</option>
              </select>
            </li>
          </ul>
        </div>
        {/* CARD LISTS */}
        <ListWrapper>
          {/* HORIZONTAL LISTS SHOWING BEATS OWNER DETAILS */}
          <div className='flex justify-between items-center mb-16'>
            <div className='rounded-full'>
              <Image
                src='/assets/images/person.png'
                width={52}
                height={52}
                alt='producer'
                className='rounded-full'
              />
            </div>
            <p>Mariam</p>
            <p>@drewmagic</p>
            <p>2 hrs ago</p>
          </div>

          {/* CARD BACKGROUND  */}
          <div
            className='relative bg-cover bg-center h-64 mb-20'
            style={{
              backgroundImage: `url(${'/assets/images/beat-card-bg.png'})`,
            }}
          >
            <div className='absolute flex gap-[18px] left-6 bottom-6'>
              <div className='flex items-center'>
                <AiOutlinePlayCircle width={20} height={20} />
              </div>
              <p>Wintspread</p>
            </div>
          </div>

          {/* PRICE AND CTA BUTTON */}
          <div className='flex justify-between items-center mb-5'>
            <p>USD 150</p>
            <Button page='cart'> BUY NOW</Button>
            <button>
              <RiDeleteBinLine width={24} color='red' />
            </button>
          </div>

          {/* CARD FOOTER */}
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-5'>
              <div>
                <AiOutlineShareAlt />
              </div>
              <p>Share</p>
            </div>
            <div className='flex items-center gap-5'>
              <div>
                {' '}
                <MdOutlineFavoriteBorder />{' '}
              </div>
              <p>Save for later</p>
            </div>
          </div>
        </ListWrapper>
        <div className='text-center mt-6'>
          <button>...Load more</button>
        </div>
      </div>
    </section>
  );
}

export default BeatList;
