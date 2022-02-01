import styled, { CSSProperties } from 'styled-components';
import { Button } from '../Button/ButtonStyle';
import { IstyleMainCard, IcontentProp } from './interface';

export const SaveBtn = styled(Button)`
  height: 62px;
  background: #f2f2f2;
  width: 14%;
  padding: 0;
  margin-left: 7%;
`;

export const AddCart = styled(Button)`
  height: 62px;
  width: 65.3%;
  background: #f2f2f2;
  font-size: 15px;
  margin: 0 5%;
`;

export const MainCard = styled('div')<IstyleMainCard>(
  ({
    alignItems = 'baseline',
    alignContent = 'baseline',
    boxShadow = 'none',
    padding = ' 0 10px',
    margin = '20px auto',

    ...props
  }: IstyleMainCard) => ({
    maxWidth: '450px',
    width: '450px',
    minWidth: '25%',
    position: 'relative',
    alignItems: `${alignItems}`,
    alignContent: `${alignContent}`,
    boxShadow: `${boxShadow}`,
    transition: '0.3s',
    margin: `${margin}`,
    padding: `${padding}`,
    display: 'flex',
    flexDirection: `${(props.flexDirection as 'row') || ('column' as const)}`,
    borderRadius: `${props.borderRadius || '10px'}`,
    backgroundColor: `${props.backgroundColor || 'white'}`,
    flexWrap: 'wrap',
  }),
);

// '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
export const Content = styled('div')<IcontentProp>(
  ({
    padding = '0',
    width = 'none',
    height = 'none',
    maxHeight = '60%',
    margin = '5px auto',
  }: // ...props
  IcontentProp) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
    padding: `${padding}`,
    width: `${width}`,
    height: `${height}`,
    maxHeight: `${maxHeight}`,
    margin: `${margin}`,
  }),
);

export const ContentAction = styled.div<CSSProperties>(
  ({
    padding = 'none',
    width = '100%',
    height = 'none',
    border = 'none',
    margin = ' auto',
  }) => ({
    display: 'flex',
    flexDirection: 'row',
    padding: `${padding}`,
    width: `${width}`,
    height: `${height}`,
    border: ` ${border}`,
    margin: `${margin}`,
    cursor: 'pointer',
  }),
);

export const Discount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #fc4059 0% 0% no-repeat padding-box;
  width: 70px;
  height: 70px;
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  align-items: center;
  margin: 0 auto;
  margin-top: 1 rem;
`;
