import Button from '@src/components/Button';
import ButtonOutline from '@src/components/Button/ButtonOutline';

const BuyingOptions = () => {
  return (
    <div className='my-10'>
      <h2 className='heading-2 mb-6'>Buying Options</h2>
      <div>
        <div className='p-2 bg-[#1B1B1B] max-w-[160px] tracking-tighter flex flex-col gap-2'>
          <p className='tracking-tighter'>Basic WAV LEASE</p>
          <p className='text-sm'>USD 70</p>
          <p className='text-xs'>MP3 AND WAV</p>
        </div>
      </div>

      {/* Terms of Usage */}
      <div className='mt-8 flex flex-col gap-9'>
        <div>
          <h5>Terms of Usage</h5>
          <p>Total:</p>
          <p>USD 10,000</p>
        </div>
        <div className='text-left w-60 flex flex-col gap-9 md:flex-row md:min-w-[470px]'>
          <Button buttonType='submit' classname='w-full'>
            Add to cart
          </Button>
          <ButtonOutline page='#' classname='w-full'>
            Continue Shopping
          </ButtonOutline>
        </div>
      </div>
    </div>
  );
};

export default BuyingOptions;
