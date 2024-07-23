<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Welcome to your Profile!</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div>
        <p>The user will be redirected to this page once successfully logged in.</p>
        <span><br /></span>
      </div>
      <div v-if="user">
        <p>ID: {{ user.id }}</p>
        <p>Name: {{ user.name }}</p>
        <p>Email: {{ user.email }}</p>
        <p>Email Verified at: {{ user.email_verified_at }}</p>
        <p>Created at: {{ user.created_at }}</p>
        <p>Updated at: {{ user.updated_at }}</p>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
      <span><br /></span>
      <div>
        <button @click="logout" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-6" to="/Login">Logout</button>
      </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'],
  data() {
    return {
      user: {},
    };
  },
  async created() {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://api-exam.totalmalesupplements.com/api/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      this.user = response.data;
    } catch (error) {
      console.error('Failed to fetch user details', error);
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('user-token');
      this.$router.push('/');
    }
  }
};

</script>
