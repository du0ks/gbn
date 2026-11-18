import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { BASE } from './lib/paths';
import { notFound, pages } from './routes';

export { BASE, notFound, pages };

export function render(route: string) {
  // route: '/etkinlikler' gibi site içi yol; App tarayıcı adresini beklediği için BASE ekle
  const pathname = BASE.slice(0, -1) + route;
  return renderToString(
    <StrictMode>
      <App pathname={pathname} />
    </StrictMode>,
  );
}
