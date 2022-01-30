import React from 'react';
import { Button, Container } from '../../../components';
import ProductImages from './ProductImages';
import ProductDetails from './ProductDetails';

const Sections = ({ formik }: any) => {
  return (
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
        <ProductDetails formik={formik} />
      </Container>
      <Button
        background="#4BB543"
        color="#fff"
        fontSize="1em"
        padding="1em"
        borderRadius="6px"
      >
        Create New Product
      </Button>
    </Container>
  );
};

export default Sections;
