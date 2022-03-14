import  express  from "express";
import {resolve} from "path";


const app = express();

app.use('/',
    resolve(
        __dirname,
        './build'
    )
)

app.listen(process.env.PORT || 8000, () =>{
    console.log("Server start");
})