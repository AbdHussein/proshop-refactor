/* eslint-disable @typescript-eslint/ban-types */
import * as Yup from 'yup';

export interface IschemaValidationLogin {
  email: string;
  password: string;
  ischeckbox?: boolean;
}

export const schemaValidationLogin =
  (): Yup.SchemaOf<IschemaValidationLogin> => {
    return Yup.object().shape({
      email: Yup.string()
        .email('it should be correct email')
        .min(5, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required email'),
      password: Yup.string().min(4, 'Too Short!').required('Required'),
      ischeckbox: Yup.boolean().optional(),
    });
  };

export interface ISchemaValidationSuginup {
  email: string;
  name: string;
  password: string;
  passwordConfirmation: string;
}

export const schemaValidationSignUp =
  (): Yup.SchemaOf<ISchemaValidationSuginup> => {
    return Yup.object().shape({
      email: Yup.string()
        .email('it should be correct email ')
        .min(5, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required email'),
      name: Yup.string()
        .required('Name is a required field')
        .min(3, 'Name must be at least 3 characters'),
      password: Yup.string()
        .min(4, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

      /**
         * passwordConfirm: Yup.mixed().test('match', 'Passwords do not match', function (password) {
        return password === this.parent.passwordConfirm
      }).required('Password confirm is required')
         */
      passwordConfirmation: Yup.mixed()
        .test('match', 'Passwords do not match', function (password) {
          return password === this.parent.passwordConfirmation;
        })
        .required('Password confirm is required'),
    });
  };

export const updateProfileSchema = Yup.object({
  name: Yup.string().required('Please enter a name'),
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Please enter an email'),
  password: Yup.string().min(6),
  passwordConfirmation: Yup.string()
    .min(6)
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export type updateProfileSchemaType = Yup.InferType<typeof updateProfileSchema>;

export interface IShippingSchema {
  country: string;
  city: string;
  zip: string;
  address: string;
}
export const ShippingSchema = (): Yup.SchemaOf<IShippingSchema> => {
  return Yup.object().shape({
    country: Yup.string().required('Please enter country name'),
    city: Yup.string().required('Please enter city name'),
    zip: Yup.string().required('Please enter your address'),
    address: Yup.string().required('Please enter your address'),
  });
};

export interface IAddProductSchema {
  id?: string;
  images: File[] | string[];
  categories: string | string[];
  name: string;
  brand: string;
  countInStock: string | number;
  description: string;
  price: string | number;
  discount:string | number;
  colors?: string[];
}

export const AddProductSchema =
    Yup.object().shape({
    id: Yup.string().optional(),
    images: Yup.array()
        .of(Yup.string())
        .nullable()
        .length(1, "At least one Image is required"),
    name: Yup.string().required('Please enter product name'),
    brand: Yup.string().required('Please enter product brand'),
    description: Yup.string()
        .required('Please enter product description'),
        // .max(200, 'Max 200 Char'),
    countInStock: Yup.string()
        .required('Please enter product count In Stock'),
    price: Yup.string().required('Please enter product price'),
    colors: Yup.array().required('Please enter product colors'),
    categories: Yup.array().required('Please enter product categories'),
  });

