<script setup lang="ts">
const onSubmit = (values:any) => {
  console.log(values);
};
</script>

<template>
  <div>
    <VeeForm  @submit="onSubmit">
      <VeeField type="email" name="email" />
      <button>Sign up </button>
    </VeeForm>
  </div>
</template>
