<template>
  <div class='container'>
      <img src="../../assets/2020-6-3 (2).jpg" alt="">
  </div>
</template>

<script>
export default {
  created () {
    this.$http.get('articles').then(res => {
      console.log(res.data)
    }).catch(() => {
      console.log('err')
    })
  }
}
</script>

<style scoped lang='less'>
    .container{
        width: 100%;
        img{
            width: 100%;
            display: block;
            margin: 0 auto
        }
    }
</style>
