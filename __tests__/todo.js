const todoList = require('../todo');


const {all , markAsComplete , add,overdue, dueToday, dueLater } = todoList();
describe("Todolist Test Suite", () => {
    beforeAll(() => {
        add(
            {
                title: "1",
                completed: false,
                dueDate: new Date().toLocaleDateString("en-CA")
            }
        );
        add(
            {
                title: "2 ",
                completed: false,
                dueDate: new Date(new Date().setDate(new Date().getDate())).toLocaleDateString("en-CA")
            }
        );
        add(
            {
                title: "3",
                completed: false,
                dueDate: new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleDateString("en-CA")
            }
        );
        add(
            {
                title: "4",
                completed: false,
                dueDate: new Date(new Date().setDate(new Date().getDate() -2)).toLocaleDateString("en-CA")
            }
        );
        add(
            {
                title: "5",
                completed: false,
                dueDate: new Date(new Date().setDate(new Date().getDate() + 2)).toLocaleDateString("en-CA")
            }
        );
        add(
            {
                title: "6",
                completed: false,
                dueDate: new Date(new Date().setDate(new Date().getDate() -1)).toLocaleDateString("en-CA")
            }
        );
    })
    test("should add new todo", () => {
        const todoItemsCount = all.length;
        add(
            {
                title: "Test todo",
                completed: false,
                dueDate: new Date().toLocaleDateString("en-CA")
            }
        );
        expect(all.length).toBe(todoItemsCount + 1);
    });
    test("Should mark a todo as complete", () => {
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    })
    test("Should check retrieval of overdue items",()=>{
        let x=overdue().length
        var i=0;
        present=new Date().toLocaleDateString("en-CA")
        for(i in x){
            y=dueToday()[i].dueDate<present
            expect(y).toBe(true);

        }

        }
    )
    test("Should checks retrieval of due today items",()=>{
        let x=dueToday().length
        var i=0;
        present=new Date().toLocaleDateString("en-CA")
        for(i in x){
            y=dueToday()[i].dueDate===present
            expect(y).toBe(true);
        }
        
    })



    test("Should checks retrieval of due later items",()=>{
        let x=dueLater().length
        var i=0;
        present=new Date().toLocaleDateString("en-CA")
        for(i in x){
            y=dueLater()[i].dueDate>present
            expect(y).toBe(true);
        }
    })

})