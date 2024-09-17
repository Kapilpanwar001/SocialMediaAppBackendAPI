  import express from 'express';
  import mongoose from 'mongoose'
  import router from './routes/user-routes.js';
import blogRouter from './routes/blog-routes.js';
  const app = express();
  app.use(express.json());
  app.use("/api/user",router);
  app.use("/api/blog", blogRouter)
  mongoose.connect('mongodb+srv://panwarkapil930:kapil1234@cluster1.evp73.mongodb.net/'
  ).then(()=> app.listen(5000))
  .then(()=>console.log("connected to Database and listening To Localhost 5000"))
  .catch((err)=>console.log(err));
  