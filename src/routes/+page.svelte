<script>
  import { onMount } from 'svelte';

  let menuOpen = false;
  let photoError = false;
  let contactPhotoError = false;

  let heroParallax = 0;

  onMount(() => {
    parallaxTargets = [...document.querySelectorAll('[data-depth]')].map(el => ({
      el,
      speed: parseFloat(el.dataset.depth),
    }));

    const onScroll = () => {
      const sy = window.scrollY;
      heroParallax = sy * 0.32;
      parallaxTargets.forEach(({ el, speed }) => {
        const rect = el.getBoundingClientRect();
        const fromCenter = rect.top + rect.height / 2 - window.innerHeight / 2;
        el.style.transform = `translateY(${fromCenter * speed * -0.07}px)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  });

  const WHATSAPP = 'https://wa.me/31624942748';
  const EMAIL = 'mailto:vogel-cohnitz@konplott.com';
  const LINKEDIN = 'https://www.linkedin.com/in/verena-vogel-cohnitz-076b14255/';

  const highlights = [
    { value: '1,000+', label: 'Artisans' },
    { value: '500+', label: 'Partners' },
    { value: 'Since 1986', label: 'Est.' },
    { value: '4+', label: 'Years' },
  ];

  const partnerships = [
    {
      num: '01',
      title: 'Sales Agents & Distributors',
      desc: 'Join our global network of sales agents and distributors. Represent KONPLOTT in your region and bring bold jewelry to new markets.',
    },
    {
      num: '02',
      title: 'Retailers & Concept Stores',
      desc: 'Stock KONPLOTT in your boutique or concept store. Our collections appeal to fashion-forward customers who appreciate artistic jewelry.',
    },
    {
      num: '03',
      title: 'Fashion-Forward Agencies',
      desc: 'Creative collaborations with agencies and stylists who want to feature KONPLOTT in editorial, campaigns, and fashion projects.',
    },
    {
      num: '04',
      title: 'General Partnerships',
      desc: "Have a different collaboration idea? I'm always open to exploring new partnership models that align with KONPLOTT's vision.",
    },
  ];

  const skills = ['Sales Leadership', 'B2B', 'Wholesale', 'Fashion', 'Strategic Partnerships'];

  const timeline = [
    { year: '1986', text: 'Concept and realization of trend fashion jewelry at INTERSTOFF Frankfurt. KONPLOTT is born.' },
    { year: '1990', text: 'Jewelry in various materials, including neoprene — breaking conventions of form and material.' },
    { year: '1992', text: 'The South China Morning Post reports on Miranda\'s work as a "trend designer".' },
    { year: '1997', text: 'Opening of the first KONPLOTT store.' },
    { year: '2000', text: 'Opening of a women-run manufactory.' },
    { year: '2001', text: 'Founding of the atelier in Cebu, Philippines.' },
    { year: '2006', text: 'Gifted a book about Miranda\'s work — a milestone in recognition.' },
    { year: '2007', text: 'Costume design for "Orpheus in the Underworld", Vienna.' },
    { year: '2008', text: 'Costume design for "The Magic Flute", Berlin.' },
    { year: '2012', text: 'Mercedes-Benz Fashion Week Berlin — 6 consecutive seasons.' },
    { year: '2015', text: 'Keynote at Swarovski\'s 120th anniversary celebration.' },
    { year: '2016', text: 'Celebrating 30 years of bold jewelry, made differently.' },
  ];

  let parallaxTargets = [];
</script>

<style>
  .label { font-family: var(--font-body); font-size: 0.65rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--ink-3); }
  .hairline { border-color: var(--hairline); }
  .hairline-2 { border-color: var(--hairline-2); }

  :global([data-reveal]) { opacity: 0; transform: translateY(28px); transition: opacity 0.75s ease, transform 0.75s ease; }
  :global([data-reveal].revealed) { opacity: 1; transform: translateY(0) !important; }
  :global([data-reveal][data-delay="1"]) { transition-delay: 0.12s; }
  :global([data-reveal][data-delay="2"]) { transition-delay: 0.24s; }
  :global([data-reveal][data-delay="3"]) { transition-delay: 0.36s; }
  :global([data-reveal][data-delay="4"]) { transition-delay: 0.5s; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .hero-anim-0 { animation: fadeUp 0.7s ease both; }
  .hero-anim-1 { animation: fadeUp 0.7s ease 0.15s both; }
  .hero-anim-2 { animation: fadeUp 0.7s ease 0.3s both; }

  @keyframes ticker {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .ticker-inner { display: flex; gap: 3rem; white-space: nowrap; animation: ticker 22s linear infinite; }
</style>

<!-- NAV -->
<header class="fixed top-0 inset-x-0 z-50 bg-[#f3efe7] border-b hairline">
  <nav class="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
    <a href="/" class="font-display text-[17px] tracking-tight text-[#1a1814]">V. Vogel-Cohnitz</a>

    <!-- Desktop -->
    <div class="hidden md:flex items-center gap-6">
      <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" class="label hover:text-[#1a1814] transition-colors">LinkedIn</a>
      <a href={EMAIL} class="label hover:text-[#1a1814] transition-colors">E-Mail</a>
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
        class="flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#1ebe5c] text-white transition-colors"
        style="border-radius:2px;font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;font-weight:600;">
        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        WhatsApp
      </a>
    </div>

    <!-- Mobile burger -->
    <button class="md:hidden text-[#1a1814]" on:click={() => menuOpen = !menuOpen} aria-label="Menu">
      {#if menuOpen}
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/></svg>
      {:else}
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/></svg>
      {/if}
    </button>
  </nav>

  {#if menuOpen}
    <div class="md:hidden bg-[#f3efe7] border-t hairline px-6 py-5 space-y-4">
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 label text-[#25D366]" on:click={() => menuOpen=false}>
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        WhatsApp
      </a>
      <a href={EMAIL} class="block label hover:text-[#1a1814]" on:click={() => menuOpen=false}>E-Mail</a>
      <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" class="block label hover:text-[#1a1814]" on:click={() => menuOpen=false}>LinkedIn</a>
    </div>
  {/if}
</header>

<!-- HERO -->
<section class="min-h-screen flex items-center bg-[#f3efe7] pt-14 px-6 overflow-hidden">
  <div class="max-w-6xl mx-auto w-full py-16 md:py-24" style="transform: translateY({heroParallax}px); will-change: transform;">
    <!-- top label row -->
    <div class="flex items-center gap-4 mb-8">
      {#if !photoError}
        <img src="/verena.jpg" alt="Verena Vogel-Cohnitz"
          class="w-10 h-10 rounded-full object-cover object-top"
          style="border:1px solid var(--hairline)"
          on:error={() => photoError = true} />
      {:else}
        <div class="w-10 h-10 rounded-full bg-[#eae4d8] flex items-center justify-center"
          style="border:1px solid var(--hairline)">
          <span class="text-[#6e665a] text-xs font-semibold">VV</span>
        </div>
      {/if}
      <img src="/konplott-logo.png" alt="KONPLOTT" class="h-8 w-auto" style="opacity:.35" />
      <span class="label">Head of Sales KONPLOTT</span>
    </div>

    <!-- Main heading -->
    <h1 class="hero-anim-0 font-display font-light text-[#1a1814] leading-[0.9] mb-8" style="font-size:clamp(3.5rem,9vw,8rem)">
      Verena<br /><em>Vogel-Cohnitz.</em>
    </h1>

    <div class="hero-anim-1 max-w-md mb-10">
      <p class="text-[#6e665a] leading-relaxed" style="font-size:.9rem">
        Driving global sales and partnerships for KONPLOTT —<br/>bold jewelry, made differently.
      </p>
    </div>

    <!-- CTA buttons -->
    <div class="hero-anim-2 flex flex-wrap gap-3">
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1ebe5c] text-white transition-colors"
        style="border-radius:2px;font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;font-weight:600;">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        Starte Conversation
      </a>
      <a href={EMAIL}
        class="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1814] hover:bg-[#3a342c] text-white transition-colors"
        style="border-radius:2px;font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;font-weight:600;">
        E-Mail senden →
      </a>
    </div>
  </div>
</section>

<!-- TICKER -->
<div class="bg-[#eae4d8] border-t border-b hairline overflow-hidden py-3">
  <div class="ticker-inner label text-[#6e665a]">
    {#each [0,1] as _}
      <span class="inline-flex gap-10 items-center pr-10">
        <span>Head of Sales · KONPLOTT</span><span>·</span>
        <span>500+ Global Partners</span><span>·</span>
        <span>Luxembourg</span><span>·</span>
        <span>Est. 1986</span><span>·</span>
        <span>1,000+ Artisans</span><span>·</span>
        <span>Bold Jewelry · Made Differently</span><span>·</span>
      </span>
    {/each}
  </div>
</div>

<!-- ABOUT -->
<section id="about" class="py-20 px-6 bg-[#f3efe7]">
  <div class="max-w-6xl mx-auto">
    <div class="border-t hairline pt-8 mb-12 flex items-start justify-between gap-4">
      <span class="label">About</span>
      <span class="label text-right">KONPLOTT · Head of Sales</span>
    </div>

    <div class="grid md:grid-cols-2 gap-16 items-start">
      <div>
        <h2 data-reveal class="font-display font-light text-[#1a1814] leading-tight mb-6" style="font-size:clamp(2.2rem,4vw,3.5rem)">
          KONPLOTT's<br /><em>Mission.</em>
        </h2>
      </div>
      <div>
        <p data-reveal data-delay="1" class="text-[#3a342c] leading-relaxed mb-8" style="font-size:.875rem">
          KONPLOTT creates bold, artistic jewelry that challenges convention. As Head of Sales,
          I connect our vision with partners worldwide — building relationships that bring our
          handcrafted pieces to fashion-forward customers across the globe.
        </p>
        <blockquote class="border-l-2 pl-4" style="border-color:var(--hairline)">
          <p class="font-display italic text-[#6e665a]" style="font-size:1.1rem">
            "Our designs are bold, artistic statements — each piece handcrafted with passion and purpose."
          </p>
        </blockquote>
      </div>
    </div>

    <!-- Stats -->
    <div data-reveal data-delay="2" class="grid grid-cols-2 md:grid-cols-4 gap-0 mt-16 border-t border-b hairline divide-x" style="--tw-divide-opacity:1">
      {#each highlights as h}
        <div class="p-6 hairline" style="border-color:var(--hairline)">
          <p class="font-display font-light text-[#1a1814] mb-1" style="font-size:2rem">{h.value}</p>
          <p class="label">{h.label}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- BRAND STORY -->
<section id="brand" class="py-36 px-6 bg-[#eae4d8] overflow-hidden">
  <div class="max-w-6xl mx-auto">

    <!-- Label -->
    <div class="border-t hairline pt-8 mb-28">
      <span class="label">The Brand</span>
    </div>

    <!-- Giant heading with depth parallax -->
    <div class="mb-36">
      <h2 data-depth="1.6" class="font-display font-light text-[#1a1814] leading-[0.88]" style="font-size:clamp(3.5rem,8vw,7rem);will-change:transform">
        Jewelry<br /><em>Made Differently.</em>
      </h2>
    </div>

    <!-- Founding story + Miranda quote -->
    <div class="grid md:grid-cols-2 gap-20 mb-36 items-start">
      <div data-reveal>
        <p class="label mb-6">Miranda Konstantinidou — Founder / Designer</p>
        <p class="text-[#3a342c] leading-relaxed" style="font-size:.9rem">
          In 1986, designer and entrepreneur Miranda Konstantinidou founded the fashion jewelry brand KONPLOTT. She broke with traditional conventions of color, form and material in jewelry design. Rather than imitating fine jewelry, she created bold, original fashion statements — pieces meant to be worn every day and to shine on the grand stage.
        </p>
      </div>
      <div data-reveal data-delay="2">
        <blockquote>
          <p data-depth="0.8" class="font-display font-light italic text-[#1a1814] leading-tight mb-5" style="font-size:clamp(1.4rem,2.5vw,2rem);will-change:transform">
            "My ambition has always been to create jewelry for every woman, in every situation."
          </p>
          <cite class="label not-italic">— Miranda Konstantinidou, Founder</cite>
        </blockquote>
      </div>
    </div>

    <!-- Full-width centered quote -->
    <div data-reveal class="text-center py-24 mb-36 border-t border-b hairline">
      <p data-depth="1.2" class="font-display font-light italic text-[#1a1814] mx-auto" style="font-size:clamp(1.6rem,3.5vw,2.8rem);max-width:720px;line-height:1.25;will-change:transform">
        "Buy only what makes your heart leap —<br/>today and tomorrow."
      </p>
      <p class="label mt-8">— Miranda Konstantinidou</p>
    </div>

    <!-- Timeline -->
    <div class="mb-36">
      <div class="border-t hairline pt-8 mb-20">
        <span data-reveal class="label">Milestones</span>
      </div>
      <div>
        {#each timeline as t, i}
          <div data-reveal data-delay="{i % 3}"
            class="grid items-baseline border-b hairline py-10"
            style="grid-template-columns: 5rem 1fr">
            <p class="font-display text-[#1a1814]" style="font-size:1.25rem">{t.year}</p>
            <p class="text-[#3a342c] leading-relaxed" style="font-size:.875rem;padding-left:2rem">{t.text}</p>
          </div>
        {/each}
      </div>
    </div>

    <!-- Values + Global reach -->
    <div data-reveal class="grid md:grid-cols-3 gap-0 border-t hairline border-l" style="border-color:var(--hairline)">
      <div class="p-10 border-r border-b hairline">
        <p class="label mb-5">Social Responsibility</p>
        <p class="font-display font-light text-[#1a1814] leading-tight mb-4" style="font-size:2.2rem">1,000+<br/><em>Employees</em></p>
        <p class="text-[#6e665a] leading-relaxed" style="font-size:.8rem">Mostly women — secure jobs, fair wages and a respectful environment.</p>
      </div>
      <div class="p-10 border-r border-b hairline">
        <p class="label mb-5">Sustainability</p>
        <p class="font-display font-light text-[#1a1814] leading-tight mb-4" style="font-size:2.2rem">Long-<br/><em>lasting.</em></p>
        <p class="text-[#6e665a] leading-relaxed" style="font-size:.8rem">KONPLOTT strives to make all processes as resource-efficient as possible.</p>
      </div>
      <div class="p-10 border-r border-b hairline">
        <p class="label mb-5">Global Reach</p>
        <p class="font-display font-light text-[#1a1814] leading-tight mb-4" style="font-size:2.2rem">500+<br/><em>Partners.</em></p>
        <p class="text-[#6e665a] leading-relaxed" style="font-size:.8rem">DE, AT, CH, LU, BE, NL, UK, IT, GR, FR, RO, IE, ZA, MN, CN — and beyond.</p>
      </div>
    </div>

  </div>
</section>

<!-- PARTNERSHIPS -->
<section id="partnerships" class="py-20 px-6 bg-[#f3efe7]">
  <div class="max-w-6xl mx-auto">
    <div class="border-t hairline pt-8 mb-12 flex items-start justify-between">
      <span class="label">Partnership Opportunities</span>
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
        class="label text-[#25D366] hover:underline">Kontakt aufnehmen →</a>
    </div>

    <h2 data-reveal class="font-display font-light text-[#1a1814] leading-tight mb-14" style="font-size:clamp(2.2rem,4vw,3.5rem)">
      Let's work<br /><em>together.</em>
    </h2>

    <div data-reveal data-delay="1" class="grid md:grid-cols-2 gap-0 border-t hairline border-l" style="border-color:var(--hairline)">
      {#each partnerships as p}
        <div class="p-8 border-r border-b hairline" style="border-color:var(--hairline)">
          <p class="label mb-4">{p.num}</p>
          <h3 class="font-medium text-[#1a1814] mb-3">{p.title}</h3>
          <p class="text-[#6e665a] leading-relaxed mb-5" style="font-size:.8rem">{p.desc}</p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            class="label text-[#1a1814] hover:text-[#6e665a] transition-colors">Get in Touch →</a>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact" class="py-20 px-6 bg-[#eae4d8]">
  <div class="max-w-6xl mx-auto">
    <div class="border-t hairline pt-8 mb-12">
      <span class="label">Get in Touch</span>
    </div>

    <div class="grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 data-reveal class="font-display font-light text-[#1a1814] leading-tight mb-6" style="font-size:clamp(2.2rem,4vw,3.5rem)">
          Let's connect<br /><em>directly.</em>
        </h2>
        <p class="text-[#6e665a] leading-relaxed mb-8" style="font-size:.875rem">
          Whether you're interested in distributing KONPLOTT, stocking our collections,
          or exploring creative collaborations — I'd love to hear from you.
        </p>
      </div>

      <div data-reveal data-delay="1" class="border hairline bg-[#f3efe7] p-8" style="border-radius:3px">
        <!-- Profile row -->
        <div class="flex items-center gap-4 mb-7 pb-6 border-b hairline">
          <div class="w-12 h-12 rounded-full overflow-hidden flex-shrink-0" style="border:1px solid var(--hairline)">
            {#if !contactPhotoError}
              <img src="/verena.jpg" alt="Verena" class="w-full h-full object-cover object-top"
                on:error={() => contactPhotoError = true} />
            {:else}
              <div class="w-full h-full bg-[#eae4d8] flex items-center justify-center">
                <span class="text-[#6e665a] text-xs font-semibold">VV</span>
              </div>
            {/if}
          </div>
          <div>
            <p class="font-medium text-[#1a1814] text-sm">Verena Vogel-Cohnitz</p>
            <p class="label mt-0.5">Head of Sales · KONPLOTT · Luxembourg</p>
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex flex-col gap-2.5">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            class="flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#1ebe5c] text-white transition-colors w-full"
            style="border-radius:2px;font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;font-weight:600;">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp öffnen
          </a>
          <div class="grid grid-cols-2 gap-2.5">
            <a href={EMAIL}
              class="flex items-center justify-center px-4 py-3 bg-[#1a1814] hover:bg-[#3a342c] text-white transition-colors"
              style="border-radius:2px;font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;font-weight:500;">
              E-Mail
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer"
              class="flex items-center justify-center px-4 py-3 border hairline hover:bg-[#eae4d8] text-[#1a1814] transition-colors"
              style="border-radius:2px;font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;font-weight:500;">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FLOATING WHATSAPP (mobile) -->
<a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
  class="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5c] text-white flex items-center justify-center transition-colors shadow-lg"
  style="border-radius:2px" aria-label="WhatsApp">
  <svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
</a>

<!-- FOOTER -->
<footer class="py-5 px-6 border-t hairline bg-[#f3efe7]">
  <div class="max-w-6xl mx-auto flex items-center justify-between">
    <p class="label">© 2026 Verena Vogel-Cohnitz</p>
    <div class="flex items-center gap-5">
      <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" class="label hover:text-[#1a1814] transition-colors">LinkedIn</a>
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" class="label text-[#25D366]">WhatsApp</a>
    </div>
  </div>
</footer>
