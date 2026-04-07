import React from 'react';
import { useState, useEffect } from 'react';
import "./Timeline.css";
import Tweetbox from './Tweetbox';
import Post from './Post';
import db from "../../firebase";
import { collection, getDocs, query, orderBy, onSnapshot } from "firebase/firestore";
import { motion, AnimatePresence } from 'framer-motion';

function Timeline() {
  const [posts, setPosts] = useState([]);



  useEffect(() => {
    const postData = collection(db, "posts");
    const q = query(postData, orderBy("timestamp", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className='timeline'>
      <div className='timeline_header'>
        <h2>ホーム</h2>
      </div>

      <Tweetbox />

      <AnimatePresence>
        {posts.map((post) => (
          <motion.div
            key={post.text}
            initial={{ opacity: 0, rotateY: -90, x: -50 }}
            animate={{ opacity: 1, rotateY: 0, x: 0 }}
            exit={{ opacity: 0, rotateY: 90, x: 50 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1], // カスタムベジェ曲線
              rotateY: { duration: 0.6 }
            }}
            style={{ transformOrigin: "left center", perspective: 1000 }}
          >
            <Post
              displayName={post.displayName}
              userName={post.userName}
              verified={post.verified}
              text={post.text}
              avatar={post.avatar}
              image={post.image}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default Timeline;