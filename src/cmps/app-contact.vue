<template>
  <div class="contact-container app-section" id="contact">
    <section class="app-contact">
      <h2 class="section-header">{{ $t('contact.header') }}</h2>
      <div class="contact-text">
        <p>
          {{ $t('contact.status') }}
        </p>
        <p>
          {{ $t('contact.cta.p1') }}
          <a href="tel:+97254-673-6558">{{ $t('contact.cta.act1') }}</a>
          {{ $t('contact.cta.p2') }}
          <a href="mailto:projkd1@gmail.com">{{ $t('contact.cta.act2') }}</a
          >.
        </p>
      </div>
      <section class="socials">
        <a href="mailto:projkd1@gmail.com" class="social-link">
          <i class="bi bi-envelope-fill"></i>
          <span>projkd1@gmail.com</span>
        </a>
        <a href="tel:+97254-673-6558" class="social-link">
          <i class="bi bi-telephone-fill"></i>
          <span>054-6736558</span>
        </a>
        <a
          href="https://www.linkedin.com/in/diego-mon/"
          target="_blank"
          class="social-link">
          <i class="bi bi-linkedin"></i>
          <span>/diego-mon</span>
        </a>
        <a
          href="https://github.com/Diego-Mc"
          target="_blank"
          class="social-link">
          <i class="bi bi-github"></i>
          <span>/Diego-Mc</span>
        </a>
      </section>
    </section>
    <section class="footer-note">
      <small>&copy; {{ $t('contact.footerNote') }}</small>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
