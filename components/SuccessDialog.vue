<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
type formDataProps = {
  email: string;
  password: string;
};

const props = defineProps<{ isVisible?: boolean; formData?: formDataProps }>();
console.log(props.isVisible);
const emit = defineEmits<{ (e: "update:isVisible", value: boolean): void }>();

const closeDialog = () => {
  emit("update:isVisible", false);
};
</script>

<template>
  <Dialog :open="props.isVisible">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Congrats!</DialogTitle>
        <DialogDescription>
          <p>Email: {{ props.formData?.email }}</p>
          <p>Password: {{ props.formData?.password }}</p>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button @click="closeDialog">Close</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
