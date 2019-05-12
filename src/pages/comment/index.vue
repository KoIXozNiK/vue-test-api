<template>
   <div class="comment container">
      <div class="comment__wrap">
         <div class="comment__wrap-btn">
            <router-link :to="{ name: 'Comments'}" tag="button" class="a-btn btn-link">
               <span><img src="@/assets/icon-arrow.png" alt=""></span><span>Back to Comments</span></router-link>
            <router-link :to="{ name: 'Comments'}"  tag="button" class="a-btn btn-link"><span @click="removePost(comment.id)">Delete</span></router-link>

         </div>
         <div class="comment__item" v-if="comment">
            <h3 class="comment__item-title">{{comment.title}}</h3>
            <div class="comment__item-desc">{{comment.body}}</div>
         </div>
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
