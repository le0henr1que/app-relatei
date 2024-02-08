import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import { useDialogModal } from '@/store/ducks/dialog-modal/hooks/actions';

interface AlertProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  initialState: boolean;
}

const Alert: React.FC<AlertProps> = ({
  isOpen,
  onClose,
  title,
  description,
  initialState,
}) => {
  // const { handleModal } = useDialogModal();

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
        <Dialog.Content
          onOpenAutoFocus={(event) => {
            event.preventDefault();
          }}
          className="fixed bg-white py-8 px-10 text-white top-1/2 left-1/2 w-[480px] rounded-lg -translate-x-1/2 -translate-y-1/2  "
        >
          <Dialog.Title className="text-3xl text-white font-black">
            {title}
          </Dialog.Title>
          <Dialog.Description className="text-xl text-white">
            {description}
          </Dialog.Description>
          <button className="btn btn-primary" onClick={onClose}>
            fechar modal
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Alert;
