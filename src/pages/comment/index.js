import { mapGetters, mapActions } from 'vuex'
import {
    COMMENT_DETAIL,
    DELETE_COMMENT,
    COMMENT_LIST
} from '../../store/mutation-types';

export default {
    name: 'comment',
    data(){
        return{
            id: this.$route.params.id
        }
    },

    created(){
        this.fetchComment({id: this.id}),
        this.fetchComments()

    },

    computed: {
        ...mapGetters({
            comment: 'comments/comment'
        })
    },

    methods: {
        ...mapActions({
            deleteComment: `comments/${DELETE_COMMENT}`,
            fetchComment: `comments/${COMMENT_DETAIL}`,
            fetchComments: `comments/${COMMENT_LIST}`,
        }),
        removePost(id){
            const obj = {
                id: id
            }
            this.deleteComment(obj).then(() => {
                this.fetchComments()
            })
        }
    },
    destroyed(){

    }
}
