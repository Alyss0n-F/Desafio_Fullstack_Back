import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { userRoutes } from "./routes/users.routes"
import { handleAppError } from "./middlewares/handleAppError.middleware"
import { sessionRoutes } from "./routes/session.routes"
import { contactRoutes } from "./routes/contacts.routes"

const app = express()

app.use(express.json())
app.use("/users", userRoutes)
app.use("/login", sessionRoutes)
app.use("/contacts", contactRoutes)
app.use(handleAppError)

export default app