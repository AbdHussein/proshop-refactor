import { Image } from '..';
import { IGetAllCategory } from '../../redux/Product/type';
import Typography from '../Typography';
import { Content, ContentAction, MainCard } from './cardStyles';

const CategoryCard = ({ image, name }: IGetAllCategory) => {
  return (
    <MainCard width="19.7%" height="392px" boxShadow="none">
      <ContentAction
        padding="none"
        margin="none"
        borderRadius="16px"
        boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)"
      >
        <Image
          src={image}
          alt=""
          width="100%"
          style={{ borderRadius: '16px' }}
        />
      </ContentAction>
      <Content margin="16px auto">
        <h2>{name}</h2>
      </Content>
    </MainCard>
  );
};

export default CategoryCard;
