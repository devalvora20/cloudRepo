export class Expense{
    category:String;
    cost:number;
    description:String;
    date:String;
    id:String;
    constructor(category,cost,description,date,id){
        this.category=category;
        this.cost=cost;
        this.description=description;
        this.date=date;
        this.id=id;
    }
    getCategory(){
        return this.category;
    }
    getCost(){
        return this.cost;
    }
    getDescription(){
        return this.description;
    }
    getDate(){
        return this.date;
    }
    getId(){
        return this.id;
    }
    setCategory(category){
        this.category=category;
    }
    setCost(cost){
        this.cost=cost;
    }
    setDescription(description){
        this.description=description;
    }
    setDate(date){
        this.date=date;
    }
    setId(id){
        this.id=id;
    }
}