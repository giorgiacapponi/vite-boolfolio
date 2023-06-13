<script>
export default {
    name:"AppCard",
    props:{
        project:Object,
       
    },
    data(){
        return{

        }
    }
}

</script>

<template>
 <div class="card h-100">
        <img v-if="project.image" :src="`http://localhost:8000//storage/${project.image}`" class="card-img-top h-50" alt="" />
        <div v-else>
           senza immagine
        </div>
        <div class="card-body">
            <h5>{{ project.title }}</h5>
            <p>{{ project.description }}</p>
           
            
        </div>
    </div>

</template>