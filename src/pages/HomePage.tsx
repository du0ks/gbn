import { motion } from 'motion/react';
import { CornerAccent, HeroNetwork, Reveal } from '@/components/decor';
import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';
import { home } from '@/content';
import MembershipButton from '@/components/MembershipButton';
import { asset, link } from '@/lib/paths';

export default function HomePage() {
  const benefitSpan: Record<string, string> = {
    large: 'md:col-span-2',
    medium: 'md:col-span-1',
    small: 'md:col-span-1',
  };

  return (
    <>
      <main>
        {/* HERO */}
        <section className="relative flex min-h-screen items-center overflow-hidden">
          <img
            src={asset('images/hero.webp')}
            alt="İş insanları bir networking etkinliğinde sohbet ediyor"
            width={1920}
            height={1080}
            loading="eager"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-background" />
          <HeroNetwork />

          <div className="relative mx-auto w-full max-w-content px-4 sm:px-6 py-xxxl">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <span className="inline-flex items-center gap-2 border border-primary/40 bg-card/80 px-4 py-1.5 text-sm font-medium text-foreground">
                  <span className="h-2 w-2 bg-primary" aria-hidden="true" />
                  {home.hero.badge}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                className="mt-6 font-heading text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
              >
                {home.hero.titleLine}
                <br />
                <span className="text-primary">{home.hero.titleAccent}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
                className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
              >
                {home.hero.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <MembershipButton
                  className="group inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-all duration-150 hover:bg-accent active:scale-[0.98]"
                >
                  {home.hero.primaryCta.label}
                  <ArrowRight size={18} className="transition-transform duration-150 group-hover:translate-x-1" />
                </MembershipButton>
                <a
                  href="#nasil-calisir"
                  className="inline-flex items-center gap-2 border-2 border-foreground/15 bg-background/60 px-7 py-3 text-base font-semibold text-foreground transition-colors duration-150 hover:border-primary hover:text-primary"
                >
                  {home.hero.secondaryCta.label}
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3"
              >
                {home.hero.tags.map((tag) => (
                  <span key={tag.id} className="flex items-center gap-2 text-sm font-medium text-foreground/70">
                    <span className="h-1.5 w-1.5 bg-primary" aria-hidden="true" />
                    {tag.text}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="nasil-calisir" className="scroll-mt-16 md:scroll-mt-20 py-xxl">
          <div className="mx-auto max-w-content px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-xxl lg:grid-cols-2 lg:gap-xl">
              <Reveal className="relative">
                <div className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-3 -top-3 h-16 w-16 border-l-[3px] border-t-[3px] border-primary"
                  />
                  <img
                    src={asset('images/how-it-works.webp')}
                    alt={home.howItWorks.imageAlt}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="h-auto w-full max-w-md object-cover"
                  />
                </div>
              </Reveal>

              <div>
                <Reveal>
                  <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    {home.howItWorks.title}
                  </h2>
                  <p className="mt-3 text-lg text-muted-foreground">{home.howItWorks.subtitle}</p>
                </Reveal>

                <ol className="mt-10 flex flex-col gap-0">
                  {home.howItWorks.steps.map((step, i) => (
                    <Reveal key={step.id} delay={i * 0.12}>
                      <li className="relative flex gap-6 pb-10 last:pb-0">
                        {i < home.howItWorks.steps.length - 1 && (
                          <span
                            aria-hidden="true"
                            className="absolute left-8 top-16 h-[calc(100%-3rem)] border-l-2 border-dashed border-primary/40"
                          />
                        )}
                        <span className="w-16 shrink-0 font-heading text-4xl font-extrabold leading-none text-primary">
                          {step.number}
                        </span>
                        <div className="pt-1">
                          <h3 className="font-heading text-xl font-bold text-foreground">{step.title}</h3>
                          <p className="mt-2 max-w-md leading-relaxed text-muted-foreground">
                            {step.description}
                          </p>
                          {'tagline' in step && (
                            <p className="mt-3 font-heading text-lg font-bold text-primary">{step.tagline}</p>
                          )}
                        </div>
                      </li>
                    </Reveal>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS — bento */}
        <section className="bg-muted py-xxl">
          <div className="mx-auto max-w-content px-4 sm:px-6">
            <Reveal>
              <h2 className="max-w-2xl font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {home.benefits.title}
              </h2>
              <p className="mt-3 max-w-2xl text-lg text-muted-foreground">{home.benefits.subtitle}</p>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-base md:grid-cols-3">
              {home.benefits.items.map((item, i) => (
                <Reveal key={item.id} delay={i * 0.08} className={benefitSpan[item.size] ?? 'md:col-span-1'}>
                  <article className="group relative flex h-full flex-col justify-between border border-border bg-card p-base transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                    <CornerAccent />
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground">{item.title}</h3>
                      <p className="mt-3 leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                    {item.id === 'benefit-referrals' && (
                      <img
                        src={asset('images/community.webp')}
                        alt="İş ortakları toplantı masasında el sıkışıyor"
                        width={800}
                        height={450}
                        loading="lazy"
                        className="mt-6 h-44 w-full object-cover object-[center_30%]"
                      />
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* EVENT band */}
        <section className="relative overflow-hidden py-xxl">
          <img
            src={asset('images/events.webp')}
            alt="Konferans salonunda panel dinleyicileri"
            width={1920}
            height={800}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/70" />
          <div className="relative mx-auto max-w-content px-4 sm:px-6">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
              <Reveal className="md:col-span-4">
                <div className="flex items-start gap-3 text-white">
                  <span className="font-heading text-7xl font-extrabold leading-none lg:text-8xl">
                    {home.event.day}
                  </span>
                  <span className="mt-2 flex flex-col font-heading text-xl font-bold uppercase tracking-wider">
                    {home.event.month}
                    <span className="text-primary">{home.event.year}</span>
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="md:col-span-8">
                <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
                  <span className="h-2 w-2 bg-primary" aria-hidden="true" />
                  {home.event.label}
                </p>
                <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {home.event.title}
                </h2>
                <p className="mt-4 max-w-xl leading-relaxed text-white/80">{home.event.description}</p>
                <div className="mt-6 flex flex-wrap items-center gap-6">
                  <p className="flex items-center gap-2 text-sm text-white/80">
                    <MapPin size={16} className="text-primary" />
                    {home.event.location}
                  </p>
                  <a
                    href={link('/etkinlikler')}
                    className="group inline-flex items-center gap-2 border-2 border-white/40 px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:border-primary hover:bg-primary"
                  >
                    {home.event.cta.label}
                    <ArrowUpRight size={16} className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* MEMBERSHIP CTA — asymmetric split */}
        <section className="py-xxl">
          <div className="mx-auto max-w-content px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-5">
              <Reveal className="md:col-span-3">
                <div className="relative flex h-full flex-col justify-between overflow-hidden bg-primary p-xl text-primary-foreground">
                  <p className="text-sm font-bold uppercase tracking-widest text-primary-foreground/80">
                    {home.cta.kicker}
                  </p>
                  <div className="mt-8">
                    <h2 className="max-w-md font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                      {home.cta.title}
                    </h2>
                    <p className="mt-4 max-w-lg leading-relaxed text-primary-foreground/85">
                      {home.cta.description}
                    </p>
                  </div>
                  <div className="mt-10">
                    <MembershipButton
                      className="group inline-flex items-center gap-2 bg-white px-7 py-3.5 text-base font-semibold text-primary transition-all duration-150 hover:bg-foreground hover:text-white active:scale-[0.98]"
                    >
                      {home.cta.primaryCta.label}
                      <ArrowRight size={18} className="transition-transform duration-150 group-hover:translate-x-1" />
                    </MembershipButton>
                  </div>
                  <svg
                    className="pointer-events-none absolute -bottom-6 -right-6 h-40 w-40 opacity-25"
                    viewBox="0 0 160 160"
                    fill="none"
                    aria-hidden="true"
                  >
                    <g stroke="white" strokeWidth="2">
                      <line x1="20" y1="30" x2="80" y2="80" />
                      <line x1="80" y1="80" x2="60" y2="140" />
                      <line x1="80" y1="80" x2="140" y2="60" />
                    </g>
                    <g fill="white">
                      <circle cx="20" cy="30" r="5" />
                      <circle cx="80" cy="80" r="7" />
                      <circle cx="60" cy="140" r="4" />
                      <circle cx="140" cy="60" r="5" />
                    </g>
                  </svg>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="md:col-span-2">
                <div className="flex h-full flex-col justify-center bg-secondary p-xl text-secondary-foreground">
                  <h3 className="font-heading text-2xl font-bold">Önce tanışalım mı?</h3>
                  <p className="mt-3 leading-relaxed text-secondary-foreground/80">
                    Üyelik şartları, etkinlikler veya iş ortaklığı hakkında sorularını yanıtlamaya hazırız.
                  </p>
                  <a
                    href={link('#iletisim')}
                    className="group mt-6 inline-flex w-fit items-center gap-2 border-2 border-secondary-foreground/30 px-6 py-3 text-sm font-semibold text-secondary-foreground transition-colors duration-150 hover:border-primary hover:text-primary"
                  >
                    {home.cta.secondaryCta.label}
                    <ArrowUpRight size={16} className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
