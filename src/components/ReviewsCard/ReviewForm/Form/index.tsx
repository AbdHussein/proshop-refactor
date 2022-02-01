/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
// eslint-disable-next-line import/extensions
import { FormContiner, TextArea } from './Form.styled';
import Typography from '../../../Typography';
import { AddReviewButton } from '../../../Button/ButtonStyle';

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
        <label htmlFor="rating">Your rating: </label>

        {errors.rating && touched.rating ? (
          <Typography color="red">{errors.rating}</Typography>
        ) : null}
        <label htmlFor="comment">Your comment: </label>
        <TextArea
          id="comment"
          name="comment"
          placeholder="write to comment"
          onChange={handleChange}
        />
        {errors.comment && touched.comment ? (
          <Typography color="red">{errors.comment}</Typography>
        ) : null}
        <AddReviewButton type="submit">Add Review</AddReviewButton>
      </FormContiner>
    )}
  </Formik>
);
