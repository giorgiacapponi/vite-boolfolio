<script>
export default {
    name: "AppCard",
    props: {
        project: Object,

    },
    data() {
        return {

        }
    }
}

</script>

<template>
    <div class="card h-100">
        <img v-if="project.image" :src="`http://localhost:8000//storage/${project.image}`" class="card-img-top" alt="" />

        <div v-else>
            senza immagine
        </div>
        <div class="card-body">
            <h5>{{ project.title }}</h5>
            <p v-if="(project.technologies.length > 0)">tecnologie:
                <a href="" v-for="technology in project.technologies"> {{ technology.name + " " }} </a>
            </p>
            <p v-else>tecnologia non specificata</p>
            <p v-if="project.type">tipo progetto:{{ project.type.name }}</p>
            <p>{{ project.description }}</p>


        </div>
    </div>
</template>