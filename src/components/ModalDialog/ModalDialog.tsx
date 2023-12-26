import { FC } from 'react';

import { Close } from 'assets/icons';
import Sum from 'components/Sum';
import NumberInput from 'components/NumberInput';
import { StyledButton } from 'components/Card/styled';
import { ADD_BUTTON_TEXT } from 'constants/common';

import { IModalDialogProps } from './types';
import {
  ImageSectionWrapper,
  ImageWrapper,
  InnerWrapper,
  Modal,
  ModalContentWrapper,
  ModalSectionWrapper,
  ModalSubtitle,
  ModalTitle,
  SumWrapper,
} from './styled';

const ModalDialog: FC<IModalDialogProps> = ({
  cardContent,
  isModalOpened,
  isAddButtonVisible,
  isAddButtonDisabled,
  handleCloseModal,
  handleAddButtonClick,
  title,
  ...props
}) => {
  const {
    title: cardContentTitle,
    description,
    price,
    hosting,
    image,
  } = cardContent;
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
              <Sum price={price} hosting={hosting} isCardView={true} />
              {isAddButtonVisible ? (
                <StyledButton
                  disabled={isAddButtonDisabled}
                  onClick={handleAddButtonClick}
                >
                  {ADD_BUTTON_TEXT}
                </StyledButton>
              ) : (
                <NumberInput cardContent={cardContent} isModalView={true} />
              )}
            </SumWrapper>
          </ModalSectionWrapper>
          <ImageSectionWrapper>
            <ImageWrapper>{image}</ImageWrapper>
          </ImageSectionWrapper>
        </InnerWrapper>
      </ModalContentWrapper>
    </Modal>
  );
};

export default ModalDialog;
