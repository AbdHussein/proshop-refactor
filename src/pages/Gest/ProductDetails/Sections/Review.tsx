/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/button-has-type */
import { useState } from 'react';
import { Button, Container, Typography } from '../../../../components';
import { AddReviewButton } from '../../../../components/Button/ButtonStyle';
import ReviewsCard from '../../../../components/ReviewsCard/Review';
import ReviewForm from '../../../../components/ReviewsCard/ReviewForm';
import { IReview } from '../../../../redux/Product/type';

interface IProps {
  reviews: IReview[];
}

const ReviewSection = ({ reviews }: IProps) => {
  const [isDisplay, setIsDisplay] = useState<boolean>(false);
  const handleDisplayADDReview = () => {
    setIsDisplay(!isDisplay);
  };

  return (
    <Container direction="column" margin="2em 0">
      <div
        style={{ display: 'flex', alignItems: 'center', position: 'relative' }}
      >
        <Typography variant="h2" fontSize="30px" color="text.primary">
          Reviews
        </Typography>
        <AddReviewButton onClick={handleDisplayADDReview}>
          add review
        </AddReviewButton>
        <ReviewForm
          isDisplay={isDisplay}
          handleClose={() => setIsDisplay(false)}
        />
      </div>
      <Container
        flex-Wrap="wrap"
        justify-Content="space-between"
        border="1px solid #D7D7D7"
        box-Sizing="border-box"
      >
        {reviews.map((Review, index) => (
          <ReviewsCard Review={Review} index={index.toString()} />
        ))}
      </Container>
    </Container>
  );
};

export default ReviewSection;
