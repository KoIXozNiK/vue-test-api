
<template >
   <div class="comments container">
      <div class="comments__heading">
         <h2 class="comments__title">Comments</h2>
      </div>
      <div v-if="comments">
         <masonry
           :cols="{default: 3, 1380: 2, 800: 1}"
           :gutter="{default: '40px', 800: '15px'}"
         >
            <div v-for="(comment, index) in comments" :key="index" class="comments__item">
               <h3 class="comments__item-title">{{comment.title}}</h3>
               <p class="comments__item-desc">
                  {{comment.body}}
               </p>
               <router-link :to="{ name: 'Comment', params: { id: comment.id } }" tag="button" class="a-btn btn-2"><span>Read more</span></router-link>
            </div>
         </masonry>
      </div>

      <div class="comments__bottom">
         <h4 class="comments__bottom-quote">Lorem Ipsum is text of the typesetting industry</h4>
         <router-link :to="{ name: 'Home'}" tag="button" class="a-btn btn-3">
            <span><img src="@/assets/icon-arrow.png" alt=""></span><span>Back to homepage</span></router-link>
      </div>
   </div>
</template>
<style src="./index.scss" lang="scss"></style>
<script src="./index.js"></script>
<!--<router-link :to="$localize({ name: 'profile.bit-bidding.bets', params: { id: index } })">-->