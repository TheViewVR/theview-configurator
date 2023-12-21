import { img1, img2, img3, img4, img5, img6, img7, img8 } from 'assets/images';

import { StyledCardImage } from './styled';

export const CARDS_CONTENT = [
  {
    id: '1',
    title: '3D floor plans',
    description:
      'Page you can share with all your vendors so they can embed all content separately (item-by-item)',
    image: <StyledCardImage src={img1} alt='img1' />,
    price: 150,
    totalPrice: 150,
    initialHosting: 0,
    hosting: 0,
  },
  {
    id: '2',
    title: 'Interactive 3D floor plan',
    description:
      'Can be embedded to the Apartment Card, your website and 3rd Party Platforms',
    image: <StyledCardImage src={img2} alt='img2' />,
    price: 300,
    totalPrice: 300,
    initialHosting: 1,
    hosting: 1,
  },
  {
    id: '3',
    title: 'Amenity Virtual Tour',
    description:
      'HDR 360 tour, delivers with the set of 3-5 still images. Can be embedded to the Apartment Card, your website and 3rd Party Platforms.',
    image: <StyledCardImage src={img3} alt='img3' />,
    price: 300,
    totalPrice: 300,
    initialHosting: 4,
    hosting: 4,
  },
  {
    id: '4',
    title: 'Unit Level Virtual Tour',
    description:
      'HDR 360 tour, delivers with the set of 3-5 still images. Can be embedded to the Apartment Card, your website and 3rd Party Platforms.',
    image: <StyledCardImage src={img4} alt='img4' />,
    price: 300,
    totalPrice: 300,
    initialHosting: 4,
    hosting: 4,
  },
  {
    id: '5',
    title: 'Amenity/Model Unit Still Photos',
    description: 'Part of the Virtual Tours',
    image: <StyledCardImage src={img5} alt='img5' />,
    price: 0,
    totalPrice: 0,
    initialHosting: 0,
    hosting: 0,
  },
  {
    id: '6',
    title: 'Interactive Site Map',
    description:
      'Can be embedded to the Apartment Card, your website and 3rd Party Platforms',
    image: <StyledCardImage src={img6} alt='img6' />,
    price: 1000,
    totalPrice: 1000,
    initialHosting: 20,
    hosting: 20,
  },
  {
    id: '7',
    title: '2D floor plans',
    description:
      'HDR 360 tour, delivers with the set of 3-5 still images. Can be embedded to the Apartment Card, your website and 3rd Party Platforms.',
    image: <StyledCardImage src={img7} alt='img7' />,
    price: 90,
    totalPrice: 90,
    initialHosting: 0,
    hosting: 0,
  },
  {
    id: '8',
    title: 'Virtually staged Virtual tour',
    description:
      'HDR 360 tour, delivers with the set of 3-5 still images. Can be embedded to the Apartment Card, your website and 3rd Party Platforms.',
    image: <StyledCardImage src={img8} alt='img8' />,
    price: 1200,
    totalPrice: 1200,
    initialHosting: 0,
    hosting: 0,
  },
];
