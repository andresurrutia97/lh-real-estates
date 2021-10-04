<template>
  <img :class="`${show ? 'block' : 'hidden'} absolute`" src="~/assets/img/ellipse.png" />
</template>

<script>
export default {
  name:'NotificationEllipse',
  props: { show: { type: Boolean, default: false } },
}
</script>
