import { img10, img11, img12, img13, img9 } from 'assets/images';
import { StyledCardImage } from 'components/sections/ContentSection/styled';

export const CARDS_CONTENT = [
  {
    id: '9',
    title: '3D rendering building integration',
    description:
      '3D models of community places inside an aerial virtual tour with interactive floor/apartment selection before community doors are open.',
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
      'These rendered virtual tours will be integrated into the widget and can be used on your website and embedded separately as iFrame links. Each area will include 3 still renderings.',
    image: <StyledCardImage src={img11} alt='img11' />,
    price: 5500,
    totalPrice: 5500,
    initialHosting: 4,
    hosting: 4,
  },
  {
    id: '11',
    title: 'Exterior Amenity Virtual Tour',
    description:
      'These rendered virtual tours will be integrated into the widget and can be used on your website and embedded separately as iFrame links. Each area will include 3 still renderings.',
    image: <StyledCardImage src={img12} alt='img12' />,
    price: 7300,
    totalPrice: 7300,
    initialHosting: 4,
    hosting: 4,
  },
  {
    id: '12',
    title: 'Model Unit Virtual Tour',
    description:
      'These rendered virtual tours will be integrated into the widget and can be used on your website and embedded separately as iFrame links. Each unit will include 3 still renderings.',
    image: <StyledCardImage src={img10} alt='img10' />,
    price: 4400,
    totalPrice: 4400,
    initialHosting: 4,
    hosting: 4,
  },
  {
    id: '13',
    title: 'Amenity/Model Unit Still Renderendings',
    description:
      'Included with each rendered virtual tour. Can be downloaded in high resolution for web and 3rd party pre-leasing use cases.',
    image: <StyledCardImage src={img13} alt='img13' />,
    price: 0,
    totalPrice: 0,
    initialHosting: 0,
    hosting: 0,
  },
];

export const SECTION_TITLE = 'Preconstruction Add-ons';

export const FREE_ADDONS_AUTO_ADDED_ITEM = {
  id: '13',
  title: 'Amenity/Model Unit Still Renderendings',
  description: 'Part of the Rendered Virtual Tours',
  image: <StyledCardImage src={img13} alt='img13' />,
  price: 0,
  totalPrice: 0,
  initialHosting: 0,
  hosting: 0,
};
