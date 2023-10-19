import React from "react";
import "./profileFeed.css";
import Share from "../../partials/feed/share/Share.jsx";
import Post from "../../partials/feed/post/Post.jsx"
import {Posts} from "../../data.js"

const ProfileFeed = () => {
    return (
        <div className="feed">
            <div className="feedWrapper">
 
             <Share />

            </div>
        </div>
    )
}

export default ProfileFeed;