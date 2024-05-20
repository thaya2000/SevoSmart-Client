import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import EditPastProject from './EditPastProject';

// Mocking necessary modules
vi.mock('react-router-dom', () => ({
  useParams: vi.fn(() => ({ projectId: '123' })),
  useNavigate: vi.fn(),
  Link: vi.fn(() => <div>Link</div>) // Stubbing the Link component
}));
vi.mock('axios');
vi.mock('react-hot-toast', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn()
  }
}));

describe('<EditPastProject>', () => {
  it('should render component', () => {
    const { asFragment } = render(<EditPastProject />);
    expect(asFragment()).toMatchSnapshot();
  });
});
