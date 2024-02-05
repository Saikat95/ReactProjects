import React from 'react'
import { useState } from 'react'
import useNode from './useNode'
import Comment from './Comment';
import './style.css'

const data = 
    {
        id: 1,
        child: []
    };


function Comments() {
    const [commentData,setCommentData] = useState(data);
    const { insertNode,editNode } = useNode();

    function handleInsertComment(id,text) {
        const final = insertNode(commentData, id, text)
        setCommentData(final);
    }

    function handleEditComment(id,text) {
        const finalEdit = editNode(commentData,id,text);
        setCommentData(finalEdit)
    }

    return (
        <div>
            <Comment 
                comment = {commentData} 
                handleInsertComment = {handleInsertComment}
                handleEditComment = {handleEditComment}/>
        </div>
    )
    
}

export default Comments