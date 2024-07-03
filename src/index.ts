import express, { Request } from "express";
import { cacheControlMiddleware } from "./middleware/authMiddleware";
import { corsMiddleware } from "./middleware/authMiddleware"
import { userRouter } from "./infrastructure/routes/userRoutes";
import { taskRouter } from "./infrastructure/routes/taskRoutes";
import errorController from "./infrastructure/controllers/errorController";
import basicAuth from "express-basic-auth";

const app = express(); 
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cacheControlMiddleware);
app.use(corsMiddleware);

app.use(
  basicAuth({
    users: {
      admin: "password123",
    },
    challenge: true,
    unauthorizedResponse: (req: Request) => "Unauthorized",
  })
);

app.use("/api", userRouter)
app.use("/api", taskRouter)

app.use(errorController.error404);


app.listen(PORT, ()=>{
  console.log(`Server running on port localhost:${PORT}`);
})