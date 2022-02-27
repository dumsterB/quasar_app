<template>
  <div id="feature">
 <div class="feature">
     <div class="q-pa-md">
  <div class="column text-center" style="">
    <h3 class="subtile ">Наши преимущества</h3>
    <hr class="subtileHr">
    <br><br>
    <div class="row">
      <!-- <div class="featureBlock">
            <div class="col-6  featureImg">  <img src="../assets/6531.jpg" class="" height="500" alt=""></div>
      </div> -->
      <div class="col-12">
        <div class="row featureItems">
        <div class="col-4 col-md-4 col-xs-6  featureItem">
        <img src="https://img.icons8.com/cute-clipart/64/000000/camera.png"/>
         <h6 class="text-primary items">Live Трансляция <br> каждого урока</h6>
        </div>
        <div class="col-4 col-md-4 col-xs-6 featureItem">
          <img src="https://img.icons8.com/cute-clipart/64/000000/application-window.png"/>
         <h6 class="text-primary items">Эксклюзивная <br> программа</h6>
        </div>
        <div class="col-4 col-md-4 col-xs-6 featureItem">
           <img src="https://img.icons8.com/fluent/64/000000/person-growth.png"/>
         <h6 class="text-primary items">Профессиональные <br> педагоги</h6>
        </div>
        <br><br>
        <div class="col-4 col-md-4 col-xs-6 featureItem">
        <img src="https://img.icons8.com/cotton/64/000000/private-wall-mount-camera.png"/>
         <h6 class="text-primary items">Мониторинг <br> посещений</h6>
        </div>
        <div class="col-4 col-md-4 col-xs-6 featureItem">
        <img src="https://img.icons8.com/cute-clipart/64/000000/learning.png"/>
         <h6 class="text-primary items">Инновационное <br> обучение</h6>
        </div>
        <div class="col-4 col-md-4 col-xs-6 featureItem">
      <img src="https://img.icons8.com/cute-clipart/64/000000/machine-learning.png"/>
         <h6 class="text-primary items">Индивидуальный <br> куратор</h6>
        </div>
        </div>
       </div>
    </div>
  </div>
</div>
 </div>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({

  })
}
</script>
<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Slabo+27px&display=swap');
.feature{
  background:#E3F2FD;
  height: 100%;
}
.subtile{
    font-family: 'Slabo 27px', serif;
    color: #1E88E5;
    margin: 20px;

}
.subtileHr{
  width: 250px;
  height: 2px;
  border: none;
  background: yellow;
}
.featureIcons{
  font-size: 70px;
  color: orange;
}
.featureItem{
  padding: 5px;
}

@media (max-width: 1000px) {
  .featureBlock{
    display: none;
  }
  .featureItems{
    /* margin-top: 0px;
    margin-left: 0px */
  }
  .items{
    font-size: 15px;
  }
  .subtile{
    font-size: 35px;
  }
}
</style>
