import React, {useState, useEffect} from "react";
import "./feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubcriptionsIcon from "@material-ui/icons/Subscriptions";
import EvenNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import { useSelector } from 'react-redux';
import {selectUser} from './features/userSlice'
import Post from "./Post";
import {db} from './firebase'
import firebase from 'firebase'
function Feed() {
  const user = useSelector(selectUser)

    const [input, setInput] = useState('')
    const [post, setpost] = useState([])

    useEffect(() => {
    db.collection("posts").orderBy("timeStamp", "desc").onSnapshot(snapshot=>{
      setpost(
          snapshot.docs.map((doc)=>{
              return {
                  id: doc.id,
                  data: doc.data()
              }
          })
      )  
    })
    }, [])

    const sendPost = (e)=>{
        e.preventDefault()
        db.collection('posts').add({
            name:user.displayName,
            description:user.email,
            message: input,
            photoUrl: user.photoUrl,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('')
    }
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button type="submit" onClick={sendPost}>Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption title={"Photo"} Icon={ImageIcon} color="#70B5F9" />

          <InputOption
            title={"Photo"}
            Icon={SubcriptionsIcon}
            color="#e7a33e"
          />

          <InputOption title={"Photo"} Icon={EvenNoteIcon} color="#c0cbcd" />

          <InputOption
            title={"Photo"}
            Icon={CalendarViewDayIcon}
            color="#7fc15e"
          />
        </div>
      </div>

      {post.map(({id, data:{name, description, message, photoUrl}})=>{
          return(
            <Post key={id} name= {name} description={description} message={message}  />
          )
      })}

    </div>
  );
}

export default Feed;
