export default class ToDoItem{
    constructor(){
        this.id = null;
        this.item = null;
    }

    setItem(item){
        this.item = item;
    }
    
    getItem(){
        return this.item;
    }

    setId(id){
        this.id = id;
    }
    
    getId(){
        return this.id;
    }
}