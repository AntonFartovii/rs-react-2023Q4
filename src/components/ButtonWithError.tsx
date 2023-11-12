import { FC, useState } from 'react';
import { MyError } from '../errorBoundary/MyError.ts';

const ButtonWithError: FC = () => {
  const [click, setClick] = useState<boolean>(false);
  const clickHandler = (): void => {
    setClick(true);
  };

  if (click) {
    throw new MyError();
  }

  return <input type="button" onClick={clickHandler} className="test-button" value="Test Error" />;
};

export default ButtonWithError;
