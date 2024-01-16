import {
  ChartLineUp,
  CheckSquareOffset,
  CursorClick,
  DeviceMobileCamera,
  Drone,
  Files,
  MapPin,
  MapTrifold,
  Presentation,
  SlidersHorizontal,
} from 'assets/icons';

export const STANDART_SECTION_TEXT = {
  title: 'Standard package',
  badge:
    'The virtual tours, when purchased as an add-on, can be provided as separate links for 3rd party use.',
};

export const LIST_ITEMS = [
  {
    image: <CheckSquareOffset />,
    title: 'CRM Integration for Units Online Availability',
  },
  {
    image: <Drone />,
    title: 'Drone 3D Overview',
  },
  {
    image: <MapPin />,
    title: '“Areas on the go” inside aerial overview',
  },
  {
    image: <CursorClick />,
    title: 'Interactive apartment selection',
  },
  {
    image: <SlidersHorizontal />,
    title: 'Filters and apartment search',
  },
  {
    image: <ChartLineUp />,
    title: 'Analytics Dashboard',
  },
  {
    image: <DeviceMobileCamera />,
    title: 'Access to the TheViewUpload App',
  },
  {
    image: <MapTrifold />,
    title: 'Custom Neighborhood Map',
  },
  {
    image: <Presentation />,
    title: 'Guided Presentation Tool',
  },
  {
    image: <Files />,
    title: 'Content export page',
  },
];

export const STANDART_SUM = {
  price: 1500,
  hosting: 50,
};
