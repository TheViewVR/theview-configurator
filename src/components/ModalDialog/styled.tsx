import styled from 'styled-components';
import { Modal as AntdModal } from 'antd';

export const Modal = styled(AntdModal)({
  '& .ant-modal-content': {
    padding: '48px',
    height: '458px',
    borderRadius: '12px',
    boxShadow:
      '0px 20px 40px 0px rgba(0, 34, 102, 0.10), 0px 4px 8px 0px rgba(0, 34, 102, 0.05), 0px 0px 0px 1px rgba(34, 80, 252, 0.20)',
  },
  '& .ant-modal-close:hover': {
    backgroundColor: 'transparent',
  },
  '& .ant-modal-close-x': {
    height: '28px',
    width: '28px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
  },
  '& .ant-modal-close-x:hover': {
    backgroundColor: 'rgba(34, 80, 252, 0.16)',
  },
  '& .ant-modal-close-x:active': {
    backgroundColor: 'rgba(34, 80, 252, 0.20)',
  },
});

export const ModalContentWrapper = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100%',
  fontFamily: 'Poppins, sans-serif',
});

export const ModalTitle = styled('p')({
  margin: '0 0 24px 0',
  fontSize: '20px',
  fontWeight: '600',
  lineHeight: '32px',
  color: 'rgba(0, 0, 0, 0.90)',
});

export const ModalSubtitle = styled('p')({
  margin: 0,
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '26px',
  color: 'rgba(0, 0, 0, 0.50)',
  marginBottom: '32px',
});

export const InnerWrapper = styled('div')({
  display: 'flex',
  gap: '28px',
});

export const ModalSectionWrapper = styled('div')({
  width: '313px',
});

export const SumWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '28px',
});

export const ImageSectionWrapper = styled('div')({
  width: '483px',
  height: '362px',
});
