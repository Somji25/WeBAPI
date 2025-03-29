import express from 'express';
import dotenv from 'dotenv';
import {getConfigsTobit,getConfigsTobitpage,getstatustobit,getlogstobit,postlogstobit,getlogspage} from './pro_handdler.js';
dotenv.config();
const app = express();
app.use(express.json());
import cors from 'cors'
app.use(cors());




const port = process.env.PORT_ENV || 8000;

app.listen(port,() =>{
    console.log('Server listening on port '+ port)
    console.log("Please go to http://127.0.0.1:" + port)
})
app.use('/form',express.static('./statics'));

app.get('/',(req,res) =>{

res.send('Welcome to Project Webappication')
})



app.get('/configs', getConfigsTobit)


app.get('/configs/:yourDroneId', getConfigsTobitpage)


app.get('/status/:yourDroneId', getstatustobit)

app.get('/logs', getlogspage)


app.get('/logs/:yourDroneId', getlogstobit)


app.post('/logs', postlogstobit)



app.get('/drone-config', async (req, res) => {
    try {
      const DRONE_ID = process.env.DRONE_ID;
      
      // ดึงข้อมูลจาก route อื่น (เช่น /drone-details)
      const response = await fetch(`https://api-project-1-4qbi.onrender.com/configs/${DRONE_ID}`);
      const droneDetails = await response.json();
  
      const droneConfig = {
        drone_id: DRONE_ID,
        drone_name: droneDetails.drone_name,
        light: droneDetails.light,
        country: droneDetails.country
      };
  
      res.json(droneConfig);
  
    } catch (error) {
      console.error('Error fetching drone details:', error);
      res.status(500).json({ error: 'Unable to fetch drone details' });
    }
  });

