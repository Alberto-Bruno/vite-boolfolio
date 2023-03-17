<script>
import ProjectCard from './ProjectCard.vue';
export default {
    name: 'ProjectsList',
    props: { projects: Array },
    components: { ProjectCard }
}
</script>

<template>
    <project-card v-for="project in projects" :key="project.id" :project="project"></project-card>
</template>