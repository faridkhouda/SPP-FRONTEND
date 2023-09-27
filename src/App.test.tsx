import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });

  it('should render', () => {
    const { getByText } = render(<App />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
