import { defineStore } from "pinia";

export const useFormStore = defineStore("form", {
  state: () => {
    if (import.meta.client) {
      const savedData = localStorage.getItem("form-data");
      const parsedData = savedData ? JSON.parse(savedData) : null;
      return {
        email: parsedData?.email || "",
        password: parsedData?.password || "",
      };
    }

    return {
      email: "",
      password: "",
    };
  },
  actions: {
    setEmail(updatedEmail: string) {
      this.email = updatedEmail;
    },

    setPassword(updatedPassword: string) {
      this.password = updatedPassword;
    },

    saveFormData() {
      localStorage.setItem(
        "form-data",
        JSON.stringify({ email: this.email, password: this.password })
      );
    },
  },
  getters: {
    getFormData() {
      if (import.meta.client) {
        const data = localStorage.getItem("form-data");
        return data ? JSON.parse(data) : { email: "", password: "" };
      }
    },
  },
});
