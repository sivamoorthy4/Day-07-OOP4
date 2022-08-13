class Uber {

     constructor(_customerName,_age,_gender,_emailId) {

         this.setName=_customerName;
         this.setAge=_age;
         this.setGender=_gender;
         this.setEmail=_emailId;

         //declare default variable
         this.basicFare=100;
         this.newUserDiscount=0.50;
         this.isNewCustomer=true;

     }

     //Setter to set the values
     set setName(_customerName){
        this.customerName=_customerName;
     }

     set setAge(_age){
      this.age=_age;
   }

     set setGender(_gender){
        this.gender=_gender;
     }

     set setEmail(_emailId){
        this.email=_emailId;
     }

     //Getter methods
     get getName() {       
         return this.customerName;
     }

     get getAge() {       
      return this.age;        
     }

     get getGender() {       
      return this.gender;        
     }

     get getEmail() {       
      return this.email;        
     }

     

     //Method for calculate the fare for the ride
     calculateFare(_distancetravelled){

         let totalCost=0;

         //For first 10km cost per km is Rs.6 after that the cost is Rs.8
         //If first time user, First ride is free only the distance is  below 5km
         if(this.isNewCustomer&&_distancetravelled<=5) {

            this.isNewCustomer=false;
            return totalCost;
      
         } else if(_distancetravelled<=5) {

            totalCost=this.basicFare;
            return totalCost;
         }

            
         //  
         if(this.isNewCustomer){

            //discount added for first time user
            if(_distancetravelled>5&&_distancetravelled<=10) {
               totalCost=totalFare(_distancetravelled,6,this.newUserDiscount);
            } else {
               totalCost=totalFare(_distancetravelled,8,this.newUserDiscount);
            }
         
            this.isNewCustomer=false;//
            return totalCost;

         } else {
            
            //For old customer, cost without discount
            if(_distancetravelled>5&&_distancetravelled<=10) {
               totalCost= totalFare(_distancetravelled,6); 
            } else {
               totalCost= totalFare(_distancetravelled,8);
            }
         
            return totalCost;
         }

      }
     
}

//function calculate fare by passing arguments
function totalFare(...args) {

   return args.reduce((acc,data)=>acc*data);


}

///add customers

let customer1=new Uber("Siva",20,"male","abc@gmail.com");
let customer2=new Uber("Priya",25,"female","xyz@gmail.com");


//call the method to calculate fare for the ride and pass the distance as argument
console.log(`Your fare for the ride:Rupees ${customer2.calculateFare(12)}`);

console.log(`Always welcomes you ${customer2.getName}`);

console.log(`Your fare for the ride:Rupees ${customer2.calculateFare(5)}`);

console.log(`Always welcomes you ${customer2.getName}`);


