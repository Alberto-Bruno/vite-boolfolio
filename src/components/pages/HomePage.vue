<script >
import axios from 'axios';
import ProjectList from '../projects/projectList.vue';
const apiBaseUrl = 'http://127.0.0.1:8000/api/';
export default {
    name: 'HomePage',
    components: { ProjectList },
    data() { return { projects: [], } },
    methods: {
        fetchProjects() {
            axios.get(apiBaseUrl + 'projects').then(res => {
                this.projects = res.data;
            })
        }
    },
    created() {
        this.fetchProjects();
    }
};
</script>

<template>
    ciao
    <projects-list :projects="projects"></projects-list>
</template>

<style></style>