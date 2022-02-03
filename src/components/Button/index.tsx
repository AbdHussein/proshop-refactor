/* eslint-disable react/destructuring-assignment */
import { Button } from './ButtonStyle';

export default function ButtonComponent(props: any) {
  return (
    <Button {...(props as any)}>
      {props?.IsLoading ? 'loading' : props?.children}
    </Button>
  );
}
