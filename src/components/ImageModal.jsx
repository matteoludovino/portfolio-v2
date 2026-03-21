import { useEffect } from 'react';

export default function ImageModal({ image, alt, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="img-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Preview: ${alt}`}
    >
      <div
        className="img-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="img-modal-close"
          onClick={onClose}
          aria-label="Fechar preview"
        >
          <i className="fas fa-xmark"></i>
        </button>

        <img
          src={image}
          alt={alt}
          className="img-modal-image"
        />
      </div>
    </div>
  );
}
