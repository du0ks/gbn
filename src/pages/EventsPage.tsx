import { CalendarDays, Instagram, Linkedin, MapPin } from 'lucide-react';
import { Reveal } from '@/components/decor';
import PageHero from '@/components/PageHero';
import { events, social } from '@/content';
import { asset } from '@/lib/paths';

const detailIcons = { 'detail-date': CalendarDays, 'detail-place': MapPin } as const;

export default function EventsPage() {
  const ev = events.upcoming;

  return (
    <main>
      <PageHero {...events.hero} />

      {/* YAKLAŞAN ETKİNLİK */}
      <section className="py-xxl">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <Reveal>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
              <span className="h-2 w-2 bg-primary" aria-hidden="true" />
              {ev.label}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <article className="mt-6 grid grid-cols-1 overflow-hidden border border-border bg-card md:grid-cols-12">
              {/* Tarih bloğu */}
              <div className="relative flex flex-col justify-between overflow-hidden bg-secondary p-xl text-white md:col-span-4">
                <img
                  src={asset('images/events.webp')}
                  alt=""
                  width={1920}
                  height={1281}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-30"
                />
                <div className="relative flex items-start gap-3">
                  <span className="font-heading text-7xl font-extrabold leading-none lg:text-8xl">{ev.day}</span>
                  <span className="mt-2 flex flex-col font-heading text-xl font-bold uppercase tracking-wider">
                    {ev.month}
                    <span className="text-primary">{ev.year}</span>
                  </span>
                </div>
                <p className="relative mt-10 text-sm font-semibold uppercase tracking-widest text-white/80">
                  {ev.weekday}
                </p>
              </div>

              {/* Detaylar */}
              <div className="p-xl md:col-span-8">
                <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {ev.title}
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">{ev.description}</p>

                <ol className="mt-8 grid grid-cols-1 gap-base sm:grid-cols-3">
                  {ev.program.map((step, i) => (
                    <li key={step.id} className="border-t-2 border-primary pt-4">
                      <span className="font-heading text-sm font-bold text-primary">0{i + 1}</span>
                      <h3 className="mt-1 font-heading text-lg font-bold text-foreground">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                    </li>
                  ))}
                </ol>

                <dl className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:gap-10">
                  {ev.details.map((d) => {
                    const Icon = detailIcons[d.id];
                    return (
                      <div key={d.id} className="flex items-start gap-3">
                        <Icon size={18} className="mt-0.5 shrink-0 text-primary" />
                        <div>
                          <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                            {d.label}
                          </dt>
                          <dd className="mt-1 font-medium text-foreground">{d.value}</dd>
                        </div>
                      </div>
                    );
                  })}
                </dl>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* TAKİP ET */}
      <section className="pb-xxl">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <Reveal>
            <div className="relative flex flex-col items-start justify-between gap-8 overflow-hidden bg-primary p-xl text-primary-foreground md:flex-row md:items-center">
              <div className="max-w-xl">
                <h2 className="font-heading text-3xl font-bold tracking-tight">{events.follow.title}</h2>
                <p className="mt-3 leading-relaxed text-primary-foreground/85">{events.follow.description}</p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-semibold text-primary transition-all duration-150 hover:bg-foreground hover:text-white active:scale-[0.98]"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-white/50 px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:border-white hover:bg-white hover:text-primary"
                >
                  <Instagram size={18} />
                  Instagram
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
