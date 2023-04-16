import Image from 'next/image';
import Link from 'next/link';
import Button from '@src/components/Button';
import { beatCardData } from '@src/utils/data';

function BeatsList() {
  return (
    <div className='w-full pt-7'>
      <div className='flex justify-between mb-8'>
        {/* BEATS FILTER */}
        <div className='flex  justify-between'>
          <Link href='#/'>All</Link>
          <Link href='#/'>Afro pop</Link>
          <Link href='#/'>R&B</Link>
          <Link href='#/'>world</Link>
          <div className=''>
            <select name='' id='' placeholder='Filter'>
              <option>Filter</option>
              <option>Afro pop</option>
              <option>Gospel</option>
              <option>Fuji</option>
              <option>Juju</option>
              <option>Hip hop</option>
              <option>Blues</option>
              <option>Reggae</option>
              <option>Apala</option>
            </select>
          </div>
        </div>
      </div>
      <div className='flex flex-col px-[26px] py-4 bg-[#1b1b1b'>
        {beatCardData.map((card, index) => (
          <div className='rounded-lg mt-4  bg-transparent' key={index}>
            <div className='flex justify-between items-center text-xs mb-4'>
              <div>
                <Image
                  width={52}
                  height={52}
                  src={card.personimg}
                  alt='image'
                  className=''
                />
              </div>
              <h3 className=''> {card.name} </h3>
              <p className=''>@{card.tag} </p>
              <div className=''></div>
              <p> {card.time} Ago</p>
            </div>

            <div className=''>
              <div className='w-full'>
                <div className=''>
                  <Image
                    width={52}
                    height={52}
                    src={card.cardimg}
                    alt='Snow'
                    className=''
                  />
                </div>
                <div className=''>
                  <Image
                    width={52}
                    height={52}
                    src={card.cardplay}
                    alt='videocircle'
                  />
                </div>
              </div>
              <div className=''>
                <div className=''>
                  <div className=''>
                    <Image
                      width={52}
                      height={52}
                      src={card.cardplay}
                      alt='videocircle'
                    />
                  </div>{' '}
                  <div>
                    <h4>{card.cardname}</h4>
                  </div>
                </div>
                <div className=''>
                  <p>
                    Beat by {card.name} @{card.tag}
                    <br />
                    released on {card.released}
                  </p>
                </div>

                <div className=''>
                  <p className=''>{card.amount} </p>{' '}
                  <Button page='review'>BUY NOW</Button>
                </div>
              </div>
            </div>

            <div className=''>
              <div className=''>
                <div className=''>
                  <Image
                    width={52}
                    height={52}
                    src={card.shares}
                    alt='image'
                    className=''
                  />
                </div>

                <div className=''>
                  <p>share</p>
                </div>
              </div>

              <div className=''>
                <div className=''>
                  <Image
                    width={52}
                    height={52}
                    src={card.saves}
                    alt='image'
                    className=''
                  />
                </div>
                <div className=''>
                  <p>save for later</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BeatsList;
