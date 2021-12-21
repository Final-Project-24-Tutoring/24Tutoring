const user = JSON.parse(localStorage.getItem("user"));
const token = JSON.parse(localStorage.getItem("token"));
const initialState = {
    user:user ? user:{},
    token:token ? token:{}
   };
   
   const User = (state = initialState, { type, payload }) => {
     switch (type) {
       case "SET_USER":
       console.log(state.user);
       localStorage.setItem("user",JSON.stringify(payload));
         return {
            user: payload,
            token: state.token
         };
         case "SET_TOKEN":
       localStorage.setItem("token",JSON.stringify(payload));
         return {
            user: state.user,
            token: payload
         };
       default:
         return state;
     }
   };
   
   export default User;
   
   export const setUser = (user) => {
     return {
       type: "SET_USER",
       payload: user,
     };
   };

   export const setToken = (token) => {
    return {
      type: "SET_TOKEN",
      payload: token,
    };
  };