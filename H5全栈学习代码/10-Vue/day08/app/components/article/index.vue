<template>
  <div class="article">
    {{categories}}
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
  data () {
    return {
      
    }
  },
  computed:{
      ...mapGetters(['msg','categories']),
  },
  methods:{
    ...mapActions(['findAllCategory'])
  },
  created(){
    this.findAllCategory().then().catch();
  }
}
</script>

<style>

</style>