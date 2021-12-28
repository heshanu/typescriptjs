class Department{
    name:string;
   constructor(n:string){
       this.name=n;
   }
   desctibe(){
       console.log('Department: '+this.name);
   }
}
let HR=new Department("HR");
HR.desctibe();

//const HRCOPY={describe:HR.de};
HRCOPY.describe();