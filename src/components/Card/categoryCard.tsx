import { Image } from '..';
import { IGetAllCategory } from '../../redux/Product/type';
import Typography from '../Typography';
import { Content, ContentAction, MainCard } from './cardStyles';

const CategoryCard = ({ image, name }: IGetAllCategory) => {
  return (
    <MainCard minWidth="25%" boxShadow="none">
      <ContentAction
        height="350px"
        padding="5px"
        margin="none"
        borderRadius="16px"
        boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)"
      >
        <div
          style={{
            backgroundColor: '#F7F8FC',
            borderRadius: '16px',
            padding: '7px',
          }}
        >
          <Image
            src={image}
            alt=""
            height="100%"
            fit="contain"
            width="100%"
            style={{ borderRadius: '16px' }}
          />
        </div>
      </ContentAction>
      <Content margin="16px auto">
        <h2 style={{ textAlign: 'center' }}>{name}</h2>
      </Content>
    </MainCard>
  );
};

export default CategoryCard;
