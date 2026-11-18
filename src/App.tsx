import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import Toast from '@/components/Toast';
import { resolvePage } from '@/routes';

export default function App({ pathname }: { pathname: string }) {
  const page = resolvePage(pathname);
  const { Component } = page;

  return (
    <div className="min-h-screen bg-background flex flex-col" data-page={page.key}>
      <Header pathname={page.key === '404' ? '' : page.path} />
      <Component />
      <Footer />
      <Toast />
    </div>
  );
}
