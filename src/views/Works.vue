<template>
  <div>
    <section v-if="work_title !== 404" class="section border-t">
      <div class="container">
        <div class="row justify-content-center mb-5 ">
          <div class="col-md-8 text-center">
            <h2 class="text-uppercase heading border-bottom mb-4">{{ work_title }}</h2>
          </div>
        </div>

        <div class="row ">
          <div v-for="project in work_projects" class="col-md-3 mt-5 ">
            <a target="_blank" :href="'/project/'+work_id+'/'+project.id" class="link-thumbnail">
              <div class="card" >
                <img  @error="replaceImage" :src='"/assets/site_images/"+work_id+"/"+project.id+"/main.jpg"' class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-title">{{project.name}}</p>
                </div>
              </div>

            </a>
          </div>
        </div>
      </div>
    </section>
    <NotFound v-else/>
  </div>
</template>

<script>
import NotFound from "@/views/NotFound";
export default {
  name: "Works",
  components: {NotFound},
  data() {
    return {
    }
  },
  computed:{
    work_title:function () {
      if(this.works.hasOwnProperty(this.$route.params.id)){
        return this.works[this.$route.params.id].name;
      }
      return 404;
    },
    work_id:function () {
      if(this.works.hasOwnProperty(this.$route.params.id)){
        return this.$route.params.id;
      }
    },
    work_projects:function (){
      if(this.projects.hasOwnProperty(this.$route.params.id)){
        return this.projects[this.$route.params.id];
      }
    }
  },
  methods:{
    replaceImage(e){
      e.target.src = '/assets/img/favicon.png';
      $(e.target).css('object-fit', 'scale-down');
    }
  }
}
</script>

<style scoped>
.card-img-top{
  object-fit: cover;
  min-height: 150px!important;
  max-height: 150px!important;
  height: 150px!important;
}
</style>