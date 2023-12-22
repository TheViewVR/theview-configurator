import { img10, img11, img12, img13, img9 } from 'assets/images';
import { StyledCardImage } from 'components/sections/ContentSection/styled';

export const CARDS_CONTENT = [
  {
    id: '9',
    title: '3D rendering building integration',
    description:
      'Page you can share with all your vendors so they can embed all content separately (item-by-item)',
    image: <StyledCardImage src={img9} alt='img9' />,
    price: 2500,
    totalPrice: 2500,
    initialHosting: 0,
    hosting: 0,
  },
  {
    id: '10',
    title: 'Interior amenity Virtual Tour',
    description:
      'HDR 360 tour, delivers with the set of 3-5 still images. Can be embedded to the Apartment Card, your website and 3rd Party Platforms.',
    image: <StyledCardImage src={img10} alt='img10' />,
    price: 5500,
    totalPrice: 5500,
    initialHosting: 4,
    hosting: 4,
  },
  {
    id: '11',
    title: 'Exterior Amenity Virtual Tour',
    description:
      'HDR 360 tour, delivers with the set of 3-5 still images. Can be embedded to the Apartment Card, your website and 3rd Party Platforms.',
    image: <StyledCardImage src={img11} alt='img11' />,
    price: 7300,
    totalPrice: 7300,
    initialHosting: 4,
    hosting: 4,
  },
  {
    id: '12',
    title: 'Model Unit Virtual Tour',
    description:
      'Can be embedded to the Apartment Card, your website and 3rd Party Platforms',
    image: <StyledCardImage src={img12} alt='img12' />,
    price: 4400,
    totalPrice: 4400,
    initialHosting: 4,
    hosting: 4,
  },
  {
    id: '13',
    title: 'Amenity/Model Unit Still Renderendings',
    description: 'Part of the Rendered Virtual Tours',
    image: <StyledCardImage src={img13} alt='img13' />,
    price: 0,
    totalPrice: 0,
    initialHosting: 0,
    hosting: 0,
  },
];

export const SECTION_TITLE = 'Preconstruction Add-ons';
