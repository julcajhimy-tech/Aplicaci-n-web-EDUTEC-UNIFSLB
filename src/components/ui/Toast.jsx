import { CheckCircle2, CircleAlert, X } from 'lucide-react';
import { useEffect } from 'react';

function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) {
      return undefined;
    }

    const timeout = window.setTimeout(() => {
      onClose();
    }, 3200);

    return () => window.clearTimeout(timeout);
  }, [toast, onClose]);

  if (!toast) {
    return null;
  }

  const Icon = toast.type === 'success' ? CheckCircle2 : CircleAlert;

  return (
    <div className={`toast ${toast.type === 'success' ? 'is-success' : 'is-error'}`}>
      <div className="toast-copy">
        <Icon size={18} />
        <span>{toast.message}</span>
      </div>
      <button type="button" className="toast-close" aria-label="Cerrar" onClick={onClose}>
        <X size={16} />
      </button>
    </div>
  );
}

export default Toast;
