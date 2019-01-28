const initState ={
    projects:[
        {id:'1', date:'24 November 2019', title:'Project1', body:'This project is'},
        {id:'2', date:'24 November 2019', title:'Project2', body:'This project is'},
        {id:'3', date:'24 November 2019', title:'Project3', body:'This project is'}
    ],
    entries:{
        1:[
            {id:'1', date:'24 November 2019', title:'progress', body:'This project is'},
            {id:'2', date:'24 November 2019', title:'progress', body:'This project is'}
        ],
        2:[
            {id:'2', date:'24 November 2019', title:'progress', body:'This project is'}
        ],
        3:[]
    },
    todos:[
        {id:'1', title:'progress', body:''},
        {id:'2', title:'progress', body:''},
        {id:'3', title:'progress', body:''},
        {id:'4', title:'progress', body:''}
    ]
}

//action -> state
const rootReducer = (state = initState, action) => {
    console.log(action);
    if (action.type === 'DELETE_TODO'){
        //action:{type, id}
        let newTodos = state.todos.filter(todo=>{
            return todo.id !== action.id
        });
        return {
            ...state,
            todos: newTodos
        }
    }
    return state;
}

export default rootReducer;