import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import AddProject from './AddProject';

// Mocking necessary modules
vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn()  // Mocking the navigate function
}));
vi.mock("react-hot-toast", () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn()
  }
}));
vi.mock("axios");

describe('<AddProject>', () => {
  it('should render component', () => {
    const { asFragment } = render(<AddProject />);
    expect(asFragment()).toMatchSnapshot();
  });
});
