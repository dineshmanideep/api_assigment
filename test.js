const worldFamousPlaces = [
    "France",
    "Egypt",
    "USA",
    "India",
    "Italy",
  ];
  const placesToVisit = [
    {
        place: " France",
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
  
  // Example of accessing the total cost to visit a place
  console.log(`Total cost to visit Paris, France: ₹${placesToVisit[0].totalCost()}`);
// remove a place in the list of a place
//remove a object inside an array which is inside an array names places to visit
placesToVisit.     

console.log(placesToVisit
)