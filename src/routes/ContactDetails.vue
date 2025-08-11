<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const STORAGE_KEY = 'contacts';

const id = Number(route.params.id);

const contacts = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
const contact = ref(contacts.find(c => c.id === id));

function handleDelete() {
  if (confirm('Delete this contact?')) {
    const updatedContacts = contacts.filter(c => c.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedContacts));
    router.push('/');
  }
}
</script>

<template>
  <div v-if="contact" class="contact-card">
    <h1>{{ contact.firstName }} {{ contact.lastName }}</h1>
    <p><strong>Email:</strong> {{ contact.email }}</p>
    <p><strong>Phone:</strong> {{ contact.phone || 'N/A' }}</p>

    <RouterLink :to="`/contacts/${id}/edit`">
      <button>Edit</button>
    </RouterLink>

    <button @click="handleDelete">
      Delete
    </button>

    <RouterLink to="/" class="back-contacts">Back to Contacts</RouterLink>
  </div>

  <div v-else>
    <p>Contact not found.</p>
    <RouterLink to="/" class="back-contacts">Back to Contacts</RouterLink>
  </div>
</template>

<style scoped>
button {
  margin-right: 20px;
}

a.back-contacts{
    color: #0b3d91;
    font-weight: bold;
    display: block; 
    margin-top: 20px;
    text-decoration: none;
}

a.back-contacts:hover {
    color: tomato;
    text-decoration: none;
}

</style>