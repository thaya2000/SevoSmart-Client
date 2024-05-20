import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import NewsDetails from './NewsDetails';

// Mocking necessary modules and assets
vi.mock('react-router-dom', () => ({
  useParams: vi.fn(() => ({ newsId: '123' })) // Example of how to mock useParams if needed
}));
vi.mock('./NewsDetails.css');
vi.mock('../../Images/NewsImages/im1.jpg');
vi.mock('../../Images/NewsImages/im2.jpg');
vi.mock('../../Images/NewsImages/im3.jpg');
vi.mock('../../Images/NewsImages/im4.jpg');
vi.mock('../../Images/NewsImages/im5.jpg');
vi.mock('../../Images/NewsImages/im6.jpg');
vi.mock('../../Images/NewsImages/im7.jpg');

describe('<NewsDetails>', () => {
  it('should render component', () => {
    const { asFragment } = render(<NewsDetails />);
    expect(asFragment()).toMatchSnapshot();
  });
});
