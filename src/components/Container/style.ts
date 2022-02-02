import styled from 'styled-components';

export const ContainerWrapper = styled.div<any>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props =>
    props.direction === 'column' ? 'flex-start' : 'center'};
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  padding: ${props => props.padding || '0'};
  gap: ${props => props.gap};
  ${props =>
    Object.keys(props)
      .map((key: any) => `${key}: ${props?.[key]};`)
      .join(';')};

  @media (max-width: 768px) {
    display: ${props => (props.hideAtMobile ? 'none' : 'flex')};
    font-size: 12px;
    flex-wrap: wrap;
    margin-top: 1em;
    width: 98%;
    & > button {
      margin: 1.5em 0.2em;
    }

    & > img {
      font-size: 14px;
    }
  }
`;
