<template>
  <div>
    <h1>Content Test Page</h1>
    <div v-if="content">
      <h2>Content Found:</h2>
      <pre>{{ content }}</pre>
    </div>
    <div v-else>
      <p>No content found</p>
    </div>
  </div>
</template>

<script setup>
const { data: content } = await useAsyncData('test', () => {
  return queryContent().find()
})
</script>