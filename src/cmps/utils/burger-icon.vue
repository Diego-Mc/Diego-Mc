<template>
  <div class="menu cross menu--1">
    <label>
      <input type="checkbox" v-model="isChecked" />
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="30" />
        <path class="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />
        <path class="line--2" d="M0 50h70" />
        <path class="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />
      </svg>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChecked: false,
    }
  },
  watch: {
    isChecked(curr) {
      this.$emit('isOpen', curr)
    },
  },
}
</script>

<style lang="scss" scoped>
input {
  display: none;
}

label {
  height: 100%;
}

svg {
  cursor: pointer;
  width: 100%;
  height: 100%;
  // transform: scale(200%);
}

.menu--1 label {
  bottom: 0;
}

.menu--1 label {
  right: 0;
}

path {
  fill: none;
  stroke: #ffffff;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  --length: 24;
  --offset: -38;
  stroke-dasharray: var(--length) var(--total-length);
  stroke-dashoffset: var(--offset);
  transition: all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
}

circle {
  fill: #fff3;
  fill: #fff0;
  opacity: 0;
}

label:hover circle {
  opacity: 1;
}

.cross input:checked + svg .line--1,
.cross input:checked + svg .line--3 {
  --length: 22.627416998;
}

.cross input:checked + svg .line--2 {
  --length: 0;
}

.back input:checked + svg .line--1,
.back input:checked + svg .line--3 {
  --length: 8.602325267;
}

.menu--1 .line--1,
.menu--1 .line--3 {
  --total-length: 126.64183044433594;
}

.menu--1 .line--2 {
  --total-length: 70;
}

.menu--1 input:checked + svg .line--1,
.menu--1 input:checked + svg .line--3 {
  --offset: -94.1149185097;
}

.menu--1 input:checked + svg .line--2 {
  --offset: -50;
}
</style>
