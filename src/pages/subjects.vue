<template>
  <div id="subjects">
    <div class="q-pa-md text-center flex-center">
      <h3 class="subtile ">Курсы</h3>
      <hr class="subtileHr">
      <div class="row ">
        <div class="col-xs-12 col-sm-6 col-md-4">
          <q-card class="my-card">
            <q-img src="../assets/18166.jpg"  class="image" basic>

            </q-img>
            <q-card-section>
                   <div class="text-h6">Our Changing Planet</div>
                   <div class="text-subtitle2">by John Doe</div>
                 </q-card-section>
                 <q-card-section class="q-pt-none">
                   {{ lorem }}
                 </q-card-section>
                 <q-card-section class="q-pt-none">
              <div class="row buttonCl justify-end"><q-btn color="primary" left label="Primary"/></div>
               </q-card-section>
          </q-card>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4">
          <q-card class="my-card">
            <q-img src="../assets/2412440.jpg" class="image" basic>
            </q-img>
            <q-card-section>
                   <div class="text-h6">Our Changing Planet</div>
                   <div class="text-subtitle2">by John Doe</div>
                 </q-card-section>
                 <q-card-section class="q-pt-none">
                   {{ lorem }}
                 </q-card-section>
                 <q-card-section class="q-pt-none">
              <div class="row buttonCl justify-end"><q-btn color="primary" left label="Primary"/></div>
               </q-card-section>
          </q-card>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4">
          <q-card class="my-card">
            <q-img src="../assets/ca3d0300-c408-11ea-9888-cd7419d98ae8.jpg" class="image" basic>
            </q-img>
            <q-card-section>
                   <div class="text-h6">Our Changing Planet</div>
                   <div class="text-subtitle2">by John Doe</div>
                 </q-card-section>
                 <q-card-section class="q-pt-none">
                   {{ lorem }}
                 </q-card-section>
                    <q-card-section class="q-pt-none">
                 <div class="row buttonCl justify-end"><q-btn color="primary" left label="Primary"/></div>
                  </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    };
  },
};
</script>
<style scoped>
.my-card {
  width: 350px;
  margin-top: 30px;
  margin-left: 40px;
}
.image{
  height: 200px;
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
@media (max-width:400px) {
  .my-card{
    width: 300px;
    height: 430px;
    margin-left:20px;
  }
  .buttonCl{
    padding:-15px;
    font-size: 12px!important;
  }
}
@media (max-width:350px) {
  .my-card{
  margin-left:-5px;
  }
}
@media (max-width: 1000px) {
  .subtile{
    font-size: 35px;
  }
}
</style>
