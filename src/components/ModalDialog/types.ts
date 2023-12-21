import { ReactNode } from 'react';
import { ModalProps } from 'antd';
import { ICardContent } from 'components/Card/Card';

export interface IModalDialogProps extends ModalProps {
  isModalOpened: boolean;
  handleAddButtonClick: () => void;
  isCardSelected?: boolean;
  cardContent: ICardContent;
  handleCloseModal?: () => void;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
}
