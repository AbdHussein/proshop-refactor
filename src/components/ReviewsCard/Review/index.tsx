import StarRatingComponent from 'react-star-rating-component';
import { IReview } from '../../../redux/Product/type';
import { Container } from '../../Container';
import Typography from '../../Typography';

interface Iprops {
  Review: IReview;
  index: string;
}

export default function ReviewsCard({ Review, index }: Iprops) {
  return (
    <Container direction="column" margin="2em" key={index.toString()}>
      <Typography variant="h4" margin=".5em 0" bold font-size="1rem">
        {Review.name}
      </Typography>
      <Container direction="row" justify-Content="space-between">
        <StarRatingComponent
          editing={false}
          value={Review.rating}
          name="rate"
        />
        <Typography color="grey">{Review.createdAt.slice(0, 10)}</Typography>
      </Container>

      <Typography
        margin="1rem 0"
        padding="1em"
        background-Color="#F2F2F2"
        line-Height={1.6}
        font-Family="Mulish"
        min-width="98%"
      >
        {Review.comment}
      </Typography>
    </Container>
  );
}
