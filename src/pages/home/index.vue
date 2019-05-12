<template>
   <div class="home">
      <!--HOME TITLE-->
      <div class="home__title-wrap container" >
         <h1 class="home__title">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h1>
      </div>

      <!--HOME PARALLAX-->
      <div class="home__parallax"></div>

      <!--HOME SERVICES-->
      <div class="home__services" id="about">
         <div class="home__services-items container">
            <div class="home__services-item">
               <img class="home__services-img" src="../../assets/icon-1.png" alt="">
               <h3 class="home__services-title">Who we are</h3>
               <ul class="home__services-lists">
                  <li class="home__services-list">It is a long established fact that a reader will be distracted</li>
                  <li class="home__services-list">The readable content of a page when looking at its layout</li>
                  <li class="home__services-list">The point of using Lorem Ipsum</li>
                  <li class="home__services-list">As opposed to using 'Content here, content here'.</li>
               </ul>
            </div>
            <div class="home__services-item">
               <img class="home__services-img" src="../../assets/icon-2.png" alt="">
               <h3 class="home__services-title">What we do</h3>
               <ul class="home__services-lists">
                  <li class="home__services-list">Many desktop publishing packages and web page</li>
                  <li class="home__services-list">There are many variations of passages of Lorem Ipsum available, but the majority have</li>
                  <li class="home__services-list">Various versions have evolved over the years, sometimes by accident</li>
               </ul>
            </div>
            <div class="home__services-item">
               <img class="home__services-img" src="../../assets/icon-3.png" alt="">
               <h3 class="home__services-title">Technology</h3>
               <ul class="home__services-lists">
                  <li class="home__services-list">The point of using Lorem Ipsum</li>
                  <li class="home__services-list">As opposed to using 'Content here, content here'</li>
                  <li class="home__services-list">Contrary to popular belief, Lorem Ipsum is not simply random text</li>
                  <li class="home__services-list">A Latin professor at Hampden-Sydney College in Virginia</li>
               </ul>
            </div>
         </div>
      </div>

      <!--HOME COMMENT-->
      <div class="home__comment" id="comment">
         <div class="home__comment-wrap container">
            <div class="home__comment-title">
               <h3>Write <br> comment</h3>
            </div>
            <form action="" class="home__comment-create" @submit.prevent="submitForm">
               <input @blur="$v.commentTitle.$touch()" type="text" v-model="commentTitle" placeholder="Title"/>
               <div v-if=" $v.commentTitle.$error">
                  <p class="error" v-if="!$v.commentTitle.required">Это поле обязательное</p>
                  <p class="error" v-else-if="!$v.commentTitle.minLength">Минимум 10 символов{{$v.commentTitle.minLength}}</p>
               </div>
               <textarea @blur="$v.commentBody.$touch()" v-model="commentBody" placeholder="Your comment"/>
               <div v-if=" $v.commentBody.$error">
                  <p class="error" v-if="!$v.commentBody.required">Это поле обязательное</p>
                  <p class="error" v-else-if="!$v.commentBody.minLength">Минимум 60 символов</p>
               </div>
               <div>
                  <button v-if="!$v.commentBody.$error" class="a-btn btn-1"><span>Send</span></button>
                  <div v-if=" $v.commentBody.$error">
                     <button class="a-btn btn-1" @click="createdCommet()" :disabled="$v.$invalid"><span>Send</span></button>
                  </div>
               </div>
            </form>
         </div>
      </div>

   </div>
</template>
<style src="./index.scss" lang="scss"></style>
<script src="./index.js"></script>
