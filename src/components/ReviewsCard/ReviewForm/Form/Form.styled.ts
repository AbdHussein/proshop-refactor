/* eslint-disable no-unused-expressions */
import styled from 'styled-components';
import { Form } from 'formik';

export const FormContiner = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  padding: 10px 20px;
  font-family: 'Mulish';
  padding: 20px 40px;
`;

export const AddReviewButton = styled.button`
  padding: 16px;
  font-size: 24px;
  color: #242424;
  width: 60%;
  align-self: flex-end;
  margin-bottom: '20px';
  cursor: pointer;
`;

export const TextArea = styled.textarea`
  height: 123px;
  padding: 16px;
  resize: 'vertical';
  outline: none;
  background: none;
  color: ${props => props.theme.text?.primary};
`;
