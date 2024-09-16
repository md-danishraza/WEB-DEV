export default class ToDoList{

    constructor(){
        this.list = [];
    }

    getList(){
        return this.list;
    }
    clearList(){

        this.list = [];
    }

    addItem(item){
        this.list.push(item);
    }
    // removeItem(id){
    //     // start from index and remove 1 item
    //     this.list.splice(index, 1);
    // }
    removeItem(id){
        const list = this.list;
        for(let i = 0; i < list.length; i++){
            // will grab the id from dom thats why not using strict equality
            if(list[i].id == id){
                list.splice(i, 1);
                break;
            }
        }
    }
}