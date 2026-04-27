<script>
  import { onMount } from 'svelte';

  let menuOpen = false;
  let photoError = false;
  let contactPhotoError = false;
  let heroParallax = 0;

  onMount(() => {
    // Cache initial positions ONCE so parallax stays stable
    const collectTargets = () =>
      [...document.querySelectorAll('[data-depth]')].map(el => ({
        el,
        speed: parseFloat(el.dataset.depth),
        initTop: el.getBoundingClientRect().top + window.scrollY,
        h: el.offsetHeight,
      }));

    let targets = collectTargets();
    let ticking = false;

    const update = () => {
      const sy = window.scrollY;
      heroParallax = sy * 0.3;
      const vpH = window.innerHeight;
      targets.forEach(({ el, speed, initTop, h }) => {
        const elCenter = initTop + h / 2;
        const vpCenter = sy + vpH / 2;
        el.style.transform = `translateY(${(vpCenter - elCenter) * speed * 0.09}px)`;
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    requestAnimationFrame(update);

    // Recalculate positions on resize
    window.addEventListener('resize', () => { targets = collectTargets(); }, { passive: true });

    // Reveal on enter
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target); }
      }),
      { threshold: 0.08 }
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
    { num: '01', title: 'Sales Agents & Distributors', desc: 'Join our global network of sales agents and distributors. Represent KONPLOTT in your region and bring bold jewelry to new markets.' },
    { num: '02', title: 'Retailers & Concept Stores', desc: 'Stock KONPLOTT in your boutique or concept store. Our collections appeal to fashion-forward customers who appreciate artistic jewelry.' },
    { num: '03', title: 'Fashion-Forward Agencies', desc: 'Creative collaborations with agencies and stylists who want to feature KONPLOTT in editorial, campaigns, and fashion projects.' },
    { num: '04', title: 'General Partnerships', desc: "Have a different collaboration idea? I'm always open to exploring new partnership models that align with KONPLOTT's vision." },
  ];

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
</script>

