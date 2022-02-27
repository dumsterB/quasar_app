<template>
  <div id="abilities">
    <div class="q-pa-md text-center flex-center  blockBackground">
        <div class="container">
            <h3 class="subtile ">Преимущество</h3>
              <hr class="subtileHr">
      <div class="row block1 ">
         <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6">
           <img src="https://www.sevenplus.uz/img/je.jpg" class="image" alt="">
         </div>
         <div class="itemL col-md-1"></div>
         <div class="col-md-5  col-sm-12 col-xs-12 col-lg-6">
           <h4 class="textBlocks">General English</h4>
           <h6 class="textP">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electro</h6>
   <q-btn color="primary" class="btnC" size="md" label="Primary" />
         </div>
      </div>
          <!-- <h6><span class="material-icons  iconright">arrow_right_alt</span> </h6> -->
      <div class="row block1 ">
         <div class="col-md-5  col-sm-12 col-xs-12 col-lg-6">
           <h4 class="textBlocks">Подготовка к IELTS</h4>
           <h6 class="textP">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electro</h6>
   <q-btn color="primary" class="btnC" size="md" label="Primary" />
         </div>
          <div class="itemR col-md-1"></div>
         <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6">
           <img src="https://www.sevenplus.uz/img/online.jpg" class="image" alt="">
         </div>
      </div>
      <!-- <h6><span class="material-icons  iconright">arrow_right_alt</span> </h6> -->
      <div class="row block1 ">
         <div class="col-md-6 imageDiv col-sm-12 col-xs-12 col-lg-6">
           <img src="https://www.sevenplus.uz/img/math.jpg" class="image" alt="">
         </div>
           <div class="itemL col-md-1"></div>
         <div class="col-md-5  col-sm-12 col-xs-12 col-lg-6">
           <h4 class="textBlocks">Английский для детей 9-14 лет</h4>
           <h6 class="textP">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electro</h6>
   <q-btn color="primary" class="btnC" size="md" label="Primary" />
         </div>
      </div>
    </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({}),
};
</script>
<style scoped>
.image{
  height: 400px;
  width: 600px;
}
.iconright{
  font-size: 80px;
  color: yellow;
  margin: auto;
}
.textP{
  color: #333333;
}
.subtile{
    font-family: 'Slabo 27px', serif;
    color: #1E88E5;
    margin: 20px;
}
.btnC{
  margin: 10px;
}
.itemR{
  border-right: 2px solid yellow;
  height: 200px;
  margin: auto;
}
.itemL{
  border-left: 2px solid yellow;
  height: 200px;
  margin: auto;
}
.textBlocks{
  color: #1E88E5;
  margin-bottom: 20px;
}
.subtileHr{
  width: 250px;
  height: 2px;
  border: none;
  background: yellow;
}
.blockBackground{
  background: #E3F2FD;

}
.block1{
  padding: 30px;
}@media (max-width:700px) {
  .itemR{
    border: none;
  }
  .itemL{
    border:none;
  }

  .image{
    height: 300px;
    width: 300px;
  }
  .block1{
    margin-right: 10px;
  }
  .textP{
    font-size: 15px;
  }
}
@media (max-width: 1000px) {
  .subtile{
    font-size: 35px;
  }
  .textBlocks{
    font-size: 30px;
  }
}
@media (max-width: 400px) {
  .imageDiv{
    margin-left:10px;
  }
}
</style>
