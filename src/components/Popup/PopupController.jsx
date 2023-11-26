import React, { useEffect, useState } from "react";
import PopupView from "./PopupView";
import axios from "axios";

const PopupController = ({ setShowPopup, userName }) => {
  const [userPost, setUserPost] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/posts?user=${userName}`)
      .then((res) => setUserPost(res.data));
  }, []);
 
  return <PopupView userPost={userPost} setShowPopup={setShowPopup} userName={userName} />;
};

export default PopupController;
