import CommentData from './CommentData'


let currentId =3;
export default class CommentApi {
    static getAllComments() {
        return CommentData.comments; //
    }

    static saveComment(comment) {
        comment.id=++currentId
        CommentData.comments.push(comment)
        //axios.post()
    }
}