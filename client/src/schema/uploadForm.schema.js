import * as Yup from 'yup';

export const initialUploadValues = {
  producer: '',
  nameofbeat: '',
  genre: '',
  price: '',
};

export const UploadSchema = Yup.object().shape({
  producer: Yup.string().required('producer name is required'),
  nameofbeat: Yup.string().required('The Name of Beat is required'),
  price: Yup.string()
    .required('Price is required')
    .min(2, 'Price must be at least 2 characters')
    .max(20, 'Price must not exceed 20 characters'),
});
