import { Linkedin, Instagram, MapPin, Phone, Printer, Mail } from 'lucide-react';
import MembershipButton from '@/components/MembershipButton';
import { asset, link } from '@/lib/paths';
import { social } from '@/content';

const company = {
  name: 'İnovakademi Eğitim ve Dan. Hiz. Ltd. Şti.',
  address:
    'Cevizli Mahallesi Mustafa Kemal Caddesi Hukukçular Towers A Blok No: 66 A Kat: 18 D.No: 111 Kartal / İstanbul',
  tel: '+90 (216) 709 73 32',
  telHref: 'tel:+902167097332',
  fax: '0850 522 34 03',
  email: 'gbn@inovakademi.com',
};

const pages = [
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/etkinlikler', label: 'Etkinlikler' },
  { href: '#iletisim', label: 'İletişim' },
];

const socials = [
  { href: social.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: social.instagram, label: 'Instagram', Icon: Instagram },
];

const headingClass = 'text-sm font-semibold text-foreground';
const linkClass = 'text-sm text-muted-foreground transition-colors duration-150 hover:text-primary';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-content px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <img
              src={asset('images/logo.webp')}
              alt="Güç Birliği Networking — GBN"
              width={509}
              height={200}
              className="block h-16 w-auto"
              loading="lazy"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              KOBİ sahipleri ve girişimciler için kurulan iş ağı.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-150 hover:border-primary hover:text-primary"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <nav className="lg:col-span-2" aria-label="Alt menü">
            <h3 className={headingClass}>Sayfalar</h3>
            <ul className="mt-4 space-y-2.5">
              {pages.map((item) => (
                <li key={item.href}>
                  <a href={link(item.href)} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <MembershipButton className={linkClass + ' text-left'}>Üyelik</MembershipButton>
              </li>
            </ul>
          </nav>

          <div id="iletisim" className="scroll-mt-24 sm:col-span-2 lg:col-span-6">
            <h3 className={headingClass}>İletişim</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                <span className="leading-relaxed">{company.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                <a href={company.telHref} className={linkClass}>
                  {company.tel}
                </a>
              </li>
              <li className="flex gap-3">
                <Printer size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                <span>Faks: {company.fax}</span>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                <a href={'mailto:' + company.email} className={linkClass}>
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p suppressHydrationWarning>
            © {currentYear} Güç Birliği Networking (GBN). Tüm hakları saklıdır.
          </p>
          <p>{company.name}</p>
        </div>
      </div>
    </footer>
  );
}
