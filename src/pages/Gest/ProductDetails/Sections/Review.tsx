import StarRatingComponent from 'react-star-rating-component';
import { Container, Rating, Typography } from '../../../../components';
import { IReview } from '../../../../redux/Product/type';

const data = [
  {
    name: 'Jenifer Medhurst',
    rating: 2,
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.',
  },
  {
    name: 'Jenifer Medhurst',
    rating: 2,
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.',
  },
  {
    name: 'Jenifer Medhurst',
    rating: 2,
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.',
  },
];

interface IProps {
  reviews: IReview[];
}
const ReviewSection = ({ reviews }: IProps) => {
  return (
    <Container direction="column" margin="2em 0">
      <Typography variant="h2" bold margin="2em 0 1em 0" font-Family="Mulish">
        Reviews
      </Typography>
      <Container
        flex-Wrap="wrap"
        justify-Content="space-between"
        border="1px solid #D7D7D7"
        box-Sizing="border-box"
      >
        {reviews.map((x, index) => {
          return (
            <Container direction="column" margin="2em" key={index.toString()}>
              <Typography variant="h3" margin=".5em 0" bold font-size="1rem">
                {x.name}
              </Typography>
              <Container direction="row" justify-Content="space-between">
                <StarRatingComponent
                  editing={false}
                  value={x.rating}
                  name="rate"
                />
                <Typography color="grey">{x.createdAt.slice(0, 10)}</Typography>
              </Container>

              <Typography
                margin="1rem 0"
                padding="1em"
                background-Color="#F2F2F2"
                line-Height={1.6}
                font-Family="Mulish"
                min-width="98%"
              >
                {x.comment}
              </Typography>
            </Container>
          );
        })}
      </Container>
    </Container>
  );
};

export default ReviewSection;
