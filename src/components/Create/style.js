import styled, { css } from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem auto;
  max-width: 450px;
  font-size: 20px;
`;

export const MarginBottom = styled.div`
  margin-bottom: 2rem;
`;

export const H1 = styled.h1`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 2rem;
`;

export const Div = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const P = styled.p`
  font-size: 15px;
  color: #555;
  margin-top: 0.5rem;
`;

export const Ul = styled.ul`
  font-size: 15px;
  margin-bottom: 1rem;
  color: #555;
  list-style: disc;
  padding-left: 2rem;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  display: block;
  color: #555;
`;

const sharedButtonStyle = css`
  background: #58249c;
  color: white;
  padding: 0.3rem 1rem;
  border-radius: 5px;
  font-size: 25px;
  font-weight: 700;

  &:hover {
    color: #ccc;
  }
  &:active {
    color: #999;
  }
`;

export const SubmitButton = styled.input`
  ${sharedButtonStyle}
  margin-top: 1rem;
`;

export const AddButton = styled.input`
  ${sharedButtonStyle}
`;

export const Center = styled.div`
  text-align: center;
`;

const sharedInputStyle = css`
  width: 100%;
  background: white;
  border-radius: 5px;
  padding: 0.5rem;

  &:hover {
    background: #ccc;
  }
  &:focus {
    background: #ccc;
  }
`;

export const Input = styled.input`
  ${sharedInputStyle}
`;

export const Textarea = styled.textarea`
  ${sharedInputStyle}
  resize: both;
`;
