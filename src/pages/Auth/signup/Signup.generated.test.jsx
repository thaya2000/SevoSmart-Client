import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import Signup from './Signup';

// Mock CSS and modules
vi.mock("./Signup.css");
vi.mock("../../../context/authContext", () => ({
  userAuth: vi.fn(() => [{}, vi.fn()]) // Mock userAuth with a state and a setter function
}));
vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
  useLocation: vi.fn(() => ({ state: {} }))
}));
vi.mock("axios");
vi.mock("react-hot-toast", () => ({
  toast: vi.fn()
}));
vi.mock("../../../util/constants", () => ({
  DEFAULT_EMAIL: "default@example.com",
  DEFAULT_PASSWORD: "defaultPassword",
  DEFAULT_ROLE: "user",
  DEFAULT_FIRSTNAME: "John",
  DEFAULT_LASTNAME: "Doe"
}));

describe('<Signup>', () => {
  it('should render component', () => {
    const { asFragment } = render(<Signup />);
    expect(asFragment()).toMatchSnapshot();
  });
});
