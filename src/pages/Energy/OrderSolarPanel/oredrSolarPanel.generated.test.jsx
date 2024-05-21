import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import OrderSolarPanel from './oredrSolarPanel';

vi.mock('../../../Images/S1.jpeg');
vi.mock('../../../Images/S2.jpeg');
vi.mock('../../../Images/S3.jpeg');
vi.mock('../../../Images/S4.jpg');
vi.mock('../../../Images/S5.jpg');
vi.mock('../../../Images/S6.jpg');
vi.mock('./orderSolarPanel.css');

describe('<OrderSolarPanel>', () => {
  it('should render component', () => {
    const { asFragment } = render(<OrderSolarPanel />);
    expect(asFragment()).toMatchSnapshot();
  });
});
