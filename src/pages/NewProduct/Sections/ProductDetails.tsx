import React, { useEffect } from 'react';
import { Container, Typography, InputController } from '../../../components';
// import { ErrorSection } from '../../../components/Form/inputController/errorSection';
import {
  FiledWrapper,
  Label,
  InputWrapper,
} from '../../../components/Form/inputController/style';
import {
  FormContainer,
  InputsContainer,
  SelectStyle,
  Textarea,
} from '../style';

const ProductDetails = ({ formik, categories, product, edit }: any) => {
  const [selected, setSelected] = React.useState({
    category: !product,
    color: !product,
  });

  useEffect(() => {
    if (product?.categories?.length > 0) {
      setSelected({
        category: product?.categories.map(item => ({
          label: item,
          value: item,
        })),
        color: product?.colors.map(item => ({
          label: item,
          value: item,
        })),
      });
    }
  }, [product]);

  const colourStyles = {
    control: styles => ({
      ...styles,
      backgroundColor: '#F2F2F2',
      height: '100%',
      overflow: 'auto',
      boxShadow: 'none',
      border: 'none',
      borderRadius: '6px',
    }),
    option: styles => ({
      ...styles,
      backgroundColor: '#F2F2F2',
    }),
  };
  return (
    <FormContainer direction="column" margin-left="2em" width="calc(70% - 2em)">
      <Container direction="column" justify-Content="space-between">
        <Typography
          variant="h3"
          fontSize="1.5rem"
          bold
          color="test"
          margin="0 0 50px 0.3em"
        >
          Product Details
        </Typography>

        <InputsContainer>
          <InputController
            name="name"
            label="Product Name"
            type="text"
            isRequired
            value={formik.values.name}
            onChange={formik.handleChange}
            // errors={formik.errors.name}
          />
          <InputController
            name="brand"
            label="Product Brand"
            type="text"
            isRequired
            value={formik.values.brand}
            onChange={formik.handleChange}
            // errors={formik.errors.brand}
            marginLeft="0.5em"
          />
        </InputsContainer>

        <InputsContainer justify-Content="space-between">
          {formik.values.id.length ? (
            <InputController
              name="id"
              label="Product ID"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.id}
              disabled
            />
          ) : (
            <p />
          )}

          <FiledWrapper>
            <Label htmlFor="select">Product Colors</Label>
            <InputWrapper>
              {(selected.color || !edit) && (
                <SelectStyle
                  id="select"
                  name="colors"
                  styles={colourStyles}
                  defaultValue={selected.color}
                  onChange={(selectedOption: any) => {
                    const col = selectedOption.map(x => x.value);
                    formik.setFieldValue('colors', col);
                  }}
                  isMulti
                  options={[
                    ...formik?.values?.colors?.map(item => ({
                      label: item,
                      value: item,
                    })),
                    { value: 'Pink', label: 'Pink' },
                    { value: 'Silver', label: 'Silver' },
                    { value: 'Gold', label: 'Gold' },
                  ]}
                />
              )}
            </InputWrapper>
            {/* <ErrorSection errors={formik.errors.colors} /> */}
          </FiledWrapper>

          <FiledWrapper style={{ marginLeft: '0.5em' }}>
            <Label htmlFor="select">Product Category</Label>
            <InputWrapper>
              {(selected?.category || !edit) && (
                <SelectStyle
                  id="select"
                  name="categories"
                  styles={colourStyles}
                  defaultValue={selected?.category}
                  onChange={(selectedOption: any) => {
                    const cat = selectedOption.map(x => x.value);
                    formik.setFieldValue('categories', cat);
                  }}
                  isMulti
                  options={categories?.map(el => ({
                    value: el?.name,
                    label: el?.name,
                  }))}
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
              )}
            </InputWrapper>
            {/* <ErrorSection errors={formik.errors.categories} /> */}
          </FiledWrapper>
        </InputsContainer>

        <Container>
          <FiledWrapper style={{ height: 'auto', marginBottom: '1.5em' }}>
            <Label htmlFor="textarea">Product Description</Label>
            <InputWrapper>
              <Textarea
                id="textarea"
                name="description"
                rows={5}
                value={formik.values.description}
                onChange={formik.handleChange}
              />
            </InputWrapper>
            {/* <ErrorSection errors={formik.errors.description} /> */}
          </FiledWrapper>
        </Container>

        <InputsContainer justify-Content="space-between">
          <InputController
            name="countInStock"
            label="Count in Stock"
            type="number"
            isRequired
            value={formik.values.countInStock}
            onChange={formik.handleChange}
            // errors={formik.errors.countInStock}
          />
          <InputController
            name="price"
            label="Price"
            type="number"
            isRequired
            value={formik.values.price}
            onChange={formik.handleChange}
            // errors={formik.errors.price}
            marginLeft="0.5em"
          />
        </InputsContainer>
      </Container>
    </FormContainer>
  );
};

export default ProductDetails;
