<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { contacts as initialContacts } from '../data';

const searchTerm = ref('');
const contacts = ref([]);
const router = useRouter();

onMounted(() => {
  const stored = JSON.parse(localStorage.getItem('contacts'));
  if (stored && stored.length > 0) {
    contacts.value = stored;
  } else {
    contacts.value = initialContacts;
    localStorage.setItem('contacts', JSON.stringify(initialContacts));
  }
});

const filteredContacts = computed(() =>
  contacts.value
    .filter(c =>
      `${c.firstName} ${c.lastName}`.toLowerCase().includes(searchTerm.value.toLowerCase())
    )
    .sort((a, b) => a.lastName.localeCompare(b.lastName))
);

</script>

<template>
  <h1>Contact Book</h1>

  <div class="input-container">
    <input v-model="searchTerm" placeholder="Search contacts" type="text" />
  </div>

  <div class="cards-container">
    <div class="contact-card" v-for="contact in filteredContacts" :key="contact.id">
      <h3>{{ contact.firstName }} {{ contact.lastName }}</h3>
      <RouterLink :to="`/contacts/${contact.id}`">
        <button>Details</button>
      </RouterLink>
    </div>
  </div>

  <p v-if="filteredContacts.length === 0">No contacts found.</p>
</template>

<style>
.input-container input {
  padding: 8px;
  margin: 1rem 0;
  width: 100%;
  max-width: 350px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.input-container {
  display: flex;
  justify-content: end;
  margin-bottom: 20px;
}

.cards-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 20px;
}

.contact-card {
  border: 1px solid #ff6f91;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 5px #0000001a;
  background: white;
  max-width: 400px;
  width: 100%;
}

.contact-card h3 {
  margin: 0 0 20px 0;
}

button {
  background-color: #ff6f91;
  border: none;
  color: white;
  padding: 6px 14px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #e65a7e;
}
</style>
