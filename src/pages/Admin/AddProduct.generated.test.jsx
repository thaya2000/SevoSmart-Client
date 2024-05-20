import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import AddProduct from './AddProduct';

// Mock external modules and hooks
vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn()
}));
vi.mock("axios");
vi.mock('react-hot-toast', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn()
  }
}));
vi.mock("../../context/authContext", () => ({
  userAuth: vi.fn(() => [{}, vi.fn()]) // Assuming userAuth returns a state and a setter
}));

describe('<AddProduct>', () => {
  it('should render component', () => {
    const { asFragment } = render(<AddProduct />);
    expect(asFragment()).toMatchSnapshot();
  });
});
