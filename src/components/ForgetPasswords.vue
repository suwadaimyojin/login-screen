<template>
<div class="box">
  <div class="title">
      <h1 ref="TitlePass" :class="{'actived':this.animeFlag }" >ForgetPasswords</h1>
  </div>
    <login-textfield :class="{'strong':this.animeFlag }" label="Email address" @click.native="passAnime()" icon="envelope-o" />

</div>
</template>

<script>
    import LoginTextfield from './LoginTextfield'
    export default {
        data() {
            return {
                animeFlag:false
            }
        },
        methods: {
            passAnime(){
               this.animeFlag = true;
                console.log("321");
                console.log(this.$refs.TitlePass);
            }
        },
        components: {
            LoginTextfield,

        },
        props: {
            label: {
                type: String
            },
            icon: {
                type: String
            }
        }
    }
</script>

<style scoped>
    .actived{
        transform:scale(0.7) translateX(50%);
        opacity: 0.5;
    }
    .title{
        width: 100%;
    }
    h1{
        display: inline;
        border: 0px solid ;
        transition: all 0.5s ease;
    }
    .strong{
        transform: rotate3d(50deg,60deg);
        transition: all 0.5s ease;
    }
    {

    }
.box{
    color: white;
    font-size: 14px;
    width: 100%;
    padding:50px;
}
</style>