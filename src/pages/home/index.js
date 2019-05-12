import { mapGetters, mapActions } from 'vuex'
import {
    COMMENT_LIST,
    ADD_COMMENT
} from '../../store/mutation-types';
import {minLength, required } from 'vuelidate/lib/validators'


export default {
    name: 'home',
    data(){
        return{
            commentTitle: null,
            commentBody: null
        }
    },

    validations: {
        commentTitle : {
            required,
            minLength: minLength(10)
        },
        commentBody: {
            required,
            minLength: minLength(50)
        }
    },

    created(){
        this.fetchComments()
    },

    computed: {
        ...mapGetters({
            comments: 'comments/comments'
        }),
    },

    methods: {
        ...mapActions({
            fetchComments: `comments/${COMMENT_LIST}`,
            createComment: `comments/${ADD_COMMENT}`
        }),
        createdCommet(){
            const obj = {
                title: this.commentTitle,
                body: this.commentBody,
            }

            this.createComment(obj).then(() => {
                this.fetchComments()
            })
        },

        submitForm(event) {
            this.$v.$touch()
            if(!this.$v.$invalid) {
                event.target.reset();
            }
        }
    },
    destroyed(){

    }
}
