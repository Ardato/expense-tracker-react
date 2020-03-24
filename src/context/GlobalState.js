import React,{createContext,useReducer} from "react";
import AppReducer from "./AppReducer"

//Initial state
const initialState = {
    transactions:[]
}
// Create context
export const GlobalContext = createContext(initialState);

//Provider componnet
export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(AppReducer,initialState)
    

    // useEffect(() => {
    //     localStorage.setItem('state',JSON.stringify(state))
    // }, [state])

    //Actions
    function deleteTransaction(id){
        dispatch({
            type:"DELETE_TRANSACTIONS" ,
            payload:id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type:"ADD_TRANSACTIONS" ,
            payload:transaction
        });
    }

    

    return(<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}