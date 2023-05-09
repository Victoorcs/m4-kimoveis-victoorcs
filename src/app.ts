import "reflect-metadata"
import "express-async-errors"
import express,{Application} from "express"
import { handleErros } from "./error"
import userRoutes from "./routes/users.routes"
import loginRoutes from "./routes/login.routes"
import categoryRoutes from "./routes/category.routes"


const app:Application = express()

app.use(express.json())

app.use('/users',userRoutes)

app.use('/login',loginRoutes)

app.use('/categories',categoryRoutes)

app.use(handleErros)
export default app