import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import Home from './Home';

vi.mock("./Home.css");
vi.mock("../../component/HomeComponent/IntroText/IntroText.jsx");
vi.mock("../../component/HomeComponent/ProductIntroCard/ProductIntroCard.jsx");
vi.mock("../../assets/solar.jpg");
vi.mock("../../assets/construction.jpg");
vi.mock("../../assets/footer_sample.jpg");
vi.mock("../../component/HomeComponent/IntroImageSlider/IntroImageSlider.jsx");
vi.mock("../../component/HomeComponent/PastProject/PastProject.jsx");
vi.mock("../../component/HomeComponent/BillCalculator/BillCalculator.jsx");
vi.mock("../../component/HomeComponent/OfferPanel/OfferPanel/OfferPanel.jsx");

describe('<Home>', () => {
  it('should render component', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
