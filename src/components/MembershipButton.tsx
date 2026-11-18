import type { ReactNode } from 'react';
import { showToast } from './Toast';

export const MEMBERSHIP_MESSAGE = 'Üyelik başvuruları çok yakında açılacak.';

/**
 * Üyelik butonları şimdilik görünür ama bir sayfa açmaz; tıklanınca bilgi mesajı gösterir.
 * Başvurular açıldığında bu bileşeni <a href={link('/uyelik')}> ile değiştirmek yeterli.
 */
export default function MembershipButton({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onClick?.();
        showToast(MEMBERSHIP_MESSAGE);
      }}
    >
      {children}
    </button>
  );
}
