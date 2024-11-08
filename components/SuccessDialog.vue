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
console.log(props.isVisible)
</script>

<template>
  <Dialog :open="props.isVisible">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Congrats!</DialogTitle>
        <DialogDescription> Eres el usuario numero 100! </DialogDescription>
      </DialogHeader>
      <DialogFooter> Save changes </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
