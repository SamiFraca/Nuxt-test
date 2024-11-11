<script setup lang="ts">
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const props = defineProps<{ isVisible?: boolean }>();

const professions = [
  { value: "Butaneer", label: "Butanero" },
  { value: "ProjectManager", label: "PM" },
  { value: "Afiladoration", label: "Afilador" },
  { value: "Influencer", label: "Influencer" },
];
</script>

<template>
  <FormField v-slot="{ componentField }" name="profession">
    <FormItem>
      <FormLabel>Email</FormLabel>

      <Select v-bind="componentField">
        <FormControl>
          <SelectTrigger>
            <SelectValue
              placeholder="Select a verified profession to display"
            />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="Butanero"> Butanero </SelectItem>
            <SelectItem value="PM"> PM </SelectItem>
            <SelectItem value="Afilador"> Afilador</SelectItem>
            <SelectItem value="Influencer"> Influencer</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <FormDescription> Choose your profession. </FormDescription>
      <FormMessage />
    </FormItem>
  </FormField>
</template>
