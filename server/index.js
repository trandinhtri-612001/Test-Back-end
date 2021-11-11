const express = require('express');
const app = express();
const PORT = 8080 || process.env.PORT;
require("dotenv").config();
const cors = require('cors')
const mongoose = require('mongoose');

const connectDB = async() => {
     try {
		await mongoose.connect(`mongodb+srv://apptest:12345@cluster0.nbezn.mongodb.net/App_test?retryWrites=true&w=majority`,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				
				
			}
		)

		console.log('MongoDB connected')
	} catch (error) {
		console.log(error)

	}
}
connectDB();

app.use(express.json());
app.use(cors())



const Routeruser = require('./Router/authuser');




app.use('/api/auth', Routeruser);




app.listen(PORT, () => {
    console.log('server runing successfully');
})