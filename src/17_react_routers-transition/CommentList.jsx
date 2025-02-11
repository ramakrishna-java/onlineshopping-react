import React from 'react'
import Comment from './Comment'

export default class CommentList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let commentNode= this.props.comments.map(comment => (
            <Comment key={comment.id} id={comment.id} author={comment.author} >{comment.text}</Comment>
        ));
        return(<>
        <table style={{ border: "1px solid black", borderCollapse: "collapse" }}>
            <thead> 
                <tr>
                <th style={{ border: "1px solid black", padding: "8px" }}> Id</th>
                    <th style={{ border: "1px solid black", padding: "8px" }}> Author</th>
                    <th style={{ border: "1px solid black", padding: "8px" }}>Comment</th>

                </tr>
            </thead>
            <tbody>
                {commentNode}
            </tbody>
            </table>        
        </>)
    }
}