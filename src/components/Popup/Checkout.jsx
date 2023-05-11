import React from 'react';
import { useState } from 'react';
import { Formik } from 'formik';
// import { Icon } from '@src/components/Icons/Icon';
import ControlledModal from '@src/components/Modal/ControlledModal';
import InputBox from '@src/components/InputBox';
import TextArea from '@src/components/InputBox/TextArea';

const Checkout = ({ close, isEdit, action, data, loader, id }) => {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
    isEdit && close();
  };

  const handleSubmit = async (values) => {
    closeModal();
  };

  return (
    <div className=''>
      <div
        className='bg-primary hover:bg-white hover:border hover:border-primary hover:text-primary px-3 py-2 text-white rounded-lg cursor-pointer'
        onClick={() => setOpen((o) => !o)}
      >
        CHECKOUT
      </div>
      <ControlledModal open={open} closeModal={closeModal}>
        <div className='bg-grey-bg max-h-[90vh] overflow-auto'>
          {/* <div className='flex pl-10 pr-6 justify-between items-center sticky z-50 top-0 bg-white border-b border-b-grey-input'>
            <p className='text-[16px] font-semibold'>
              {isEdit ? 'Edit' : 'New'} Ticket
            </p>
            <div
              onClick={() => (isEdit ? close() : closeModal())}
              className='justify-end flex cursor-pointer gap-2 items-center'
            >
              <div className='m-5'>
                <Icon width='24' height='24' id='close-red-icon' />
              </div>
            </div>
          </div> */}
          <div className='px-10'>
            <Formik onSubmit={handleSubmit} enableReinitialize>
              {({
                values,
                setFieldTouched,
                isValid,
                handleSubmit,
                setFieldValue,
                errors,
              }) => (
                <>
                  <InputBox
                    placeholder='Seyi'
                    label='Customer Name'
                    name='customer_name'
                    value={values?.first_name}
                    isValid={values?.first_name && !errors?.first_name}
                    setFieldTouched={setFieldTouched}
                  />
                  <InputBox
                    placeholder='sbryan@gmail.com'
                    label='Email'
                    name='email'
                    value={values?.email}
                    setFieldTouched={setFieldTouched}
                    isValid={values?.last_name && !errors?.last_name}
                  />
                  <InputBox
                    placeholder='Payment issues'
                    label='Complaint'
                    name='complaint'
                    value={values?.email}
                    isValid={values?.email && !errors?.email}
                    setFieldTouched={setFieldTouched}
                  />
                  <InputBox
                    placeholder='Pending'
                    label='Status'
                    name='status'
                    value={values?.email}
                    isValid={values?.email && !errors?.email}
                    setFieldTouched={setFieldTouched}
                  />
                  <TextArea
                    placeholder='No file chosen'
                    label='Description'
                    name='description'
                    value={values?.email}
                    isValid={values?.email && !errors?.email}
                    setFieldTouched={setFieldTouched}
                  />
                  <div className='mt-4'>
                    <label className='text-[14px] leading-[22.4px] text-grey-label'>
                      Attachment
                    </label>
                    <div className='flex gap-4 mt-1 items-center justify-center relative md:justify-start w-full md:w-auto'>
                      <input
                        type='file'
                        placeholder='No file chosen'
                        className='pl-[14px] py-2 text-[16px] w-full md:w-[400px] border border-border rounded-lg '
                      />
                    </div>
                    <div className='text-[12px] text-grey-text text-left flex gap-1 mt-2 font-normal '>
                      Support file is jpg, pdf and must not be more than 200mb
                    </div>
                  </div>
                  <div className='flex gap-4 mt-[72px] pb-[38px]'>
                    <div
                      className='text-primary px-3 py-2 bg-white border border-primary rounded-xl cursor-pointer'
                      onClick={closeModal}
                    >
                      Cancel
                    </div>
                    <div
                      className={`px-3 py-2  rounded-xl bg-primary cursor-pointer text-white`}
                      disabled={!isValid || !values?.email}
                      onClick={handleSubmit}
                    >
                      Create Ticket
                    </div>
                  </div>
                </>
              )}
            </Formik>
          </div>
        </div>
      </ControlledModal>
    </div>
  );
};

export default Checkout;
