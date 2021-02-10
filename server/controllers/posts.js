import PostMessage from "../models/postMessage.js";

//------------------Get Posts-------------------------------
export const getPosts = async (req, res) => {
  try {
    //getting data from backend
    const postMessages = await PostMessage.find();

    //sending response via a json format
    res.status(200).json(postMessages);
  } catch (error) {
    //error habdling and response
    res.send(404).json({ message: error.message });
  }
};

//-----------------Create Posts.............................

export const createPost = async (req, res) => {
  //getting data from front end
  const post = req.body;

  //assiging data from frontend to schema
  const newPosts = new PostMessage(post);

  try {
    //saving data
    await newPosts.save();

    //sending response via a json format
    res.status(200).json(newPosts);
  } catch (error) {
    //error habdling and response
    res.send(401).json({ message: error.message });
  }
};
