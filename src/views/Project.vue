<template>
  <div>

    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <h1 class="heading mb-4  ">{{ project_title }}</h1>
        </div>
        <div class="row mb-5">
          <div class="col-md-12 text-center">
            <img :src="project_img" alt="Image placeholder" class="img-fluid">
          </div>
        </div>
        <!--
         <div class="row mb-5">
          <div class="col-md-6 mx-auto text-right">
            <h2 class="text-uppercase heading mb-4  ">وصف المشروع</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta
              sit quam minima expedita atque corrupti reiciendis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem dolorum nesciunt ipsum reiciendis
              eveniet enim, molestiae, consequuntur natus magnam aspernatur! Saepe laboriosam repellat quidem ratione,
              illo harum. Nam tempora, debitis quisquam nostrum nulla velit. Incidunt placeat obcaecati quam tempora
              dolorum, corporis ipsum vero consectetur debitis suscipit quisquam, non nobis similique.</p>
          </div>
        </div>
         -->

        <div class="row mb-5">
          <div v-for="img in images" class="col-md-4 text-center mb-5">
            <img :src="img" alt="Image placeholder" class="img-fluid mb-4 imgs img-thumbnail">
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Project",
  data(){
    return{
      images :[],
    }
  },
  computed: {
    project_title: function () {
      if (this.projects.hasOwnProperty(this.$route.params.work)) {
        if (this.projects[this.$route.params.work][this.$route.params.id]) {
          return this.projects[this.$route.params.work][this.$route.params.id].name;
        }
      }
    },
    project_img: function () {
      return "/assets/site_images/"+this.$route.params.work+"/"+this.$route.params.id+"/main.jpg";
    }
  },
  methods: {
    getImages() {
      let t = require.context("../../public/assets/site_images/", true, /^\.\/.*$/, 'sync');

      let files = [];
      t.keys().forEach(k => {
        if(k.includes(`/${this.$route.params.work}/${this.$route.params.id}/`)){
          k = k.replace("./" , `/assets/site_images/`)
          files.push(k);
        }

      });

     this.images = files;

    }
  },
  mounted() {
    this.getImages();
  }
}
</script>

<style scoped>
.imgs{
  height: 300px!important;
}
</style>