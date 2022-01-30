import { Container, Typography } from '../../../../components';

// const data = [
//   {
//     key: 'brand',
//     value: 'Apple',
//   },
//   {
//     key: 'model',
//     value: 'Iphone X',
//   },
//   {
//     key: 'model',
//     value: 'Iphone X',
//   },
//   {
//     key: 'model',
//     value: 'Iphone X',
//   },
//   {
//     key: 'model',
//     value: 'Iphone X',
//   },
//   {
//     key: 'model',
//     value: 'Iphone X',
//   },
// ];
let i = 0;
const Specifications: React.FC<objectType> = ({ data }) => {
  return (
    <Container direction="column">
      <Typography variant="h2" bold margin="2em 0 1em 0" font-Family="Mulish">
        Specifications
      </Typography>
      <Container
        direction="column"
        border="1px solid #D7D7D7"
        padding="2em"
        box-Sizing="border-box"
      >
        <Typography variant="h3" bold margin="0 0 1em 0" font-Family="Mulish">
          Technical Details
        </Typography>
        <Container justify-Content="space-between" flex-Wrap="wrap">
          {data.map(({ key, value }, index) => {
            if (index % 2 === 0) i += 1;
            return (
              <Container
                // flex-Basis="45%"
                background-Color={i % 2 === 0 ? '#f5f5f5' : '#FFFFFF'}
                justify-Content="space-between"
                padding="1em"
                // margin=".5em 1em"
                border-Radius=".5rem"
                width="46%"
                box-Shadow={
                  i % 2 === 0 ? '0 0.1rem .1rem rgba(0,0,0,0.1)' : 'none'
                }
                key={index}
              >
                <Typography fontFamily="Mulish" font-Size=".8rem">
                  {key}
                </Typography>
                <Typography fontFamily="Mulish" font-Size=".8rem">
                  {value}
                </Typography>
              </Container>
            );
          })}
        </Container>
      </Container>
    </Container>
  );
};

export default Specifications;
