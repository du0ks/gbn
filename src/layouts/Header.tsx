import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import MembershipButton from '@/components/MembershipButton';
import { asset, link } from '@/lib/paths';

const navItems = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/etkinlikler', label: 'Etkinlikler' },
  { href: '/iletisim', label: 'İletişim' },
];

/**
 * GBN header — hero üzerinde şeffaf, kaydırınca arka plan gelir.
 */
export default function Header({ pathname }: { pathname: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isSolid = scrolled || isMobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="flex h-16 md:h-20 items-center justify-between gap-6">
          <a href={link('/')} className="flex min-w-0 shrink items-center" aria-label="GBN ana sayfa">
            <img
              src={asset('images/logo.webp')}
              alt="Güç Birliği Networking — GBN"
              width={601}
              height={248}
              className="block h-auto max-h-10 md:max-h-14 w-auto max-w-full object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Ana menü">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={link(item.href)}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-150 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full ${
                  pathname === item.href
                    ? 'text-foreground after:w-full'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <MembershipButton
              className="hidden sm:inline-flex items-center gap-2 bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-150 hover:bg-accent active:scale-[0.98]"
            >
              Üye Ol
            </MembershipButton>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${
                isSolid ? 'hover:bg-muted' : 'hover:bg-black/5'
              }`}
              aria-label={isMobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Mobil menü">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={link(item.href)}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2.5 text-sm font-medium transition-colors ${
                  pathname === item.href ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                {item.label}
              </a>
            ))}
            <MembershipButton
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Üye Ol
            </MembershipButton>
          </nav>
        </div>
      )}
    </header>
  );
}
