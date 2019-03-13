<template>
	<button class="btn btn-default">
		{{ msg }}
	</button>
</template>

<script>
export default {
	name: 'SimpleButton',
	props: {
		msg: String
	}
}
</script>

<style scoped>
  .btn {
    border-color: #444;
  }
</style>

<docs>
	```
	<SimpleButton msg="Hello, I'm a button"/>
	```
</docs>
