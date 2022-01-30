import ReactStars from 'react-rating-stars-component';
import { BsBookmark } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/ButtonStyle';
import img from '../../assets/tow.jpg';
import Typography from '../Typography';
import {
  Actions,
  AddCart,
  Content,
  ContentAction,
  Discount,
  MainCard,
  SaveBtn,
} from './cardStyles';
import { Container, Image } from '..';
import { AppState } from '../../redux/store';
import { ActionCartType } from '../../redux/Cart/type';
import { upduteActionCart } from '../../redux/Cart/action';

export interface IProducts {
  image: string;
  rating: number;
  price: number;
  discount: number;
  countInStock?: number;
  _id: string;
  name?: string;
  description: string;
}
const ComplexCard = ({ ...props }: IProducts) => {
  const dispatch = useDispatch<ThunkDispatch<AppState, any, ActionCartType>>();
  const navigate = useNavigate();

  const handelAddCart = () => {
    dispatch(
      upduteActionCart({ productId: props._id, qty: 1 }, () => {
        navigate('/cart');
      }),
    );
  };
  return (
    <MainCard>
      {props?.discount > 0 && (
        <Discount>
          <Typography width="none" color="white" fontSize="24px">
            {`-${Math.floor(-100 * (props.discount / props.price - 1))}%`}
          </Typography>
        </Discount>
      )}
      <ContentAction onClick={() => navigate(`/product/${props._id}`)}>
        <Image
          src={props.image}
          variant="square"
          size="lg"
          style={{
            flexShrink: 0,
            minWidth: '100%',
            maxHeight: '18rem',
          }}
        />
      </ContentAction>
      <Content
        onClick={() => navigate(`/product/${props._id}`)}
        style={{ textAlign: 'center' }}
      >
        <Typography
          variant="h2"
          font-size="30px"
          font-family="mulish"
          width="80%"
          margin="20px auto"
        >
          {props.name}
        </Typography>
      </Content>
      <Content>
        <ReactStars
          isHalf
          name="rate"
          edit={false}
          value={props.rating}
          size={40}
        />
      </Content>
      <Content>
        {props.discount && (
          <Typography
            variant="h2"
            text-decoration={props.discount ? 'line-through' : 'none'}
            fontFamily="mulish"
            color="red"
            marginRight="20px"
          >
            ${props.price}
          </Typography>
        )}
        <Typography variant="h2" fontFamily="mulish">
          ${props.discount}
        </Typography>
      </Content>

      <Container direction="row" margin="0 auto" padding="15px">
        <Button
          height="62px"
          background="#F2F2F2"
          width="25%"
          padding="none"
          margin-left="0 6%"
        >
          <BsBookmark size="24px" />
        </Button>
        <Button
          height="62px"
          width="65.3%"
          background="#F2F2F2"
          fontSize="15px"
          margin="0 5%"
          onClick={handelAddCart}
        >
          Add to cart
        </Button>
      </Container>
    </MainCard>
  );
};

export default ComplexCard;
