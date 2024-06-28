
const express = require('express')
const app = express()
const port = 3000
app.use(express.json())


app.get('/', (req, res) => {
  res.send('welcome to travel planner api');
})



// travel api

const worldFamousPlaces = [
  "France",
  "Egypt",
  "USA",
  "India",
  "Italy",
];
const placesToVisit = [
  {
      place: "France",
      attractions: [
          { name: "Eiffel Tower", daysToStay: 1 },
          { name: "Louvre Museum", daysToStay: 1 },
          { name: "Notre Dame Cathedral", daysToStay: 1 },
          { name: "Champs-Élysées", daysToStay: 1 },
          { name: "Versailles Palace", daysToStay: 1 }
      ],
      approxFlightCharge: 90000,
      perDayStayCharge: 11000,
      perDayFoodExpense: 4000,
      totalCost: function() {
          const totalDays = this.attractions.reduce((sum, attr) => sum + attr.daysToStay, 0);
          return this.approxFlightCharge + (this.perDayStayCharge + this.perDayFoodExpense) * totalDays;
      }
  },
  
 
  {
      place: "Egypt",
      attractions: [
          { name: "Pyramids of Giza", daysToStay: 2 },
          { name: "Great Sphinx", daysToStay: 1 },
          { name: "Egyptian Museum", daysToStay: 1 },
          { name: "Khan el-Khalili", daysToStay: 1 }
      ],
      approxFlightCharge: 52000,
      perDayStayCharge: 6000,
      perDayFoodExpense: 1500,
      totalCost: function() {
          const totalDays = this.attractions.reduce((sum, attr) => sum + attr.daysToStay, 0);
          return this.approxFlightCharge + (this.perDayStayCharge + this.perDayFoodExpense) * totalDays;
      }
  },
  {
      place: "USA",
      attractions: [
          { name: "Statue of Liberty", daysToStay: 1 },
          { name: "Times Square", daysToStay: 1 },
          { name: "Central Park", daysToStay: 1 },
          { name: "Empire State Building", daysToStay: 1 }
      ],
      approxFlightCharge: 37000,
      perDayStayCharge: 15000,
      perDayFoodExpense: 4500,
      totalCost: function() {
          const totalDays = this.attractions.reduce((sum, attr) => sum + attr.daysToStay, 0);
          return this.approxFlightCharge + (this.perDayStayCharge + this.perDayFoodExpense) * totalDays;
      }
  },
  {
      place: "India",
      attractions: [
          { name: "Taj Mahal", daysToStay: 1 },
          { name: "Agra Fort", daysToStay: 1 },
          { name: "Fatehpur Sikri", daysToStay: 1 }
      ],
      approxFlightCharge: 45000,
      perDayStayCharge: 3700,
      perDayFoodExpense: 1500,
      totalCost: function() {
          const totalDays = this.attractions.reduce((sum, attr) => sum + attr.daysToStay, 0);
          return this.approxFlightCharge + (this.perDayStayCharge + this.perDayFoodExpense) * totalDays;
      }
  },
  {
      place: "Italy",
      attractions: [
          { name: "Colosseum", daysToStay: 1 },
          { name: "Roman Forum", daysToStay: 1 },
          { name: "Vatican City", daysToStay: 2 },
          { name: "Pantheon", daysToStay: 1 }
      ],
      approxFlightCharge: 75000,
      perDayStayCharge: 13500,
      perDayFoodExpense: 3700,
      totalCost: function() {
          const totalDays = this.attractions.reduce((sum, attr) => sum + attr.daysToStay, 0);
          return this.approxFlightCharge + (this.perDayStayCharge + this.perDayFoodExpense) * totalDays;
      }
  }
  

];




trip=[];


app.get('/travel/:name',(req,res)=>{
  
 
 if(trip.length>0){
  const plan = trip.map(place => ({
    ...place,
    totalCost: place.totalCost()  
}));
   
   res.json(plan)
   
 }
 else{

   user=req.params.name;
  
   res.send(`welcome to travel planner api ${user} \n To get started choose of the places you would like to visit and post them to /planner/:name endpoint \n${worldFamousPlaces}`)

 }
})

app.post('/travel/:name',(req,res)=>{

  const place=req.body.place.trim();

  const i= trip.findIndex(item=>item.place===place);
  if(i!=-1){
    res.send("place already exists in the plan");
  }
  else{

  const index=worldFamousPlaces.indexOf(place);
  if(index>-1){
    trip.push(placesToVisit[index]);
    res.send(`your tour plan for ${place} is ready in trip`);
  }
  else{
    res.status(404).send('place not found');
  }
}
})


 app.delete('/travel/:name',(req,res)=>{
  const { place, attraction } = req.body;

  if (!place) {
    return res.status(400).json({ error: 'Place is required.' });
  }
  const index = trip.findIndex((p) => p.place === place);

    if (index === -1) {
      return res.status(404).json({ error: 'Place not found.' });
    }
  if(attraction){

    trip[index].attractions = trip[index].attractions.filter((a) => a.name !== attraction);
    res.send(`from your tour plan ${attraction} is removed in trip`);
  }
  else{


    trip.splice(index, 1);
    res.send(`from your tour plan ${place} is removed /n ${trip}`);
  }
  
  

 
 
})










app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})