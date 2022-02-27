<template>
  <div class="">
  <q-page class="flex flex-center  first">
    <div class="q-pa-md ">
    <div class="row">
      <div class="col">
        <div class="info" style="">
          <h6 class="" style="padding-top:0px 0px 0px; font-size:60px;fonr-weight:800; color:#1E88E5;">
             <span class="material-icons iconright">arrow_right_alt</span> </h6>
          <h1 class="logo1">Galactica  <h1 class="logo">& Education center</h1>  </h1>
          <h6  class="Garanty">Мы гарантируем IELTS 7+,и будем указывать все услуги <br> чтобы вы достигли всего что вы хотели! </h6>
          <br>
           <q-btn color="primary" size="md" label="Узнать больше" />
        </div>

      </div>
      <div class="col indexBlock">
        <img
          alt="Quasar logo"
          src="../assets/3977647.jpg"
          width="550"
          height="350"
          class="imgMain"
        >
      </div>
    </div>
  </div>
  </q-page>
  <q-page>
    <div class="feature">
      <feature />
    </div>
    <div class="teachers">
      <teachers />
    </div>
    <div class="subjects">
    <subjects />
    </div>
    <div class="abillities">
      <abillities />
    </div>
    <div class="skills">
      <skills />
    </div>
  </q-page>
  </div>
</template>

<script>
import feature from './feature.vue'
import subjects from './subjects.vue'
import abillities from './abilities.vue'
import skills from './skills.vue'
export default {
  name: 'PageIndex',
  components: {
    feature,subjects,abillities,skills
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Slabo+27px&display=swap');
.feature{
  margin-top:-100px;
}
.iconright{
  margin-bottom: -20px;
}
.logo{
  font-size: 4rem;
  margin: -15px 0px 0px!important;
  font-family: 'Slabo 27px', serif;
}
.imgMain img{
  margin-bottom: 20px;
}
.info{
  margin-bottom:150px
}
.logo1{
  font-weight: 500;
  font-size: 4rem;
  color: #1E88E5;
  margin: 0px 0px 0px!important;
}
@media (max-width: 1167px) {
  .indexBlock{
    display: none;
  }
.Garanty{
  font-size: 18px;
}
.info{
  margin-bottom:250px
}
.feature{
  margin-top:-200px;
}
  .logo{
    font-size: 35px;
  }
  .logo1{
    font-size:40px;
  }
}
</style>
