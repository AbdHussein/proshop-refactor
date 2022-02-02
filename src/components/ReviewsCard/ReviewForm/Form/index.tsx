/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-bitwise */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/extensions
import ReactStars from 'react-rating-stars-component';
// eslint-disable-next-line import/extensions
import { FormContiner, TextArea } from './Form.styled';
import Typography from '../../../Typography';
import { AddReviewButton } from '../../../Button/ButtonStyle';
import { Container } from '../../../Container';

const SignupSchema = Yup.object().shape({
  rating: Yup.string().required('Rating is Required').nullable(),
  comment: Yup.string().required('Comment is Required'),
});

// eslint-disable-next-line @typescript-eslint/ban-types
export const MainForm = ({ handleSubmit }: { handleSubmit: Function }) => (
  <Formik
    initialValues={{
      rating: null,
      comment: '',
    }}
    validationSchema={SignupSchema}
    onSubmit={values => {
      handleSubmit(values);
    }}
  >
    {({ values, errors, touched, handleChange, setFieldValue }) => (
      <FormContiner>
        <label htmlFor="rating">
          <Typography bold variant="h3" margin="0 1em">
            Your rating:
          </Typography>
        </label>
        <Container margin-left="10px">
          <ReactStars
            isHalf
            name="rating"
            edit
            value={values.rating}
            size={40}
            onChangeValue={(value: number) => setFieldValue('rating', value)}
          />
        </Container>
        {errors.rating && touched.rating ? (
          <Typography color="red" style={{ fontSize: 'small' }}>
            {errors.rating}
          </Typography>
        ) : null}
        <label htmlFor="comment">
          <Typography bold variant="h3" margin="0 1em">
            Your comment:
          </Typography>
        </label>
        <TextArea
          id="comment"
          name="comment"
          placeholder="write to comment"
          onChange={handleChange}
        />
        {errors.comment && touched.comment ? (
          <Typography color="red" style={{ fontSize: 'small' }}>
            {errors.comment}
          </Typography>
        ) : null}
        <AddReviewButton type="submit">Add Review</AddReviewButton>
      </FormContiner>
    )}
  </Formik>
);
