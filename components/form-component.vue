<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import * as zod from "zod";
const validationSchema = toTypedSchema(
  zod.object({
    email: zod
      .string()
      .min(1, { message: "This is required" })
      .email({ message: "Must be a valid email" }),
    password: zod
      .string()
      .min(1, { message: "This is required" })
      .min(8, { message: "Too short" }),
  })
);
const onSubmit = (values: any) => {
  console.log(values);
};
</script>

<template>
  <div>
    <VeeForm
      :validation-schema="validationSchema"
      @submit="onSubmit"
      class="vee-form"
    >
      <label for="email">Email</label>
      <VeeField type="email" name="email" />
      <VeeErrorMessage name="email" />
      <label for="password">Password</label>
      <VeeField type="password" name="password" />
      <VeeErrorMessage name="password" />
      <button>Sign up</button>
    </VeeForm>
  </div>
</template>
<style>
.vee-form {
  display: flex;
  gap: 4px;
  flex-direction: column;
  max-width: max-content;
}
</style>
