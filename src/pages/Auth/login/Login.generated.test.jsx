import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import Login from './Login';

// Mocking styles and modules
vi.mock("./Login.css");
vi.mock("../../../context/authContext", () => ({
  userAuth: vi.fn(() => [{}]) // Mock userAuth with a function that returns an empty context
}));
vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
  useLocation: vi.fn()
}));
vi.mock("axios");
vi.mock("react-hot-toast");
vi.mock("react-icons/fa", () => ({
  FaUser: vi.fn(() => <div>FaUser Icon</div>),
  FaLock: vi.fn(() => <div>FaLock Icon</div>)
}));
vi.mock("../../../util/constants", () => ({
  DEFAULT_EMAIL: "example@example.com",
  DEFAULT_PASSWORD: "password"
}));

describe('<Login>', () => {
  it('should render component', () => {
    const { asFragment } = render(<Login />);
    expect(asFragment()).toMatchSnapshot();
  });
});
