<template>
	<div id="app">
		<header class="menu" :class="{open: openMenu}">
			<img src="@/assets/logo.png" alt="">
			<div class="burger" @click="openMenu = !openMenu">
				<span></span>
				<span></span>
				<span></span>
			</div>
			<nav class="menu__items">
				<div class="menu__close" @click="openMenu = !openMenu">
					<span>close</span>
				</div>
				<router-link class="menu__item" @click.native="scrollGo('#about')" to="/">About Us</router-link>
				<router-link class="menu__item" @click.native="scrollGo('#comment')" to="/">Write comment</router-link>
				<router-link class="menu__item" to="/comments">Comments</router-link>
			</nav>
		</header>
		<main class="body">
			<router-view/>
		</main>
		<footer class="footer" >
			<div class="footer__wrap">
				<div class="footer__left">
					<div class="footer__mail">mail@mailtest.com</div>
					<div class="footer__tel">+30-6977664062</div>
				</div>
				<div class="footer__right">
					<div class="footer__copy">
						Copyright © 2019 Test All Rights Reserved.
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>

  export default {
    name: 'app',
    data() {
      return {
        openMenu: false
      }
    },
	  methods: {
      scrollGo: function(hashbang){
        location.href = hashbang;
      }
	  },
  }
</script>

<style src="./assets/scss/main.scss" lang="scss">

</style>
