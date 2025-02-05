import axios from 'axios'
import CommentData from './CommentData'

/*  //ES2015 -promise style
export default class CommentApi {
    static getAllComments() {
        return axios.get('http://localhost:3001/comments').then(response=>response.data)
        .catch(err=>console.log('failed : ${err.message}'));
    }
} */

//ES2017 way of writing promise
export default class CommentApi {
    static async getAllComments() {
        try {
            const response =await axios.get("http://localhost:3001/comments");
            return response.data;
        }catch(error) {
            console.log('failed')
        }
    }
}