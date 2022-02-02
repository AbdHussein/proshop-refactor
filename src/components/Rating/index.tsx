// import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { ReactComponent as BsStarFill } from '../../assets/star.svg';
import { ReactComponent as BsStarHalf } from '../../assets/halfStar.svg';
import { ReactComponent as BsStar } from '../../assets/emptyStar.svg';
import StarIcon from './styles';

export interface IProps {
  value: number;
}

const Rating = ({ value }: IProps) => {
  return (
    <div>
      <span>
        <StarIcon>
          {value >= 1 ? (
            <BsStarFill />
          ) : value >= 0.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </StarIcon>
      </span>
      <span>
        <StarIcon>
          {value >= 2 ? (
            <BsStarFill />
          ) : value >= 1.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </StarIcon>
      </span>
      <span>
        <StarIcon>
          {value >= 3 ? (
            <BsStarFill />
          ) : value >= 2.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </StarIcon>
        <span>
          <StarIcon>
            {value >= 4 ? (
              <BsStarFill />
            ) : value >= 3.5 ? (
              <BsStarHalf />
            ) : (
              <BsStar />
            )}
          </StarIcon>
        </span>
        <span>
          <StarIcon>
            {value >= 5 ? (
              <BsStarFill />
            ) : value >= 4.5 ? (
              <BsStarHalf />
            ) : (
              <BsStar />
            )}
          </StarIcon>
        </span>
      </span>
    </div>
  );
};

export default Rating;
