<template>
  <q-layout view="lHh Lpr lFf">
    <div class="">
      <q-header class="toolbarMenu">
        <q-toolbar  flat round dens shadow-5>
          <q-btn
            class="text-primary drawerTr"
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="leftDrawerOpen = !leftDrawerOpen"
          />
          <q-toolbar-title class="text-primary"> <h6 class="logo">Galactica</h6> </q-toolbar-title>

            <ul  class="links flex-center row "  >
              <li  class="link col" v-for="(link , index) in links" :key="index">
                {{ link.title }}
              </li>
            </ul>

          <div class="text-primary">  <span class="material-icons iconsMenu">call</span> <span class="material-icons iconsMenu">language</span> </div>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        bordered
        temprory
        content-class="bg-grey-1"
        class="q-mini-drawer-only "
      >
        <q-list>
          <q-item-label header class="text-grey-8" >
          Galactica
          </q-item-label>
          <q-item clickable v-ripple v-for="(link , index) in links" :key="index">
          <q-item-section class="drawerLinks" v-model="linksActive">{{link.title}}</q-item-section>
        </q-item>
        </q-list>
      </q-drawer>
    </div>
    <q-page-container class="containerMain q-pl-none" style="padding-left: 0px ">
      <ff />
    </q-page-container>
  </q-layout>

</template>

<script>
import ff from '../pages/feature.vue'
export default {
  data() {
    return {
  }
},
component:{ff
}
}
</script>
<style media="screen">

</style>
