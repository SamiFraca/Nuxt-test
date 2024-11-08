import { defineStore } from "pinia";

export const useFormStore = defineStore("form", {
  state: () => ({
    email: "",
    password: "",
  }),
  actions: {
    setEmail(updatedEmail: string) {
      this.email = updatedEmail;
    },
    
    setPassword(updatedPassword: string) {
      this.password = updatedPassword;
    },

    saveFormData() {
      const formData = {
        email: this.email,
        password: this.password,
      };
    },
  },
  getters:{
    getFormData(){
      
      
    }
  }
});
