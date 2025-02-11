import React from 'react'
import CommentList from './CommentList'
import CommentApi from './data/CommentApi'
import {Link} from 'react-router-dom'

export default class AllComponentsPage extends React.Component {

    constructor(props){
        super(props);
        this.state={
            comments:[]
        }
    }


    async componentDidMount(){
        const data= await CommentApi.getAllComments();
        this.setState({comments:data})
    }
/*
    componentDidMount(){
        
        CommentApi.getAllComments().then(data=>this.setState({comments:data}))
        
    } */
    render(){
        return(<>
        <h1>Comments</h1>
        <CommentList comments={this.state.comments} /><br/>
        <Link to="/addComment">Add Comment</Link>        
        </>)
    }
}