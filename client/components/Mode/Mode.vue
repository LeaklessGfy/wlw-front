<template>
  <b-card
    :img-src="mode.image"
    img-top
    bg-variant="dark"
    img-alt="Mode image"
    style="max-width: 20rem;"
    class="mb-2 text-white mode"
    v-on:click="onClick(mode)"
  >
    <h4 slot="header">
      {{ mode.name }} <b-badge>{{ mode.numberPlayer }}</b-badge>
    </h4>
    <p class="card-text">
      {{ mode.description }}
    </p>
  </b-card>
</template>

<script>
export default {
  props: {
    mode: { type: Object, required: true },
    onClick: { type: Function, required: true }
  }
};
</script>

<style scoped>
.mode:hover {
  opacity: 1;
  border-color: #fff;
  cursor: pointer;
}
</style>

