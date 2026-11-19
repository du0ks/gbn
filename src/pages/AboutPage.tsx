import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { CornerAccent, Reveal } from '@/components/decor';
import MembershipButton from '@/components/MembershipButton';
import PageHero from '@/components/PageHero';
import { about } from '@/content';
import { asset, link } from '@/lib/paths';

export default function AboutPage() {
  return (
    <main>
      <PageHero {...about.hero} />

      {/* HİKÂYE + RAKAMLAR */}
      <section className="py-xxl">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-xxl lg:grid-cols-2 lg:gap-xl">
            <div>
              <Reveal>
                <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
                  <span className="h-2 w-2 bg-primary" aria-hidden="true" />
                  {about.story.kicker}
                </p>
                <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {about.story.title}
                </h2>
              </Reveal>
              {about.story.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.1 + i * 0.08}>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">{p}</p>
                </Reveal>
              ))}
            </div>

            <div className="relative">
              <Reveal>
                <div className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -right-3 -top-3 h-16 w-16 border-r-[3px] border-t-[3px] border-primary"
                  />
                  <img
                    src={asset('images/community.webp')}
                    alt="İş insanları bir toplantıda el sıkışıyor"
                    width={1500}
                    height={1001}
                    loading="lazy"
                    className="h-64 w-full object-cover object-[center_30%] sm:h-80"
                  />
                </div>
              </Reveal>
              <div className="mt-base grid grid-cols-2 gap-base">
                {about.stats.map((stat, i) => (
                  <Reveal key={stat.id} delay={i * 0.08}>
                    <div className="h-full border-l-2 border-primary pl-4">
                      <p className="font-heading text-3xl font-extrabold leading-none text-foreground sm:text-4xl">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-sm leading-snug text-muted-foreground">{stat.label}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VİZYON & MİSYON */}
      <section className="pb-xxl">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <Reveal>
              <div className="relative h-full overflow-hidden bg-primary p-xl text-primary-foreground">
                <p className="text-sm font-bold uppercase tracking-widest text-primary-foreground/80">
                  {about.vision.title}
                </p>
                <p className="mt-6 font-heading text-2xl font-bold leading-snug sm:text-3xl">
                  {about.vision.text}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full bg-secondary p-xl text-secondary-foreground">
                <p className="text-sm font-bold uppercase tracking-widest text-primary">
                  {about.mission.title}
                </p>
                <p className="mt-6 text-lg leading-relaxed text-secondary-foreground/85">
                  {about.mission.text}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DEĞERLER */}
      <section className="bg-muted py-xxl">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <Reveal>
            <h2 className="max-w-2xl font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {about.values.title}
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">{about.values.subtitle}</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-base sm:grid-cols-2 lg:grid-cols-4">
            {about.values.items.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.08}>
                <article className="group relative flex h-full flex-col border border-border bg-card p-base transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                  <CornerAccent />
                  <span className="font-heading text-sm font-bold text-primary">0{i + 1}</span>
                  <h3 className="mt-3 font-heading text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BULUŞMALAR */}
      <section className="relative overflow-hidden bg-secondary py-xxl text-secondary-foreground">
        <svg
          className="pointer-events-none absolute -right-10 top-0 h-full w-2/3 opacity-15"
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
          </g>
          <g fill="hsl(var(--primary))">
            <circle cx="80" cy="60" r="6" />
            <circle cx="240" cy="160" r="8" />
            <circle cx="180" cy="330" r="5" />
            <circle cx="430" cy="90" r="6" />
            <circle cx="540" cy="250" r="7" />
          </g>
        </svg>
        <div className="relative mx-auto max-w-content px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-xl md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
                <span className="h-2 w-2 bg-primary" aria-hidden="true" />
                {about.meetings.kicker}
              </p>
              <h2 className="mt-6 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
                {about.meetings.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-7">
              <p className="text-lg leading-relaxed text-secondary-foreground/80">{about.meetings.text}</p>
              <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-secondary-foreground/60">
                {about.meetings.sectorsLabel}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {about.meetings.sectors.map((sector) => (
                  <li
                    key={sector}
                    className="border border-secondary-foreground/20 px-3 py-1.5 text-sm text-secondary-foreground/85"
                  >
                    {sector}
                  </li>
                ))}
              </ul>
              <a
                href={link('/etkinlikler')}
                className="group mt-8 inline-flex items-center gap-2 border-2 border-white/40 px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:border-primary hover:bg-primary"
              >
                {about.meetings.cta}
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-xxl">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 border border-border bg-card p-xl md:flex-row md:items-center">
              <div className="max-w-xl">
                <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
                  {about.cta.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{about.cta.description}</p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={link('/etkinlikler')}
                  className="group inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-all duration-150 hover:bg-accent active:scale-[0.98]"
                >
                  {about.cta.eventsLabel}
                  <ArrowRight size={18} className="transition-transform duration-150 group-hover:translate-x-1" />
                </a>
                <MembershipButton className="inline-flex items-center gap-2 border-2 border-foreground/15 px-7 py-3 text-base font-semibold text-foreground transition-colors duration-150 hover:border-primary hover:text-primary">
                  {about.cta.membershipLabel}
                </MembershipButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
