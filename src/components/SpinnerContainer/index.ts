import styled from 'styled-components';

const SpinnerContainer = styled.div`
  display: flex;
  border: 6px solid ${props => props.theme?.primary?.lightYallow};
  width: 120px;
  justify-content: center;
  height: 120px;
  box-sizing: border-box;
  border-radius: 50%;
  border-top-color: #ddd;
  align-items: center;
  margin: 25% auto;
  animation: spin 3s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

export { SpinnerContainer };
