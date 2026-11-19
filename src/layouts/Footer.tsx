import { Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import MembershipButton from '@/components/MembershipButton';
import { asset, link } from '@/lib/paths';
import { social } from '@/content';

const linkGroups = [
  {
    title: 'GBN',
    links: [
      { href: '/hakkimizda', label: 'Hakkımızda' },
      { href: '/etkinlikler', label: 'Etkinlikler' },
    ],
  },
  {
    title: 'İletişim',
    links: [{ href: '/iletisim', label: 'Bize Ulaşın' }],
  },
];

const socials = [
  { href: social.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: social.instagram, label: 'Instagram', Icon: Instagram },
];

const linkClass =
  'group inline-flex items-center gap-1 text-sm text-secondary-foreground/80 transition-colors duration-150 hover:text-primary-foreground';

/**
 * GBN footer — koyu antrasit blok ve kırmızı bağlantı motifi.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-secondary text-secondary-foreground overflow-hidden">
      <svg
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-20"
        viewBox="0 0 600 400"
        fill="none"
        aria-hidden="true"
      >
        <g stroke="hsl(var(--primary))" strokeWidth="1.5">
          <line x1="80" y1="60" x2="240" y2="160" />
          <line x1="240" y1="160" x2="180" y2="330" />
          <line x1="240" y1="160" x2="430" y2="90" />
          <line x1="430" y1="90" x2="540" y2="250" />
          <line x1="240" y1="160" x2="540" y2="250" />
          <line x1="80" y1="60" x2="430" y2="90" />
        </g>
        <g fill="hsl(var(--primary))">
          <circle cx="80" cy="60" r="6" />
          <circle cx="240" cy="160" r="8" />
          <circle cx="180" cy="330" r="5" />
          <circle cx="430" cy="90" r="6" />
          <circle cx="540" cy="250" r="7" />
        </g>
      </svg>

      <div className="relative mx-auto max-w-content px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <img
              src={asset('images/logo-dark.webp')}
              alt="Güç Birliği Networking — GBN"
              width={601}
              height={248}
              className="block h-auto max-h-12 w-auto max-w-full object-contain"
              loading="lazy"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-secondary-foreground/70">
              Kontaklarını aç, bağlantın güçlensin. Türkiye'nin networkü: KOBİ sahipleri ve
              girişimciler için kurulan iş ağı.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center border border-secondary-foreground/20 text-secondary-foreground/70 transition-colors duration-150 hover:border-primary hover:text-primary"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title} className="md:col-span-3">
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
                {group.title}
              </h3>
              <nav className="mt-4 flex flex-col gap-2.5" aria-label={group.title + ' bağlantıları'}>
                {group.links.map((item) => (
                  <a
                    key={item.href}
                    href={link(item.href)}
                    className={linkClass}
                  >
                    {item.label}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition-opacity duration-150 group-hover:opacity-100"
                    />
                  </a>
                ))}
                {group.title === 'GBN' && (
                  <MembershipButton className={linkClass + ' text-left'}>
                    Üyelik
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition-opacity duration-150 group-hover:opacity-100"
                    />
                  </MembershipButton>
                )}
              </nav>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-secondary-foreground/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-secondary-foreground/60" suppressHydrationWarning>
            © {currentYear} Güç Birliği Networking (GBN). Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-secondary-foreground/60">Networkünü aç — işin büyüsün.</p>
        </div>
      </div>
    </footer>
  );
}
