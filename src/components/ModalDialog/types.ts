import { ReactNode } from 'react';
import { ModalProps } from 'antd';
import { ICardContent } from 'components/Card/Card';

export interface IModalDialogProps extends ModalProps {
  isModalOpened: boolean;
  handleAddButtonClick: () => void;
  cardContent: ICardContent;
  handleCloseModal?: () => void;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  isAddButtonVisible?: boolean;
}