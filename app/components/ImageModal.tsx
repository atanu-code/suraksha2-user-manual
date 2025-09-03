import { useState, type FC } from "react";

interface ImageModalProps {
    thumbnail: string;
    alt: string;
}

export const ImageModal: FC<ImageModalProps> = ({ thumbnail, alt }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <span className="cursor-pointer" onClick={openModal}>
                <img src={thumbnail} alt={alt} className="doc-image" />
            </span>
            {isOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={thumbnail} alt={alt} />
                        <button className="close-btn" onClick={closeModal}>
                            ✖
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
