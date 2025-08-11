<script setup>

import { RouterLink } from 'vue-router'

</script>

<template>

    <nav>
        <ul>
            <li>
                <RouterLink to="/">Contacts</RouterLink>
            </li>
            <li>
                <RouterLink to="/new">New Contact</RouterLink>
            </li>
        </ul>
    </nav>
    
</template>

<style scoped>
nav {
    background-color:pink;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 95px;
    width: 100%;
    margin: 0;
    padding: 0;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 24px;
}

nav a {
    text-decoration: none;
    color:white;
   } 

nav a.router-link-active {
    color: darkslateblue;
    font-weight: bold;
}
</style>