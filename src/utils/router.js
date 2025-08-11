import { createRouter, createWebHistory } from "vue-router";

import Home from "../routes/Home.vue";
import ContactDetails from "../routes/ContactDetails.vue";
import NewContact from "../routes/NewContact.vue";
import EditContact from "../routes/EditContact.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/new',
            component: NewContact
        },
        {
            path: '/contacts/:id',
            component: ContactDetails
        },
        {
            path: '/contacts/:id/edit',
            component: EditContact
        }
    ]
});

export default router;

