import React, { useEffect, useState } from 'react'
import './CommentSection.css'
import { db } from '../../firebase'
import firebase from 'firebase'


function CommentSection() {

    const [inputComment, setInputComment] = useState("")
    const [inputName, setInputName] = useState("")
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    }, [])

    const handlePostComment = e => {
        e.preventDefault();

        let userName = inputName !== "" ? inputName : 'anonymous'

        db.collection('posts').add({
            name: userName,
            message: inputComment,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInputComment("")
    }

    return (
        <div className='commentSection'>
            <div className="commentSection__top">
                <h1 className="commentSection__title">Your Thoughts...</h1>
                <form>
                    <input type="text" value={inputComment} onChange={e => setInputComment(e.target.value)} placeholder="Write your comment..." />
                    <input type="text" value={inputName} onChange={e => setInputName(e.target.value)} placeholder="Your Name / Email" />
                    <button type="submit" onClick={handlePostComment}>post comment</button>
                </form>
            </div>

            <div class='wrapper'>
                {
                    posts.map(({ id, data: { name, message, timestamp } }) => (
                            <div className='speechbubble'>
                                <p>
                                    <span>"</span> {message}
                                </p>
                                <span className='username'> - {name}</span>
                            </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CommentSection
