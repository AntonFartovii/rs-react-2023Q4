import React, { useEffect, useState } from 'react';

const ButtonWithError = () => {
  const [click, setClick] = useState<boolean>(false);
  const clickHandler = () => setClick(true);

  useEffect(() => {
    if (click) {
      throw new Error('My Error!');
    }
  }, [click]);

  return <input type="button" onClick={clickHandler} className="test-button" value="Test Error" />;
};

export default ButtonWithError;
