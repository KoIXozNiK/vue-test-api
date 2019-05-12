import {
  COMMENT_LIST,
  DELETE_COMMENT,
  RESET_COMMENTS,
  ADD_COMMENT,
  COMMENT_DETAIL
} from '../mutation-types';
import axios from "axios";

const URL = 'https://5cbef81d06a6810014c66193.mockapi.io/api/comments/';

const state = {
  comments:[],
  comment:[],
  loading: true,
};
const getters = {
  comments: state => state.comments,
  comment: state => state.comment,
};

const mutations = {
  [COMMENT_LIST](state, comments){
    state.comments = comments
  },
  [COMMENT_DETAIL](state, comment){
    state.comment = comment
  },
  [RESET_COMMENTS](state){
    state.comments = null
  },
  changeLoadingState(state,loading){
    state.loading = loading
  }

};

const actions = {
  [COMMENT_LIST]({commit}, payload){
    axios.get(URL)
        .then((response) => {
          commit( RESET_COMMENTS )
          commit( COMMENT_LIST, response.data)
          commit('changeLoadingState', false)
        })
        .catch(error => {
          console.log(`Error ${error}`)

        });
  },


  // CREATED COMMENTS
  [ADD_COMMENT] ({dispatch, commit}, payload) {
    axios.post(URL, {
      title: payload.title,
      body: payload.body
    }).then((response) => {
      dispatch(COMMENT_LIST)
      console.log(response);

    })
        .catch((e) => {
          console.error(e)
        })
  },

  // DELL COMMENTS
  [DELETE_COMMENT] ({dispatch, commit}, payload) {
    axios.delete(URL + `/${payload.id}`, payload)
        .then((response) => {
          dispatch(COMMENT_LIST)
        })
        .catch((e) => {
          console.error(e)
        })
  },

  // COMMENT_DETAIL
  [COMMENT_DETAIL] ({dispatch, commit}, payload) {
    axios.get(`${URL}${payload.id}`)
        .then((response) => {
          commit( COMMENT_DETAIL, response.data)
          commit('changeLoadingState', false)
        })
        .catch((e) => {
          console.error(e)
        })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};