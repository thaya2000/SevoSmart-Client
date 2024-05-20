import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import AdminPanel from './AdminPanel';

// Mocking modules
vi.mock('react-router-dom', () => ({
  Link: vi.fn(() => <div>Link</div>) // Stubbing the Link component
}));
vi.mock('axios');

describe('<AdminPanel>', () => {
  it('should render component', () => {
    const { asFragment } = render(<AdminPanel />);
    expect(asFragment()).toMatchSnapshot();
  });
});
