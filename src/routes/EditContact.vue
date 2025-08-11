<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const contactId = Number(route.params.id);

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const phone = ref('');
const contactExists = ref(true);

onMounted(() => {
  const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  const contact = contacts.find(c => c.id === contactId);

  if (!contact) {
    contactExists.value = false;
    return;
  }

  firstName.value = contact.firstName;
  lastName.value = contact.lastName;
  email.value = contact.email;
  phone.value = contact.phone || '';
});

function handleSubmit() {
  if (!firstName.value || !lastName.value || !email.value) {
    alert('First name, last name and email are required');
    return;
  }

  const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  const index = contacts.findIndex(c => c.id === contactId);

  if (index === -1) {
    alert('Contact not found.');
    return;
  }

  contacts[index] = {
    id: contactId,
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phone: phone.value,
  };

  localStorage.setItem('contacts', JSON.stringify(contacts));

  router.push(`/contacts/${contactId}`);
}
</script>

<template>
  <div v-if="contactExists">
    <h1>Edit Contact</h1>

    <form @submit.prevent="handleSubmit">
      <label>First Name</label><br />
      <input v-model="firstName" type="text" required /><br />

      <label>Last Name</label><br />
      <input v-model="lastName" type="text" required /><br />

      <label>Email</label><br />
      <input v-model="email" type="email" required /><br />

      <label>Phone</label><br />
      <input v-model="phone" type="tel" /><br />

      <button type="submit">Save Changes</button>
    </form>
  </div>

  <div v-else>
    <p>Contact not found.</p>
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

</style>
