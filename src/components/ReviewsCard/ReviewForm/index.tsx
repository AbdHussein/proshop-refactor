import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReview } from '../../../redux/Product/action';
import { IReview, IProducts } from '../../../redux/Product/type';
import { AppState } from '../../../redux/store';
import Dailog from '../../Dialog';
import { MainForm } from './Form';

export default function ReviewForm({
  isDisplay,
  handleClose,
}: {
  isDisplay: boolean;
  handleClose: () => void;
}) {
  const {
    product: { getProductById },
    auth,
  } = useSelector((state: AppState) => state);
  const dispatch = useDispatch();

  const handleSubmit = React.useCallback(
    values => {
      const values_: IReview = {
        ...values,
        name: `${auth.user.firstName} ${auth.user.lastName}`,
        createdAt: new Date().toString(),
      };

      dispatch(
        addReview(
          (getProductById?.product as IProducts)._id as string,
          values_ as IReview,
        ),
      );
      handleClose();
    },
    [dispatch, getProductById, auth],
  );
  return (
    <Dailog open={isDisplay} onClose={handleClose}>
      <MainForm handleSubmit={handleSubmit} />
    </Dailog>
  );
}
