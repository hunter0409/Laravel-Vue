<template>
  <div class="content-wrapper">
    <Header active_class='myquestions'/>
    <responsive-nav />
    <div class="questions_layer">
      <div v-if="questions.length>0" class="questions_container container">
        <Question v-for="question in questions" :key="question.id" :question="question" />
      </div>
      <div v-else class="questions_container container">
        <Question :noquetion="true"/>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from "../components/Header"
import ResponsiveNav from "../components/ResponsiveNav"
import Question from "../components/Question"
import Footer from '../components/Footer'
export default {
  components:{
    Header,
    ResponsiveNav,
    Question,
    Footer
  },
  metaInfo () {
    return { title: this.$t('My Questions') }
  },

  data: () => ({
    title: window.config.appName,
    questions:[]
  }),

  computed: mapGetters({
    authenticated: 'auth/check'
  }),
  async beforeMount(){
    
  },
  async created(){
    await this.$store.dispatch("myquestions/fetchQuestions");
    this.questions = this.$store.state.myquestions.questions;
  }
}
</script>

<style scoped>
  .content-wrapper {
    background: #f8f7f5;
  }
</style>
