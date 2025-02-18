import { ReactNode } from "react";
import { tv } from "tailwind-variants";

type ModalProps = {
  open: boolean;
  onClose: () => void;  
  children: ReactNode;
};

const modalOverlay = tv({
  base: "fixed mt-40 inset-0 z-50 flex justify-center items-center bg-black bg-opacity-30 ease-in-out transition-opacity duration-200",
  variants: {
    open: {
      true: "opacity-100 visible",
      false: "opacity-0 invisible",
    },
  },
});

const modalBox = tv({
  base: "fixed top-36 left-8 w-full z-50 max-w-5xl bg-white rounded-lg transform transition-all duration-200 max-h-[90vh] overflow-hidden",
  variants: {
    open: {
      true: "scale-100 opacity-100 translate-y-0",
      false: "scale-95 opacity-0 translate-y-4",
    },
  },
});

export default function Modal({ open, onClose, children }: ModalProps) {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={modalOverlay({ open })} role="dialog" onClick={handleOverlayClick}>
      <div className={modalBox({ open })} onClick={(e) => e.stopPropagation()}>        
        <div className="max-h-[75vh] overflow-y-auto">{open && children}</div>
      </div>
    </div>
  );
}
