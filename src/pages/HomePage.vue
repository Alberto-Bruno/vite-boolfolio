<script>
import axios from 'axios';
const apiBaseUrl = 'http://localhost:8000/api/';
import ProjectsList from '../components/projects/ProjectsList.vue';
import ErrorAlert from '../components/partials/ErrorAlert.vue';
export default {
    name: "HomePage",
    components: { ProjectsList, ErrorAlert },
    data() {
        return {
            projects: [],
            isLoading: false,
            hasError: false,
        }
    },
    methods: {
        fetchProjects() {
            this.isLoading = true;
            axios.get(apiBaseUrl + 'projects').then(res => {
                this.projects = res.data;
            }).catch(() => {
                this.hasError = true;
            }).then(() => {
                this.isLoading = false;
            })
        }
    },
    created() {
        this.fetchProjects();
    }
}
</script>
<template>
    <app-loader v-if="isLoading"></app-loader>

    <!-- projects -->
    <div v-else class="container">
        <error-alert :hasError="hasError" @close="hasError = false"></error-alert>

        <projects-list v-if="projects.length" :projects="projects"></projects-list>

        <div v-else class="text-center mt-5">
            <h2>There aren't projects to show.</h2>
        </div>

    </div>
</template>
<style></style>