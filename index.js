const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 5000;

//middleware
app.use(cors())
app.use(express.json())

app.get("/", (req,res)=>{
    res.send("chocolate server is running")
})

//chocolateShop
//MAV8uvd92T8HjyN1


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://chocolateShop:MAV8uvd92T8HjyN1@cluster0.8w6slpa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    app.post("/chocolates",(req,res)=>{
        const newChocolate =req.body;
        console.log(newChocolate)
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, ()=>{
    console.log(`chocolate server is running on port: ${port}`)
})