
<script>
import axios from 'axios';
export default{
    name:'Show',
    data(){
        return{
           project:{},

        }
    },
    mounted(){
        axios.get(`http://localhost:8000/api/projects/${this.$route.params.slug}`)
        .then(resp=>{
            this.project=resp.data.results;
        
        })

    },
}
</script>


<template>
<h2>{{ project.title }}</h2>
<img class="w-25" :src="`http://localhost:8000//storage/${project.image}`" alt="" @v-if="project.image">
<p>{{ project.description }}</p>
<p v-if="project.type">progetto:{{ project.type.name }}</p> 
<span v-for="technology in project.technologies">
{{ technology.name + " " }}
</span>

</template>