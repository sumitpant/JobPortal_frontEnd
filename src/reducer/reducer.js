export const initialState={
    job:[],
    user:''
}

const reducer=(state,action)=>{
    console.log("reducer",action)
    switch(action.type){
        
        case 'LOGIN':
            return {
                ...state,
              
                user:action.user

               
            }
        case 'APPLY':return{
            ...state,
            job:[...state.job,action.obj]
        }   
        case 'CREATE':return{
              ...state,
              job:[...state.job,action.obj]
        } 
              

    }
    console.log("reducer",state)
}

export default reducer;