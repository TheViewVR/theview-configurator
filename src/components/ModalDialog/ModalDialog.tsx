import { FC } from 'react';

import { Close } from 'assets/icons';
import Sum from 'components/Sum/Sum';
import NumberInput from 'components/NumberInput/NumberInput';
import { StyledButton } from 'components/Card/styled';

import { IModalDialogProps } from './types';
import {
  Modal,
  ModalContentWrapper,
  ModalSubtitle,
  ModalTitle,
} from './styled';

const ModalDialog: FC<IModalDialogProps> = ({
  cardContent,
  isModalOpened,
  isAddButtonVisible,
  handleCloseModal,
  handleAddButtonClick,
  title,
  ...props
}) => (
  <Modal
    title={title}
    visible={isModalOpened}
    centered
    onCancel={handleCloseModal}
    footer={null}
    closeIcon={<Close />}
    width={920}
    {...props}
  >
    <ModalContentWrapper>
      <div style={{ display: 'flex', gap: '28px' }}>
        <div style={{ width: '313px' }}>
          <ModalTitle>{cardContent.title}</ModalTitle>
          <ModalSubtitle>{cardContent.description}</ModalSubtitle>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: '28px',
            }}
          >
            <Sum
              price={cardContent.price}
              hosting={cardContent.hosting}
              isCardView={true}
            />
            {isAddButtonVisible ? (
              <StyledButton onClick={handleAddButtonClick}>Add</StyledButton>
            ) : (
              <NumberInput cardContent={cardContent} />
            )}
          </div>
        </div>
        <div style={{ width: '483px', height: '362px' }}>
          <div style={{ maxHeight: '100%', maxWidth: '100%' }}>
            {cardContent.image}
          </div>
        </div>
      </div>
    </ModalContentWrapper>
  </Modal>
);

export default ModalDialog;
