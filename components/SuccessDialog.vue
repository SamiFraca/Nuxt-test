<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
const props = defineProps<{ isVisible: boolean }>();
console.log(props.isVisible);
const emit = defineEmits<{ (e: "update:isVisible", value: boolean): void }>();

const closeDialog = () => {
  emit("update:isVisible", false);
};
</script>

<template>
  <Dialog :open="props.isVisible" >
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Congrats!</DialogTitle>
        <DialogDescription> Eres el usuario numero 100! </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button @click="closeDialog">Close</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
