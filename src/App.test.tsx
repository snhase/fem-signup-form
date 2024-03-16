import React from 'react';
import { render, screen } from '@testing-library/react';
import {App} from './App.tsx';

test('renders learn react link', () => {
  render(<App />);
  //confirm title text is rendered
  const titleText = screen.getByText(/Learn to code/i);
  expect(titleText).toBeInTheDocument();
  //confirm offer text is rendered
  const offerDetails = screen.getByText(/Try it free 7 days then \$20\/mo. thereafter/i);
  expect(offerDetails).toBeInTheDocument();
  //confirm form is rendered
  const formTerms = screen.getByText(/By clicking the button\, you are agreeing to our/i);
  expect(formTerms).toBeInTheDocument();
});
