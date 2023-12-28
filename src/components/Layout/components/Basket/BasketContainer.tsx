import { FC } from 'react';
import { Item, useCart } from 'react-use-cart';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

import TableContextProvider from './context';
import Basket from './Basket';

const BasketContainer: FC = () => {
  const { items, cartTotal } = useCart();

  const calculateHosting = (items: Item[]) =>
    items.reduce(
      (total, item) => total + item.quantity! * item['initialHosting'],
      0,
    );

  const totalHosting = calculateHosting(items);

  const handleDownloadPdf = async (Component: HTMLDivElement) => {
    const canvas = await html2canvas(Component);
    const { offsetWidth: componentWidth, offsetHeight: componentHeight } =
      Component;
    const orientation = componentWidth >= componentHeight ? 'l' : 'p';

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ orientation, unit: 'px' });

    pdf.internal.pageSize.width = componentWidth;
    pdf.internal.pageSize.height = componentHeight;

    pdf.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
    pdf.save('total-package.pdf');
  };

  return (
    <TableContextProvider>
      <Basket
        totalHosting={totalHosting}
        cartTotal={cartTotal}
        items={items}
        handleDownloadPdf={handleDownloadPdf}
      />
    </TableContextProvider>
  );
};

export default BasketContainer;
