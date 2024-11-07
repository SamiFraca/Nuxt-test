<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import * as zod from "zod";
const fieldSchema = toTypedSchema(
  zod.string().min(1, "Field is required").email("Must be a valid email")
);
const onSubmit = (values: any) => {
  console.log(values);
};
</script>

<template>
  <div>
    <VeeForm @submit="onSubmit">
      <VeeField type="email" name="email" :rules="fieldSchema" />
      <VeeErrorMessage name="email" />
      <button>Sign up</button>
    </VeeForm>
  </div>
</template>
