<script>
  let menuOpen = false;
  let photoError = false;
  let logoError = false;
  let contactPhotoError = false;

  const navLinks = [
    { href: '#partnerships', label: 'Partnerships' },
  ];

  const WHATSAPP = 'https://wa.me/31624942748';
  const EMAIL = 'mailto:vogel-cohnitz@konplott.com';
  const LINKEDIN = 'https://www.linkedin.com/in/verena-vogel-cohnitz-076b14255/';

  const highlights = [
    { value: 'Bold Design', label: 'Statement Jewelry' },
    { value: '1,000+', label: 'Artisans' },
    { value: '500+', label: 'Partners' },
    { value: 'Since 1986', label: 'KONPLOTT' },
  ];

  const partnerships = [
    {
      icon: '🤝',
      title: 'Sales Agents & Distributors',
      desc: 'Join our global network of sales agents and distributors. Represent KONPLOTT in your region and bring bold jewelry to new markets.',
      cta: 'Become a Partner',
    },
    {
      icon: '🏪',
      title: 'Retailers & Concept Stores',
      desc: 'Stock KONPLOTT in your boutique or concept store. Our collections appeal to fashion-forward customers who appreciate artistic jewelry.',
      cta: 'Stock KONPLOTT',
    },
    {
      icon: '✨',
      title: 'Fashion-Forward Agencies',
      desc: 'Creative collaborations with agencies and stylists who want to feature KONPLOTT in editorial, campaigns, and fashion projects.',
      cta: 'Collaborate',
    },
    {
      icon: '💼',
      title: 'General Partnerships',
      desc: "Have a different collaboration idea? I'm always open to exploring new partnership models that align with KONPLOTT's vision.",
      cta: 'Get in Touch',
    },
  ];

  const skills = ['Sales Leadership', 'B2B', 'Wholesale', 'Fashion', 'Strategic Partnerships'];
</script>

