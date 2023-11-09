import { render } from '@testing-library/react';

import '../css/layout.module.css';
import App from '../App.tsx';

describe('Application', () => {
  it('CheckboxWithLabel changes the text after click', () => {
    render(<App />);
  });
});
