import React from 'react';
import { useForm } from 'react-hook-form';
import styled, { css } from 'styled-components';
import ButtonDefault from './ButtonDefault';
import { Strong } from './Typography';

const Wrapper = styled.div`
  background-color: #ffff;
  box-shadow: 0px 6px 70px rgba(0, 54, 124, 0.2);
  border-radius: 10px;
  padding: 3rem 2rem;
  flex-basis: 100%;
  width: calc(100% - 2rem * 2);
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const FormTitle = styled(Strong)`
  text-align: center;
`;
const InputStyles = css`
  border: none;
  border-bottom: 1px solid #dbe3eb;
  padding: 0.5rem;
  font-size: inherit;
  font-family: inherit;
  margin-top: 0.5rem;
`;
const Input = styled.input`
  ${InputStyles}
  margin-top: 2rem;
`;
const Textarea = styled.textarea`
  ${InputStyles}
  margin-top: 2rem;
  margin-bottom: 2rem;
  resize: vertical;
`;
const FormCard: React.FunctionComponent = () => {
  const { register, reset, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    reset();
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>Contact us</FormTitle>
        <Input
          type="text"
          placeholder="Name"
          id="name"
          required
          {...register(`name`)}
        />
        <Input
          type="text"
          placeholder="Email"
          id="email"
          required
          {...register(`email`)}
        />
        <Input
          type="text"
          placeholder="Subject"
          id="email"
          required
          {...register(`subject`)}
        />
        <Textarea
          placeholder="Type a message"
          id="message"
          required
          {...register(`message`)}
        />
        <ButtonDefault type="submit">Send a message</ButtonDefault>
      </Form>
    </Wrapper>
  );
};

export default FormCard;
