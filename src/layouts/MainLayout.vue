<template>
  <q-layout view="lHh Lpr lFf">
    <div class="">
      <q-header class="toolbarMenu">
        <q-toolbar flat round dens shadow-5>
          <q-btn
            class="text-primary drawerTr"
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="leftDrawerOpen = !leftDrawerOpen"
          />
          <q-toolbar-title class="text-primary">
            <h6 class="logo">Galactica</h6>
          </q-toolbar-title>

          <ul class="links flex-center row">
            <li class="link col" v-for="(link, index) in links" :key="index">
              {{ link.title }}
            </li>
          </ul>

          <div class="text-primary iconsDiv">
            <span class="material-icons iconsMenu">call</span>
            <span class="material-icons iconsMenu">language</span>
          </div>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        bordered
        temprory
        content-class="bg-grey-1"
        class="q-mini-drawer-only"
      >
        <q-list>
          <q-item-label header class="text-grey-8"> Galactica </q-item-label>
          <q-item
            clickable
            v-ripple
            v-for="(link, index) in links"
            :key="index"
          >
            <q-item-section class="drawerLinks" v-model="linksActive">{{
              link.title
            }}</q-item-section>
          </q-item>
        </q-list>
      </q-drawer>
    </div>
    <q-page-container class="containerMain q-pl-none" style="padding-left: 0px">
      <router-view />
    </q-page-container>
    <div class="footer q-pa-md">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-6">
            <h5 class="title">Контакты</h5>
            <span class="material-icons iconsMenu">location_on</span>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.1264277442033!2d69.24867591483708!3d41.32786410764697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b1a7e9eb701%3A0x82f881aef070c2e6!2sSevenPlus%20-%20IELTS%20%26%20English%20courses!5e0!3m2!1sen!2s!4v1604867020000!5m2!1sen!2s"
              width="600"
              height="150"
              frameborder="0"
              style="border: 0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
          <div class="col-md-3">
            <h5 class="title">Контакты</h5>
            <span class="material-icons iconsMenu">call</span><br /><br />
            <p>+998 71 2033777</p>
            <br />
            <p>+998 71 2031777</p>
          </div>
          <div class="col-md-3">
            <h5 class="title">Контакты</h5>
            <span class="material-icons iconsMenu">call</span><br /><br />
            <a
              href="https://icons8.com/icon/Xy10Jcu1L2Su/instagram"
              target="_blank"
              ><img
                src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
            /></a>
            <a
              href="https://icons8.com/icon/Xy10Jcu1L2Su/instagram"
              target="_blank"
              ><img
                src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
            /></a>
            <br />
            <a
              href="https://icons8.com/icon/Xy10Jcu1L2Su/instagram"
              target="_blank"
              ><img
                src="https://img.icons8.com/fluent/48/000000/telegram-app.png"
            /></a>
            <a
              href="https://icons8.com/icon/Xy10Jcu1L2Su/instagram"
              target="_blank"
            >
              <img src="https://img.icons8.com/fluent/48/000000/tiktok.png"
            /></a>
          </div>
        </div>
        <div class="row text-center">
          <div class="col-12">
            <p class="conclusion">© 2020 Все права защищены</p>
          </div>

        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false,
      linksActive: "",
      // isPhoneOrTablet: true,
    };
  },
  methods: {
    isPhoneOrTablet() {
      return window.outerWidth < 1175;
    },
  },
  computed: {
    ...mapGetters(["links"]),
  },
};
</script>
<style scoped>
.iconsDiv{
  display: flex;
}
.conclusion{
  padding-bottom:0px;
  padding-top:40px;
}
.title {
  color: #1976d2;
  margin: 20px;
}
.iconsImg {
  width: 40px;
  height: 40px;
  cursor: pointer;
}
.footer {
  padding: 20px;
  margin-top: 50px;
  background: #e3f2fd;
}
.footer a{
  padding: 10px;
}
.footer p {
  color: #455a64;
  font-size: 20px;
}
.footer .iconsMenu {
  color: yellow;
  font-size: 40px;
  padding: 10px;
}
.toolbar {
  box-shadow: 10, 10, 10px black;
}
.iconsMenu {
  font-size: 25px;
  margin-right: 10px;
  cursor: pointer;
}
.containerMain {
  .padding-left: 0px !important;
}
.drawerLinks {
  color: #1e88e5;
}
.links {
  display: flex;
  margin-right: 250px;
}
.link {
  color: #1e88e5;
  font-size: 17px;
  display: flex;
  padding: 5px 5px 5px 5px;
  cursor: pointer;
  margin-left: 15px;
  margin-right: 15px;
  display: flex;
  z-index: 99;
}
.link:hover {
  color: #1e88e5;
  transition: 0.6s;
  font-size: 19px;
}
.toolbarMenu {
  background: white;
  box-shadow: 0 0 2px #1e88e5;
}
.logo {
  z-index: 999;
}
@media (max-width: 1167px) {
  .link {
    display: none;
  }
  .iconsDiv {
    margin-left:-100px!important;
    display: flex;
  }
}
@media (max-width: 445px) {
  .iconsDiv {
    margin-left:-250px!important;
    display: flex;
  }
}
@media (min-width: 1167px) {
  .drawerTr {
    display: none;
  }
}
</style>
