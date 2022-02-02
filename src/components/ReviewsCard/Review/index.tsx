/* eslint-disable react/jsx-no-undef */
import ReactStars from 'react-rating-stars-component';
import { IReview } from '../../../redux/Product/type';
import { Container } from '../../Container';
import Typography from '../../Typography';

interface Iprops {
  Review: IReview;
  key?: string;
}

export default function ReviewsCard({ Review, key }: Iprops) {
  return (
    <Container direction="column" margin="2em" key={key}>
      <Typography variant="h4" margin=".5em 0" bold font-size="1rem">
        {Review.name}
      </Typography>
      <Container direction="row" justify-Content="space-between">
        <ReactStars
          isHalf
          name="rate"
          edit={false}
          value={Review.rating}
          size={40}
        />
        <Typography
          color="grey"
          variant="p"
          style={{ fontSize: '12px', fontWeight: 'bold' }}
        >
          {Review.createdAt.slice(0, 10)}
        </Typography>
      </Container>
      <Container
        background=" rgb(199, 199, 199);
"
        line-height="1.5"
        padding="20px"
      >
        <Typography
          margin="1rem 0"
          padding="1em"
          line-Height={1.6}
          font-Family="Mulish"
          min-width="98%"
        >
          {Review.comment}
        </Typography>
      </Container>
    </Container>
  );
}
