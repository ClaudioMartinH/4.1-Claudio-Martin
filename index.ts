import express from "express";
import cors from "cors";
import { cacheControlMiddleware } from "./src/middleware/authMiddleware";
import { corsMiddleware } from "./src/middleware/authMiddleware";
import { PORT } from "./src/config/constants"

const app = express(); 

app.use(express.json());
app.use(cacheControlMiddleware);
app.use(corsMiddleware);

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
})