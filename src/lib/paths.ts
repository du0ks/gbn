/**
 * Site hem alan adının kökünde (gbntr.com/) hem de alt klasörde (ör. GitHub Pages: /gbn/)
 * çalışabilsin diye tüm iç linkler ve görseller bu yardımcılardan geçer.
 */
export const BASE = import.meta.env.BASE_URL; // her zaman "/" ile biter

/** Site içi sayfa linki: link('/etkinlikler') -> '/gbn/etkinlikler/' */
export function link(path: string) {
  if (path.startsWith('#')) return path;
  const clean = path.replace(/^\/+/, '').replace(/\/+$/, '');
  return clean ? `${BASE}${clean}/` : BASE;
}

/** public/ altındaki dosya: asset('images/hero.webp') */
export function asset(path: string) {
  return BASE + path.replace(/^\/+/, '');
}

/** Tarayıcıdaki adresi site içi yola çevirir: '/gbn/etkinlikler/' -> '/etkinlikler' */
export function routeFromPathname(pathname: string) {
  let p = pathname;
  if (BASE !== '/' && p.startsWith(BASE.slice(0, -1))) p = p.slice(BASE.length - 1);
  p = p.replace(/\/index\.html$/, '/').replace(/\/+$/, '');
  return p === '' ? '/' : p;
}
