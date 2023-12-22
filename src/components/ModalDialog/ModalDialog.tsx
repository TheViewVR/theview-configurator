import { FC } from 'react';

import { Close } from 'assets/icons';
import Sum from 'components/Sum/Sum';
import NumberInput from 'components/NumberInput/NumberInput';
import { StyledButton } from 'components/Card/styled';

import { IModalDialogProps } from './types';
import {
  InnerWrapper,
  Modal,
  ModalContentWrapper,
  ModalSectionWrapper,
  ModalSubtitle,
  ModalTitle,
  SumWrapper,
} from './styled';
import { ADD_BUTTON_TEXT } from 'constants/common';

const ModalDialog: FC<IModalDialogProps> = ({
  cardContent,
  isModalOpened,
  isAddButtonVisible,
  handleCloseModal,
  handleAddButtonClick,
  title,
  ...props
}) => {
  const { title: cardContentTitle, description } = cardContent;
  return (
    <Modal
      title={title}
      open={isModalOpened}
      centered
      onCancel={handleCloseModal}
      footer={null}
      closeIcon={<Close />}
      width={920}
      {...props}
    >
      <ModalContentWrapper>
        <InnerWrapper>
          <ModalSectionWrapper>
            <ModalTitle>{cardContentTitle}</ModalTitle>
            <ModalSubtitle>{description}</ModalSubtitle>
            <SumWrapper>
              <Sum
                price={cardContent.price}
                hosting={cardContent.hosting}
                isCardView={true}
              />
              {isAddButtonVisible ? (
                <StyledButton onClick={handleAddButtonClick}>
                  {ADD_BUTTON_TEXT}
                </StyledButton>
              ) : (
                <NumberInput cardContent={cardContent} isModalView={true} />
              )}
            </SumWrapper>
          </ModalSectionWrapper>
          <ImageSectionWrapper>
            <div style={{ maxHeight: '100%', maxWidth: '100%' }}>
              {cardContent.image}
            </div>
          </ImageSectionWrapper>
        </InnerWrapper>
      </ModalContentWrapper>
    </Modal>
  );
};

export default ModalDialog;
