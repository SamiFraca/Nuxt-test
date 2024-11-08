<script setup lang="ts">
import { useForm } from "vee-validate";
import { formSchema } from "~/schemas/form-schema";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values) => {
  console.log("Form submitted!", values);
});
</script>

<template>
  <form @submit="onSubmit" class="max-w-96 m-auto h-svh flex flex-col  justify-center gap-4">
    <FormField v-slot="{ componentField }" name="email">
      <FormItem>
        <FormLabel>Email <span class="text-red-500">*</span></FormLabel>
        <FormControl>
          <Input type="text" placeholder="Email" v-bind="componentField" />
        </FormControl>
        <FormDescription> This is your public display email. </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="password">
      <FormItem>
        <FormLabel>Password <span class="text-red-500">*</span></FormLabel>
        <FormControl>
          <Input type="password" placeholder="Password" v-bind="componentField" />
        </FormControl>
        <FormDescription> Choose a secure password. </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button type="submit"> Submit </Button>
  </form>
</template>
