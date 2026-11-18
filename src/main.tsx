import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import { resolvePage } from './routes';
import './styles/globals.css';

const container = document.getElementById('app')!;
const pathname = window.location.pathname;
const app = (
  <StrictMode>
    <App pathname={pathname} />
  </StrictMode>
);

// Önceden üretilmiş HTML bu sayfaya aitse hydrate et; değilse (ör. sunucu bilinmeyen
// adreste index.html döndürdüyse) sıfırdan çiz.
const prerendered = container.firstElementChild as HTMLElement | null;
if (prerendered && prerendered.dataset.page === resolvePage(pathname).key) {
  hydrateRoot(container, app);
} else {
  container.innerHTML = '';
  createRoot(container).render(app);
}
