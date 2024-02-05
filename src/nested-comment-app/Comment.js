import React, { useRef } from 'react'
import { useState } from 'react'
import Action from './Action'

function Comment({ comment, handleInsertComment , handleEditComment }) {

    const [input,setInput] = useState("");
    const [replyState,setReplyState] = useState(false);
    const [editMode,setEditMode] = useState(false); 
    const inputRef = useRef(null);

    function addComment() {
        handleInsertComment(comment.id, input);
        setInput("");
        replyStateFlag();
    }

    function addReply() {
        console.log("reply called");
        handleEditComment(comment.id, inputRef.current.innerText);
        editFlag();
    }

    function replyStateFlag() {
        if(editMode) {
            addReply();
            editFlag();
        }
        else {
            setReplyState(!replyState);
            setInput("");
        }
            
    }

    function editFlag() {
        if(!replyState) {
            setEditMode(!editMode);
        }
        
    }

    return(
        <div>
            <div className='comment'>
                {(comment.id === 1) ? (
                <>
                <input
                    type='text'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Type'/>

                <Action 
                    className= "comment"
                    clickEvent = {addComment}
                    type = "COMMENT"
                    />
                </>
                ):(
                <div>
                    <span className = 'reply' contentEditable = {editMode} ref={inputRef}>{comment.text}</span>

                    <Action 
                        className= "reply"
                        clickEvent = {replyStateFlag}
                        type = "REPLY"
                    />
                    

                    <Action 
                        clickEvent = {editFlag}
                        type = "EDIT"
                    />

                    {replyState && (
                        <div className='reply-input'>
                        <input 
                            placeholder='reply'
                            value = {input}
                            onChange={(e) => setInput(e.target.value)}></input>
                        <Action clickEvent={addComment} type='OK'/>
                        <Action clickEvent={replyStateFlag} type='CANCEL'/>
                    </div>

                    )}
                    
                    
                </div>
                
                )}
            </div>
            
            <div className = 'reply' style={{paddingLeft:25}}>
                {comment.child.map((cmnt) => {
                return <Comment id = {cmnt.id} comment={cmnt} handleInsertComment = {handleInsertComment} handleEditComment = {handleEditComment}/>
                })}
            </div>
            

        </div>
    )
}

export default Comment