<style>
  .label { font-family: var(--font-body); font-size: 0.65rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--ink-3); }
  .hairline { border-color: var(--hairline); }

  /* Reveal: fade + slide. No !important — JS parallax (inline style) wins over CSS class. */
  :global([data-reveal]) { opacity: 0; transform: translateY(32px); transition: opacity 0.8s ease, transform 0.8s ease; }
  :global([data-reveal].revealed) { opacity: 1; transform: translateY(0); }
  :global([data-reveal][data-delay="1"]) { transition-delay: 0.12s; }
  :global([data-reveal][data-delay="2"]) { transition-delay: 0.25s; }
  :global([data-reveal][data-delay="3"]) { transition-delay: 0.38s; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .hero-anim-0 { animation: fadeUp 0.8s ease both; }
  .hero-anim-1 { animation: fadeUp 0.8s ease 0.18s both; }
  .hero-anim-2 { animation: fadeUp 0.8s ease 0.34s both; }

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
<section class="min-h-screen flex flex-col items-center justify-center bg-[#f3efe7] pt-14 px-6">
  <div class="hero-anim-0 w-full max-w-lg" style="transform: translateY({heroParallax}px); will-change: transform;">
    <img src="/vcard.png" alt="Verena Vogel-Cohnitz – Head of Sales, KONPLOTT"
      class="w-full h-auto" />
  </div>

  <div class="hero-anim-1 flex flex-wrap gap-3 mt-14">
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
</section>

<!-- TICKER -->
<div class="bg-[#f3efe7] border-t border-b hairline overflow-hidden py-3">
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

<!-- BRAND STORY -->
<section id="brand" class="bg-[#f3efe7] overflow-hidden">

  <!-- Hero split: text left, Miranda photo right -->
  <div class="grid md:grid-cols-2" style="min-height:100vh">
    <div class="flex flex-col justify-center px-6 py-40 md:px-16">
      <div class="border-t hairline pt-10 mb-24">
        <span data-reveal class="label">The Brand</span>
      </div>
      <div data-reveal class="flex flex-col items-start mb-14 gap-6">
        <img src="/konplott-seal.gif" alt="KONPLOTT Seal" class="w-56 h-auto" />
        <div>
          <p class="font-display font-light text-[#1a1814]" style="font-size:1.6rem;letter-spacing:.2em">KONPLOTT</p>
          <p class="label mt-1">Jewellery by Miranda Konstantinidou</p>
        </div>
      </div>
      <h2 data-depth="1.5" class="font-display font-light text-[#1a1814] leading-[0.88] mb-14" style="font-size:clamp(3rem,5.5vw,5.5rem);will-change:transform">
        Jewelry<br /><em>Made Differently.</em>
      </h2>
      <div data-reveal>
        <p class="label mb-6">Miranda Konstantinidou — Founder / Designer</p>
        <p class="text-[#3a342c] leading-relaxed" style="font-size:.9rem;max-width:420px;line-height:1.8">
          In 1986, designer and entrepreneur Miranda Konstantinidou founded the fashion jewelry brand KONPLOTT. Rather than imitating fine jewelry, she created bold, original fashion statements — pieces meant to be worn every day and to shine on the grand stage.
        </p>
      </div>
    </div>
    <div class="relative overflow-hidden" style="min-height:60vw">
      <img data-depth="0.8" src="/brand/image44.jpg" alt="Miranda Konstantinidou, Founder"
        class="absolute inset-0 w-full h-full object-cover object-center"
        style="will-change:transform;transform:scale(1.1)" />
    </div>
  </div>

  <!-- Full-width jewelry image -->
  <div class="relative overflow-hidden" style="height:55vw;max-height:680px">
    <img data-depth="1.2" src="/brand/image29.jpg" alt="KONPLOTT jewelry"
      class="absolute inset-0 w-full h-full object-cover object-center"
      style="will-change:transform;transform:scale(1.12)" />
    <div class="absolute bottom-10 left-6 md:left-16">
      <span data-reveal class="label" style="color:rgba(243,239,231,.6)">Bold jewelry · Made differently</span>
    </div>
  </div>

  <!-- Design process: image left, quote right -->
  <div class="grid md:grid-cols-2">
    <div class="relative overflow-hidden" style="min-height:52vw;max-height:620px">
      <img data-depth="1.0" src="/brand/image3.jpg" alt="Design sketching"
        class="absolute inset-0 w-full h-full object-cover object-center"
        style="will-change:transform;transform:scale(1.1)" />
    </div>
    <div class="flex flex-col justify-center px-8 py-28 md:px-16 bg-[#f3efe7]">
      <span data-reveal class="label block mb-10">The Design Process</span>
      <blockquote>
        <p data-depth="0.6" class="font-display font-light italic text-[#1a1814] leading-tight mb-8" style="font-size:clamp(1.5rem,2.5vw,2.2rem);will-change:transform">
          "My ambition has always been to create jewelry for every woman, in every situation."
        </p>
        <cite data-reveal class="label not-italic">— Miranda Konstantinidou</cite>
      </blockquote>
    </div>
  </div>

  <!-- Product Collage -->
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:3px">
    <!-- Row 1: 4 portrait shots -->
    <div class="overflow-hidden" style="aspect-ratio:3/4">
      <img data-depth="0.45" src="/brand/image13.jpg" alt="KONPLOTT ring"
        class="w-full h-full object-cover object-center" style="will-change:transform" />
    </div>
    <div class="overflow-hidden" style="aspect-ratio:3/4">
      <img data-depth="0.5" src="/brand/image8.jpg" alt="KONPLOTT earring"
        class="w-full h-full object-cover object-center" style="will-change:transform" />
    </div>
    <div class="overflow-hidden" style="aspect-ratio:3/4">
      <img data-depth="0.55" src="/brand/image7.jpg" alt="KONPLOTT red earring"
        class="w-full h-full object-cover object-center" style="will-change:transform" />
    </div>
    <div class="overflow-hidden" style="aspect-ratio:3/4">
      <img data-depth="0.45" src="/brand/image4.jpg" alt="KONPLOTT necklace"
        class="w-full h-full object-cover object-center" style="will-change:transform" />
    </div>
    <!-- Large image: spans 2 cols × 2 rows -->
    <div class="overflow-hidden" style="grid-column:1/3;grid-row:2/4">
      <img data-depth="0.7" src="/brand/image2.jpg" alt="KONPLOTT campaign"
        class="w-full h-full object-cover object-top" style="will-change:transform" />
    </div>
    <!-- 4 small images filling right 2 cols × 2 rows -->
    <div class="overflow-hidden" style="aspect-ratio:3/4">
      <img data-depth="0.5" src="/brand/image5.jpg" alt="KONPLOTT amber earring"
        class="w-full h-full object-cover object-center" style="will-change:transform" />
    </div>
    <div class="overflow-hidden" style="aspect-ratio:3/4">
      <img data-depth="0.45" src="/brand/image9.jpg" alt="KONPLOTT crystal cuff"
        class="w-full h-full object-cover object-center" style="will-change:transform" />
    </div>
    <div class="overflow-hidden" style="aspect-ratio:3/4">
      <img data-depth="0.55" src="/brand/image11.jpg" alt="KONPLOTT dark earring"
        class="w-full h-full object-cover object-center" style="will-change:transform" />
    </div>
    <div class="overflow-hidden" style="aspect-ratio:3/4">
      <img data-depth="0.5" src="/brand/image1.jpg" alt="KONPLOTT pink ring"
        class="w-full h-full object-cover object-center" style="will-change:transform" />
    </div>
  </div>

  <!-- Manufacturing: text left, crafting image right -->
  <div class="grid md:grid-cols-2">
    <div class="flex flex-col justify-between px-8 py-28 md:px-16 order-2 md:order-1 gap-14">
      <div>
        <span data-reveal class="label block mb-8">Handcrafted — Cebu, Philippines</span>
        <p data-reveal data-delay="1" class="text-[#3a342c] leading-relaxed" style="font-size:.9rem;max-width:400px;line-height:1.8">
          More than 1,000 employees — mostly women — find secure jobs, fair wages and a respectful environment at KONPLOTT's women-run manufactory, founded in 2001.
        </p>
      </div>
      <div data-reveal data-delay="2" class="overflow-hidden" style="aspect-ratio:4/3">
        <img data-depth="0.5" src="/brand/image37.jpg" alt="Cebu artisan"
          class="w-full h-full object-cover object-top"
          style="will-change:transform" />
      </div>
    </div>
    <div class="relative overflow-hidden order-1 md:order-2" style="min-height:52vw;max-height:700px">
      <img data-depth="1.1" src="/brand/image30.jpg" alt="Jewelry manufacturing"
        class="absolute inset-0 w-full h-full object-cover object-center"
        style="will-change:transform;transform:scale(1.1)" />
    </div>
  </div>

  <!-- Full-width centered quote -->
  <div class="text-center px-6 py-40 border-t border-b hairline bg-[#f3efe7]">
    <p data-depth="1.0" class="font-display font-light italic text-[#1a1814] mx-auto" style="font-size:clamp(1.8rem,3.5vw,3rem);max-width:740px;line-height:1.2;will-change:transform">
      "Buy only what makes your heart leap —<br/>today and tomorrow."
    </p>
    <p data-reveal class="label mt-10">— Miranda Konstantinidou</p>
  </div>

  <!-- Timeline -->
  <div class="max-w-6xl mx-auto px-6 py-36">
    <div class="border-t hairline pt-10 mb-24">
      <span data-reveal class="label">Milestones</span>
    </div>
    {#each timeline as t, i}
      <div data-reveal data-delay="{i % 3}"
        class="grid items-baseline border-b hairline py-14"
        style="grid-template-columns: 6rem 1fr">
        <p data-depth="0.35" class="font-display text-[#1a1814]" style="font-size:1.3rem;will-change:transform">{t.year}</p>
        <p class="text-[#3a342c] leading-relaxed" style="font-size:.9rem;padding-left:2.5rem;line-height:1.7">{t.text}</p>
      </div>
    {/each}
  </div>

  <!-- Press -->
  <div class="max-w-6xl mx-auto px-6 pb-24">
    <div class="border-t hairline pt-10 mb-16">
      <span data-reveal class="label">The press loves our pieces</span>
    </div>
    <div class="grid grid-cols-2 gap-4 md:gap-8">
      <div data-reveal class="overflow-hidden" style="aspect-ratio:3/4">
        <img data-depth="0.6" src="/brand/image36.jpg" alt="Stylist Magazine"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          style="will-change:transform" />
      </div>
      <div data-reveal data-delay="1" class="overflow-hidden" style="aspect-ratio:3/4">
        <img data-depth="0.6" src="/brand/image49.jpg" alt="Vogue Germany"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          style="will-change:transform" />
      </div>
    </div>
  </div>

  <!-- Values grid -->
  <div class="max-w-6xl mx-auto px-6 pb-36">
    <div class="grid md:grid-cols-3 gap-0 border-t hairline border-l" style="border-color:var(--hairline)">
      <div data-reveal class="p-12 border-r border-b hairline">
        <p class="label mb-6">Social Responsibility</p>
        <p data-depth="0.45" class="font-display font-light text-[#1a1814] leading-tight mb-5" style="font-size:2.4rem;will-change:transform">1,000+<br/><em>Employees</em></p>
        <p class="text-[#6e665a] leading-relaxed" style="font-size:.82rem;line-height:1.7">Mostly women — secure jobs, fair wages and a respectful environment.</p>
      </div>
      <div data-reveal data-delay="1" class="p-12 border-r border-b hairline">
        <p class="label mb-6">Sustainability</p>
        <p data-depth="0.45" class="font-display font-light text-[#1a1814] leading-tight mb-5" style="font-size:2.4rem;will-change:transform">Long-<br/><em>lasting.</em></p>
        <p class="text-[#6e665a] leading-relaxed" style="font-size:.82rem;line-height:1.7">KONPLOTT strives to make all processes as resource-efficient as possible.</p>
      </div>
      <div data-reveal data-delay="2" class="p-12 border-r border-b hairline">
        <p class="label mb-6">Global Reach</p>
        <p data-depth="0.45" class="font-display font-light text-[#1a1814] leading-tight mb-5" style="font-size:2.4rem;will-change:transform">500+<br/><em>Partners.</em></p>
        <p class="text-[#6e665a] leading-relaxed" style="font-size:.82rem;line-height:1.7">DE, AT, CH, LU, BE, NL, UK, IT, GR, FR, RO, IE, ZA, MN, CN — and beyond.</p>
      </div>
    </div>
  </div>

</section>

<!-- ABOUT -->
<section id="about" class="py-36 px-6 bg-[#f3efe7]">
  <div class="max-w-6xl mx-auto">
    <div class="border-t hairline pt-10 mb-24 flex items-start justify-between gap-4">
      <span data-reveal class="label">About</span>
      <span data-reveal class="label text-right">KONPLOTT · Head of Sales</span>
    </div>

    <div class="grid md:grid-cols-2 gap-24 items-start">
      <div>
        <h2 data-depth="0.65" class="font-display font-light text-[#1a1814] leading-tight mb-10" style="font-size:clamp(2.2rem,4vw,3.5rem);will-change:transform">
          KONPLOTT's<br /><em>Mission.</em>
        </h2>
      </div>
      <div>
        <p data-reveal class="text-[#3a342c] leading-relaxed mb-10" style="font-size:.9rem">
          KONPLOTT creates bold, artistic jewelry that challenges convention. As Head of Sales,
          I connect our vision with partners worldwide — building relationships that bring our
          handcrafted pieces to fashion-forward customers across the globe.
        </p>
        <blockquote data-reveal data-delay="1" class="border-l-2 pl-6" style="border-color:var(--hairline)">
          <p class="font-display italic text-[#6e665a]" style="font-size:1.15rem;line-height:1.4">
            "Our designs are bold, artistic statements — each piece handcrafted with passion and purpose."
          </p>
        </blockquote>
      </div>
    </div>

    <!-- Stats -->
    <div class="mt-24 border-t border-b hairline divide-x grid grid-cols-2 md:grid-cols-4" style="--tw-divide-opacity:1">
      {#each highlights as h, i}
        <div data-reveal data-delay="{i}" class="p-10" style="border-color:var(--hairline)">
          <p data-depth="0.4" class="font-display font-light text-[#1a1814] mb-2" style="font-size:2.2rem;will-change:transform">{h.value}</p>
          <p class="label">{h.label}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- PARTNERSHIPS -->
<section id="partnerships" class="py-36 px-6 bg-[#f3efe7]">
  <div class="max-w-6xl mx-auto">
    <div class="border-t hairline pt-10 mb-24 flex items-start justify-between">
      <span data-reveal class="label">Partnership Opportunities</span>
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
        class="label text-[#25D366] hover:underline">Kontakt aufnehmen →</a>
    </div>

    <h2 data-depth="0.65" class="font-display font-light text-[#1a1814] leading-tight mb-20" style="font-size:clamp(2.2rem,4vw,3.5rem);will-change:transform">
      Let's work<br /><em>together.</em>
    </h2>

    <div class="grid md:grid-cols-2 gap-0 border-t hairline border-l" style="border-color:var(--hairline)">
      {#each partnerships as p, i}
        <div data-reveal data-delay="{i % 2}" class="p-12 border-r border-b hairline" style="border-color:var(--hairline)">
          <p class="label mb-6">{p.num}</p>
          <h3 data-depth="0.3" class="font-medium text-[#1a1814] mb-4" style="will-change:transform">{p.title}</h3>
          <p class="text-[#6e665a] leading-relaxed mb-7" style="font-size:.82rem;line-height:1.7">{p.desc}</p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            class="label text-[#1a1814] hover:text-[#6e665a] transition-colors">Get in Touch →</a>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact" class="py-36 px-6 bg-[#f3efe7]">
  <div class="max-w-6xl mx-auto">
    <div class="border-t hairline pt-10 mb-24">
      <span data-reveal class="label">Get in Touch</span>
    </div>

    <div class="grid md:grid-cols-2 gap-24 items-center">
      <div>
        <h2 data-depth="0.65" class="font-display font-light text-[#1a1814] leading-tight mb-10" style="font-size:clamp(2.2rem,4vw,3.5rem);will-change:transform">
          Let's connect<br /><em>directly.</em>
        </h2>
        <p data-reveal class="text-[#6e665a] leading-relaxed" style="font-size:.9rem;line-height:1.8">
          Whether you're interested in distributing KONPLOTT, stocking our collections,
          or exploring creative collaborations — I'd love to hear from you.
        </p>
      </div>

      <div data-reveal data-delay="1" class="border hairline bg-[#f3efe7] p-10" style="border-radius:3px">
        <div class="flex items-center gap-5 mb-9 pb-8 border-b hairline">
          <div class="w-14 h-14 rounded-full overflow-hidden flex-shrink-0" style="border:1px solid var(--hairline)">
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
            <p class="label mt-1">Head of Sales · KONPLOTT · Luxembourg</p>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            class="flex items-center justify-center gap-2 px-5 py-3.5 bg-[#25D366] hover:bg-[#1ebe5c] text-white transition-colors w-full"
            style="border-radius:2px;font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;font-weight:600;">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp Ã¶ffnen
          </a>
          <div class="grid grid-cols-2 gap-3">
            <a href={EMAIL}
              class="flex items-center justify-center px-4 py-3.5 bg-[#1a1814] hover:bg-[#3a342c] text-white transition-colors"
              style="border-radius:2px;font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;font-weight:500;">
              E-Mail
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer"
              class="flex items-center justify-center px-4 py-3.5 border hairline hover:bg-[#eae4d8] text-[#1a1814] transition-colors"
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
<footer class="py-6 px-6 border-t hairline bg-[#f3efe7]">
  <div class="max-w-6xl mx-auto flex items-center justify-between">
    <p class="label">Â© 2026 Verena Vogel-Cohnitz</p>
    <div class="flex items-center gap-5">
      <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" class="label hover:text-[#1a1814] transition-colors">LinkedIn</a>
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" class="label text-[#25D366]">WhatsApp</a>
    </div>
  </div>
</footer>
