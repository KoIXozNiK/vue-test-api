import { mapGetters, mapActions } from 'vuex'
import {
    COMMENT_LIST,
    DELETE_COMMENT
} from '../../store/mutation-types'

export default {
    name: 'comments',
    data(){
        return{
        }
    },

    created(){
        this.fetchComments()

    },

    computed: {
        ...mapGetters({
            comments: 'comments/comments'
        })
    },

    methods: {
        ...mapActions({
            fetchComments: `comments/${COMMENT_LIST}`,
            deleteComment: `comments/${DELETE_COMMENT}`
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
