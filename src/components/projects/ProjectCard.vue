<script>
export default {
    name: 'ProjectCard',
    props: { project: Object },
}
</script>

<template>
    <div class="card m-3">
        <div class="card-header">
            <h2>{{ project.title }}</h2>
        </div>
        <div class="card-body">
            <p>{{ project.content }}</p>
        </div>
        <div class="card-footer">
            <i v-for="technology in project.technologies" :key="technology.id" :class="technology.class_icon"
                class="fa-2x me-4"></i>
        </div>
    </div>
</template>