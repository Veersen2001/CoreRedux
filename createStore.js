import { createStore } from "redux";

function todoReducer(state,action)
{
    if(action.type == 'add_Todo')
    {
        const todoText = action.payload.todoText;

        return[
            ...state,
            {text:todoText,isFinished: false, id:(state.length == 0)? 1: state[state.length - 1].id + 1}
        ]
    }
}
const response = createStore();