<!-- NAV -->
<header class="fixed top-0 inset-x-0 z-50 border-b border-stone-200/80 bg-[#faf8f4]/90 backdrop-blur-md">
  <nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
    <a href="/" class="text-stone-800 font-semibold tracking-wide hover:text-amber-700 transition-colors">
      V.Vogel-Cohnitz
    </a>

    <!-- Desktop nav -->
    <ul class="hidden md:flex items-center gap-6">
      {#each navLinks as link}
        <li>
          <a href={link.href} class="text-sm text-stone-600 hover:text-stone-900 transition-colors">
            {link.label}
          </a>
        </li>
      {/each}
      <!-- WhatsApp -->
      <li>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-[#25D366] hover:bg-[#1ebe5c] text-white transition-all shadow-sm"
          aria-label="WhatsApp"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp
        </a>
      </li>
      <!-- E-Mail -->
      <li>
        <a
          href={EMAIL}
          class="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-stone-300 text-stone-600 hover:border-amber-600 hover:text-amber-700 transition-all"
          aria-label="E-Mail"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          E-Mail
        </a>
      </li>
    </ul>

    <!-- Mobile hamburger -->
    <button
      class="md:hidden text-stone-600 hover:text-stone-900"
      on:click={() => menuOpen = !menuOpen}
      aria-label="Toggle menu"
    >
      {#if menuOpen}
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      {:else}
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      {/if}
    </button>
  </nav>

  {#if menuOpen}
    <div class="md:hidden bg-[#faf8f4] border-t border-stone-200 px-6 py-4 space-y-4">
      {#each navLinks as link}
        <a href={link.href} class="block text-sm text-stone-600 hover:text-stone-900" on:click={() => menuOpen = false}>
          {link.label}
        </a>
      {/each}
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-sm text-[#25D366] font-medium">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        WhatsApp
      </a>
      <a href={EMAIL} class="flex items-center gap-2 text-sm text-amber-700">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
        E-Mail schreiben
      </a>
    </div>
  {/if}
</header>

<!-- HERO -->
<section class="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 relative overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-b from-[#faf8f4] via-[#f3ede3] to-[#faf8f4] pointer-events-none"></div>
  <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-200/20 rounded-full blur-3xl pointer-events-none"></div>

  <div class="relative z-10 max-w-2xl">
    <!-- Profile photo -->
    <div class="mb-6 flex justify-center">
      <div class="relative">
        {#if !photoError}
          <img
            src="/verena.jpg"
            alt="Verena Vogel-Cohnitz"
            class="w-32 h-32 rounded-full object-cover object-top border-4 border-white shadow-xl"
            on:error={() => photoError = true}
          />
        {:else}
          <div class="w-32 h-32 rounded-full border-4 border-white shadow-xl bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center">
            <span class="text-stone-800 font-bold text-3xl">VV</span>
          </div>
        {/if}
      </div>
    </div>

    <!-- KONPLOTT logo above name, subtle -->
    <div class="flex justify-center mb-3">
      {#if !logoError}
        <img src="/konplott-logo.svg" alt="KONPLOTT" class="h-14 w-auto opacity-50" on:error={() => logoError = true} />
      {:else}
        <p class="text-xs font-medium tracking-[0.3em] uppercase text-stone-400">KONPLOTT</p>
      {/if}
    </div>

    <p class="text-amber-700 text-sm font-medium tracking-[0.2em] uppercase mb-4">Head of Sales</p>
    <h1 class="text-5xl md:text-6xl font-bold text-stone-900 mb-4 leading-tight">
      Verena<br />
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-amber-500">Vogel-Cohnitz</span>
    </h1>
    <p class="text-base md:text-lg text-stone-500 max-w-xl mx-auto mb-8 leading-relaxed">
      Driving global sales and partnerships for KONPLOTT — bold jewelry, made differently.
    </p>
    <p class="text-stone-400 text-sm mb-8 flex items-center justify-center gap-2">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      Luxembourg
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center justify-center gap-2 px-8 py-3 bg-[#25D366] hover:bg-[#1ebe5c] text-white font-semibold rounded-full transition-all hover:scale-105 shadow-md"
      >
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        Starte Conversation
      </a>
      <a
        href={EMAIL}
        class="flex items-center justify-center gap-2 px-8 py-3 border border-stone-300 hover:border-amber-600 text-stone-600 hover:text-amber-700 font-medium rounded-full transition-all shadow-sm"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
        E-Mail senden
      </a>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400">
    <span class="text-xs tracking-widest uppercase">Scroll</span>
    <svg class="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
</section>

<!-- ABOUT -->
<section id="about" class="py-24 px-6 bg-[#f3ede3]">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-16">
      <p class="text-amber-700 text-xs font-medium tracking-[0.2em] uppercase mb-4">About Me</p>
      <h2 class="text-4xl md:text-5xl font-bold text-stone-900 mb-6">KONPLOTT's Mission</h2>
      <p class="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed">
        KONPLOTT creates bold, artistic jewelry that challenges convention. As Head of Sales,
        I connect our vision with partners worldwide — building relationships that bring our
        handcrafted pieces to fashion-forward customers across the globe.
      </p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      {#each highlights as h}
        <div class="bg-white border border-stone-200 rounded-2xl p-6 text-center hover:border-amber-400 hover:shadow-md transition-all">
          <p class="text-2xl font-bold text-amber-700 mb-1">{h.value}</p>
          <p class="text-stone-500 text-sm">{h.label}</p>
        </div>
      {/each}
    </div>

    <blockquote class="text-center max-w-2xl mx-auto">
      <p class="text-xl md:text-2xl text-stone-600 font-light italic leading-relaxed">
        "Our designs are bold, artistic statements — each piece handcrafted with passion and purpose."
      </p>
    </blockquote>
  </div>
</section>

<!-- EXPERIENCE -->
<section id="experience" class="py-24 px-6 bg-white">
  <div class="max-w-4xl mx-auto">
    <div class="text-center mb-16">
      <p class="text-amber-700 text-xs font-medium tracking-[0.2em] uppercase mb-4">Career</p>
      <h2 class="text-4xl md:text-5xl font-bold text-stone-900">Experience</h2>
    </div>

    <div class="bg-[#faf8f4] border border-stone-200 rounded-2xl p-8 md:p-10 shadow-sm">
      <div class="flex flex-col md:flex-row md:items-start gap-6">
        <div class="flex-shrink-0 w-14 h-14 bg-amber-50 border border-amber-200 rounded-2xl flex items-center justify-center">
          <span class="text-amber-600 text-xl">💎</span>
        </div>
        <div class="flex-1">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 class="text-xl font-bold text-stone-900">Head of Sales</h3>
              <p class="text-amber-700">KONPLOTT</p>
            </div>
            <span class="text-stone-400 text-sm mt-1 md:mt-0">Sep 2021 – Present</span>
          </div>
          <p class="text-stone-600 leading-relaxed mb-6">
            Leading global sales strategy and partnership development for KONPLOTT. Built and scaled
            an international network of distributors, retailers, and sales agents across Europe and
            beyond. Driving B2B wholesale growth while maintaining the brand's artistic integrity
            and premium positioning in the fashion jewelry market.
          </p>
          <div class="flex flex-wrap gap-2 mb-8">
            {#each skills as skill}
              <span class="px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 text-xs rounded-full">
                {skill}
              </span>
            {/each}
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-stone-200">
            <div>
              <p class="text-2xl font-bold text-amber-700">4+</p>
              <p class="text-stone-500 text-sm">Years</p>
            </div>
            <div>
              <p class="text-2xl font-bold text-amber-700">500+</p>
              <p class="text-stone-500 text-sm">Global Partners</p>
            </div>
            <div>
              <p class="text-2xl font-bold text-amber-700">🌍</p>
              <p class="text-stone-500 text-sm">Luxembourg</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PARTNERSHIPS -->
<section id="partnerships" class="py-24 px-6 bg-[#f3ede3]">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-16">
      <p class="text-amber-700 text-xs font-medium tracking-[0.2em] uppercase mb-4">Work Together</p>
      <h2 class="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Partnership Opportunities</h2>
      <p class="text-stone-600 max-w-xl mx-auto">
        Interested in bringing KONPLOTT to your market? Let's explore how we can work together.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      {#each partnerships as p}
        <div class="bg-white border border-stone-200 rounded-2xl p-8 hover:border-amber-400 hover:shadow-md transition-all group">
          <div class="text-3xl mb-4">{p.icon}</div>
          <h3 class="text-lg font-bold text-stone-900 mb-3 group-hover:text-amber-700 transition-colors">{p.title}</h3>
          <p class="text-stone-500 text-sm leading-relaxed mb-6">{p.desc}</p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-sm font-medium text-amber-700 hover:text-amber-600 transition-colors"
          >
            {p.cta}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact" class="py-24 px-6 bg-white">
  <div class="max-w-2xl mx-auto text-center">
    <p class="text-amber-700 text-xs font-medium tracking-[0.2em] uppercase mb-4">Let's Connect</p>
    <h2 class="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Get in Touch</h2>
    <p class="text-stone-600 text-lg mb-12 leading-relaxed">
      Whether you're interested in distributing KONPLOTT, stocking our collections,
      or exploring creative collaborations — I'd love to hear from you.
    </p>

    <div class="bg-[#faf8f4] border border-stone-200 rounded-2xl p-8 mb-8 shadow-sm">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-14 h-14 rounded-full border-2 border-stone-200 overflow-hidden flex-shrink-0 bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center">
          {#if !contactPhotoError}
            <img src="/verena.jpg" alt="Verena" class="w-full h-full object-cover object-top" on:error={() => contactPhotoError = true} />
          {:else}
            <span class="font-bold text-stone-800">VV</span>
          {/if}
        </div>
        <div class="text-left">
          <p class="font-bold text-stone-900">Verena Vogel-Cohnitz</p>
          <p class="text-stone-500 text-sm">Head of Sales · KONPLOTT</p>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 text-sm text-stone-500 mb-6">
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Luxembourg
        </div>
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          KONPLOTT GmbH
        </div>
      </div>
      <div class="flex flex-col sm:flex-row gap-3">
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
          class="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#1ebe5c] text-white font-semibold rounded-xl transition-colors text-sm shadow-sm">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          WhatsApp
        </a>
        <a href={EMAIL}
          class="flex-1 flex items-center justify-center gap-2 py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium rounded-xl transition-colors text-sm">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          E-Mail
        </a>
        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer"
          class="flex-1 flex items-center justify-center gap-2 py-3 bg-[#0077b5] hover:bg-[#006599] text-white font-medium rounded-xl transition-colors text-sm">
          LinkedIn
        </a>
      </div>
    </div>
  </div>
</section>

<!-- FLOATING WHATSAPP (mobile only) -->
<a
  href={WHATSAPP}
  target="_blank"
  rel="noopener noreferrer"
  class="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5c] text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110"
  aria-label="WhatsApp öffnen"
>
  <svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
</a>

<!-- FOOTER -->
<footer class="py-8 px-6 border-t border-stone-200 bg-[#f3ede3]">
  <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
    <p class="text-stone-400 text-sm">© 2026 Verena Vogel-Cohnitz. All rights reserved.</p>
    <div class="flex items-center gap-4">
      <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" class="text-stone-400 hover:text-amber-700 transition-colors text-sm">LinkedIn</a>
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" class="text-stone-400 hover:text-[#25D366] transition-colors text-sm">WhatsApp</a>
    </div>
  </div>
</footer>
