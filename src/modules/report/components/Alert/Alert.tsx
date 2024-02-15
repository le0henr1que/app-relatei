import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

interface AlertProps {
  isOpen: boolean;
  onClose: () => void;
  // title: string;
  // description: string;
  // initialState: boolean;
  children: any;
}

const Alert: React.FC<AlertProps> = ({
  isOpen,
  onClose,

  children,
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
          className="fixed bg-white py-8 p-[24px] px-10  top-1/2 left-1/2 w-[667px] rounded-lg -translate-x-1/2 -translate-y-1/2  "
        >
          {children}
          {/* <Dialog.Title className="text-3xl text-white font-black">
            {title}
          </Dialog.Title>
          <Dialog.Description className="text-xl text-white">
            {description}
          </Dialog.Description>
          <button className="btn btn-primary" onClick={onClose}>
            fechar modal
          </button> */}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Alert;

