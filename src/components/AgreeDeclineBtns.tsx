import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

type ButtonsProps = {
  agree: string,
  decline: string,
}


function Buttons({ agree, decline }: ButtonsProps) {
  return (
    <Stack gap={2} className="col-md-5 mx-auto">
      <Button variant="outline-primary">{agree}</Button>
      <Button variant="outline-secondary">{decline}</Button>
    </Stack>
  );
}

export default Buttons;