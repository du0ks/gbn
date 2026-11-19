import type { ComponentType } from 'react';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import EventsPage from '@/pages/EventsPage';
import NotFoundPage from '@/pages/NotFoundPage';
import { routeFromPathname } from '@/lib/paths';

export interface PageRoute {
  key: string;
  path: string;
  Component: ComponentType;
  title: string;
  description: string;
}

const SUFFIX = 'Güç Birliği Networking';

export const pages: PageRoute[] = [
  {
    key: 'home',
    path: '/',
    Component: HomePage,
    title: "GBN — Güç Birliği Networking | Türkiye'nin İş Ağı",
    description:
      'KOBİ sahipleri ve girişimciler için Türkiye merkezli iş ağı. Kontaklarını aç, güvenilir iş ortaklıklarıyla somut sonuçlar elde et.',
  },
  {
    key: 'about',
    path: '/hakkimizda',
    Component: AboutPage,
    title: `Hakkımızda — ${SUFFIX}`,
    description:
      '34 yıllık networking deneyimiyle kurulan GBN, KOBİ sahiplerini ve girişimcileri güvene dayalı bir iş ağında buluşturur. Vizyonumuz, misyonumuz ve değerlerimiz.',
  },
  {
    key: 'events',
    path: '/etkinlikler',
    Component: EventsPage,
    title: `Etkinlikler — ${SUFFIX}`,
    description:
      "GBN Aylık Networking Buluşması 21 Aralık 2026'da. Tanışma toplantısı, spesifik talepler ve konuk konuşmacı sunumu.",
  },
];

export const notFound: PageRoute = {
  key: '404',
  path: '/404',
  Component: NotFoundPage,
  title: `Sayfa bulunamadı — ${SUFFIX}`,
  description: 'Aradığın sayfa bulunamadı.',
};

export function resolvePage(pathname: string): PageRoute {
  const route = routeFromPathname(pathname);
  return pages.find((p) => p.path === route) ?? notFound;
}
