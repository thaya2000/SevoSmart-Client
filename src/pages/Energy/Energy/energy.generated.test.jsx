import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import AccountDetailsForm from './energy';

// Mock CSS and images
vi.mock('./energy.css');
vi.mock('../../../Images/S1.jpeg');
vi.mock('../../../Images/S2.jpeg');
vi.mock('../../../Images/S3.jpeg');

describe('<AccountDetailsForm>', () => {
  it('should render component', () => {
    const { asFragment } = render(<AccountDetailsForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});
