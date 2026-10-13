require("dotenv").config();
const connectDB = require("./db/db");
const app = require("./app");

connectDB()
  .then(() => {
    app.get("/",(req,res)=>{
    res.send("Hello MongoDB Connected!!")
})
    app.listen(process.env.PORT ||8000, () => {
      console.log(`Server is running at Port:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection faile!!:", error);
    throw error;
  });

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//     app.on("Error", (error) => {
//       console.log("Error:", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is running at Port:${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     throw error;
//   }
// })();


