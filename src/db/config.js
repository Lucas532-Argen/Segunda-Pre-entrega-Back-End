import mongoose from "mongoose";
const URI =
  //"mongodb+srv://larmaretti:<9kcb7FpMKNCd++u>@clusterlucasarma.4j2oryz.mongodb.net/ecommerceLA?retryWrites=true&w=majority";
    "mongodb://localhost:27017/ecommerceLA"
mongoose
  .connect(URI)
  .then(() => console.log("conectado a bd"))
  .catch((error) => console.log(error));