import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, PathNavigate } from '../../components';
import { ProductContainer } from './style';
import {
  AddProductSchema as validationSchema,
  IAddProductSchema,
} from '../../utils/helper/validation';
import ProductImages from './Sections/ProductImages';
import { Button } from '../../components/Button/ButtonStyle';
import ProductDetails from './Sections/ProductDetails';
import { AppState } from '../../redux/store';
import { TAllActionProduct } from '../../redux/Product/type';
import { addProduct, updateProduct } from '../../redux/Admin/action';
import { getAlCategory, getProductById } from '../../redux/Product/action';

function NewProduct() {
  const { id } = useParams<{ id?: string }>();
  const dispatch =
    useDispatch<ThunkDispatch<AppState, any, TAllActionProduct>>();
  const allCategory = useSelector(
    (state: AppState) => state.product.allCategory,
  );
  const product = useSelector(
    (state: AppState) => state.product.getProductById,
  );
  const { categories } = allCategory;

  useEffect(() => {
    dispatch(getAlCategory());
    if (id) {
      dispatch(getProductById(id));
    }
  }, []);

  const navigation = useNavigate();

  const initialValues: IAddProductSchema = {
    id: product.product?._id || '',
    images: product.product?.images || [],
    name: product.product?.name || '',
    brand: product.product?.brand || '',
    categories: categories || [],
    description: product.product?.description || '',
    countInStock: product.product?.countInStock || 0,
    price: product.product?.price || 0,
    colors: product.product?.colors || [],
  };

  const formik = useFormik<IAddProductSchema>({
    initialValues,
    // validationSchema,
    enableReinitialize: true,
    onSubmit: async values => {
      console.log('test valies', values);
      if (id) {
        dispatch(
          updateProduct(
            id,
            {
              brand: values.brand,
              images: values.images as File[],
              colors: values.colors,
              categories: values.categories,
              price: values.price,
              discount: 0,
              countInStock: values.countInStock,
              name: values.name,
              description: values.description,
            },
            () => navigation(`/product/${id}`),
          ),
        );
      }

      dispatch(
        addProduct(
          {
            brand: values.brand,
            images: values.images as File[],
            colors: values.colors,
            categories: values.categories,
            price: values.price,
            discount: 0,
            countInStock: values.countInStock,
            name: values.name,
            description: values.description,
          },
          () => navigation(`/`),
        ),
      );
    },
  });

  return (
    <ProductContainer direction="column" padding-left="15%" margin-top="100px">
      <PathNavigate name={id ? `update Product ${id}` : 'Create New Product'} />
      <form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>
        <Container direction="column" align-Items="flex-end" width="71%">
          <Container
            align-Items="flex-start"
            flex-wrap="wrap"
            background="#F2F2F2"
            border-radius="16px"
            padding="2em"
            margin-bottom="1em"
          >
            <ProductImages formik={formik} />
            <ProductDetails
              formik={formik}
              categories={categories}
              product={product?.product}
              edit={!!id}
            />
          </Container>
          <Button
            type="submit"
            background="#4BB543"
            color="#fff"
            fontSize="1em"
            padding="1em"
            borderRadius="6px"
          >
            {id ? 'Update Product' : 'Create New Product'}
          </Button>
        </Container>
      </form>
    </ProductContainer>
  );
}

export default NewProduct;
