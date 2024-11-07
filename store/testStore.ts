import { defineStore } from "pinia";

export const useTestStore = defineStore("test", {
  state: () => ({
    message: "hello",
  }),
  actions: {
    setMessage(newMessage: string) {
      this.message = newMessage;
    },
  },
  getters: {
    upper(): string {
      return this.message.toUpperCase();
    },
  },
});
