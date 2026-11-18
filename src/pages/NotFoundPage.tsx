import { ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted px-4 pt-20">
      <div className="max-w-xl text-center">
        <p className="font-heading text-7xl font-extrabold text-primary">404</p>
        <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground">
          Bu sayfa henüz hazır değil
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Aradığın sayfa bulunamadı ya da hazırlanıyor. Ana sayfadan devam edebilirsin.
        </p>
        <a
          href="/"
          className="group mt-8 inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-all duration-150 hover:bg-accent active:scale-[0.98]"
        >
          <ArrowLeft size={18} className="transition-transform duration-150 group-hover:-translate-x-1" />
          Ana Sayfaya Dön
        </a>
      </div>
    </main>
  );
}
