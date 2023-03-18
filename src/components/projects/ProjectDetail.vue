<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
import ErrorAlert from '../partials/ErrorAlert.vue';
const apiBaseUrl = 'http://localhost:8000/api/';
export default {
    name: 'ProjectDetail',
    components: { ProjectCard, ErrorAlert },
    data() {
        return {
            project: null,
            isLoading: false,
            hasError: false,
        }
    },
    methods: {
        getProject() {
            this.isLoading = true;
            const endpoint = apiBaseUrl + 'projects/' + this.$route.params.id;
            axios.get(endpoint)
                .then(res => {
                    this.project = res.data;
                }).catch(() => {
                    this.hasError = true;
                })
                .then(() => { this.isLoading = false });
        },
    },
    created() {
        this.getProject();
    }
};
</script>
<template>
    <app-loader v-if="isLoading"></app-loader>
    <div v-else>
        <error-alert :hasError="hasError" @close="hasError = false"></error-alert>
        <project-card :project="project" :isDetail="true"></project-card>
    </div>
</template>