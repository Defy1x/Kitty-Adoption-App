import React from 'react';
import "./style.css";

const PostImage = ()=> {

  return(
  <img className="PostImage" src={`${ process.env.PUBLIC_URL }/images/post-cat.svg`} alt="post-cat"/>
  )
}
export default PostImage;
