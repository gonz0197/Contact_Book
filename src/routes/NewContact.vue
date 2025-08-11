<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const phone = ref('');

const handleSubmit = () => {
  if (!firstName.value || !lastName.value || !email.value) {
    alert('First name, last name and email are required');
    return;
  }

  const newContact = {
    id: Date.now(),
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phone: phone.value,
  };

  const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  contacts.push(newContact);
  localStorage.setItem('contacts', JSON.stringify(contacts));
  router.push(`/contacts/${newContact.id}`);
};
</script>

<template>
  <div>
    <h1>Add New Contact</h1>

    <form @submit.prevent="handleSubmit">
      <label>First Name</label><br />
      <input v-model="firstName" type="text" required /><br />

      <label>Last Name</label><br />
      <input v-model="lastName" type="text" required /><br />

      <label>Email</label><br />
      <input v-model="email" type="email" required /><br />

      <label>Phone</label><br />
      <input v-model="phone" type="tel" /><br />

      <button type="submit">Save Contact</button>
    </form>
  </div>
</template>

<style scoped>
input {
  padding: 6px 10px;
  margin-bottom: 10px;
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  background-color: #ff6f91;
  border: none;
  color: white;
  padding: 8px 14px;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #e65a7e;
}
</style>
