import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import PastProjects from './PastProjects';

// Mocking necessary modules
vi.mock('react-router-dom', () => ({
  Link: vi.fn(() => <div>Link</div>), // Stubbing the Link component
  useParams: vi.fn(() => ({ projectId: '123' }))
}));
vi.mock("axios");
vi.mock("react-hot-toast", () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn()
  }
}));
vi.mock("../../assets/construction.jpg");
vi.mock("../../assets/solar.jpg");
vi.mock("../../assets/footer_sample.jpg");

describe('<PastProjects>', () => {
  it('should render component', () => {
    const { asFragment } = render(<PastProjects />);
    expect(asFragment()).toMatchSnapshot();
  });
});
