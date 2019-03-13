<template>
  <div @click="onClickEvent(null)" class="button">
    <span>{{ title }}</span>
    <span @click="expand" class="expand">
      <i :class="{
        'fas': true, 
        'fa-chevron-down': !expanded,
        'fa-chevron-right': expanded,
      }"></i>
    </span>
    <div v-if="expanded" class="expanded">
      <ul>
        <li v-for="option in options" @click.stop="onClickEvent(option)">
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropdownButton',

  data() {
    return {
      expanded: this.expands,
    }
  },

  props: {
    title: String,
    options: Array,
    expands: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    onClickEvent(name) {
      this.$emit('click', {
        option: name,
      })
    },
    expand() {
      if (this.expanded) {
        this.$emit('collapse');
      }
      else {
        this.$emit('expand');
      }

      this.expanded = !this.expanded;
    }
  }
}
</script>

<style scoped>
  .expand {
    text-align: right;
    padding-left: 10px
  }

  .expanded {
    position: absolute;
    padding: 0;
    overflow: auto;
    margin-left: 6px;
    border: 1px solid black;
    border-radius: 3px;

    display: inline-block;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    text-align: left;
  }

  li {
    border-bottom: 1px solid black;
    padding: 2px 6px; 
  }

  li:last-child {
    border: none;
  }
</style>

<docs>
  Simple
```
  <DropdownButton
      title="Hello, I'm a button"
      :options="[
        'I also',
        'have',
        'a few',
        'options'
      ]"
  />
```

Expanded
```
  <div style="height:120px;">
    <DropdownButton
      title="Hello, I'm a button"
      :expands="true"
      :options="[
        'I also',
        'have',
        'a few',
        'options'
      ]"
    />
  </div>
```
</docs>