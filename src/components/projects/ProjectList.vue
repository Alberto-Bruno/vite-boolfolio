<script >
import ProjectCard from './ProjectCard.vue';
export default {
    name: 'ProjectList',
    props: { projects: Array },
    components: { ProjectCard }
};
</script>

<template>
    <div v-for="project in projects" :key="project.id" class="container">
        <project-card :project="project"></project-card>
    </div>
</template>

<style></style>