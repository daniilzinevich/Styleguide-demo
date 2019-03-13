<template>
  <button class="button" @click="onClickEvent(null)">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'SimpleButton',
  props: {
    title: String,
  },
  methods: {
    onClickEvent(name) {
      this.$emit('click', {
        option: name,
      })
    },
  }
}
</script>

<style>
.button {
  font-size: 14px;
  display: inline-block;
  color: #000;
  background: white;
  border: 1px solid #444;
  border-radius: 3px;
  padding: 6px;
}
</style>

<docs>
Usage
```
<SimpleButton title="Hello, I'm a button"/>
```

Alternative text
```vue
<template>
	<SimpleButton :title="title" @click="alternateText"/>
</template>
<script>
export default {
  data() {
    return {
      index: 0,
      options: [
        'also',
        'an instance of',
        'the same instance of',
      ]
    }
  },
  computed: {
    title() {
      return `Hello, I'm ${this.options[this.index]} a button`;
    }
  },
  methods: {
    alternateText() {
      this.index = this.index + 1;
      if (this.index >= this.options.length) {
        this.index = 0;
      }
    }
  }
}
</script>
```
</docs>
