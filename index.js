import express from "express";
import "dotenv/config";

import { multerUploads } from "./multer.js";
const app = express();

app.post("/upload", multerUploads, (req, res) => {
  console.log("req.file", req.file);
  res.send(req.file);
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

//what you get in req.file
// {
//   "fieldname": "image",
//     "originalname": "sample.jpg",
//     "encoding": "7bit",
//     "mimetype": "image/jpeg",
//     "size": 63660
// }
