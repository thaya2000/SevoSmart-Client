import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import EditProduct from './EditProduct';

// Mocking necessary modules
vi.mock('react-router-dom', () => ({
  useParams: vi.fn(() => ({ productId: '123' })),
  useNavigate: vi.fn()
}));
vi.mock('axios');
vi.mock('react-hot-toast', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn()
  }
}));

describe('<EditProduct>', () => {
  it('should render component', () => {
    const { asFragment } = render(<EditProduct />);
    expect(asFragment()).toMatchSnapshot();
  });
});
