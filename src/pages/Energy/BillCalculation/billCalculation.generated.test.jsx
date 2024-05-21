import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import BillCalculation from './BillCalculation';

// Mocks for CSS and images
vi.mock('./billcalculation.css');
vi.mock('../../../Images/S7.jpg');
vi.mock('react-router-dom', () => ({
  NavLink: vi.fn().mockImplementation(({ children }) => <div>{children}</div>) // Mock NavLink as a simple div
}));

describe('<BillCalculation>', () => {
  it('should render component', () => {
    const { asFragment } = render(<BillCalculation />);
    expect(asFragment()).toMatchSnapshot();
  });
});
