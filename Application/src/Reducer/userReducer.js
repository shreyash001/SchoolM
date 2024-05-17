import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        setUserData: (state, action) => {
            console.log("SET_USER_DATA --- user Reduer payload")
            // console.log(action.payload)
            if (state.length === 0) state.push(action.payload)
            else {
                state[0] = { ...state[0], ...action.payload };
            }
            
            console.log("After setting user data ===> ",state)

        },
        updateUserData: (state, action) => {
            console.log("UPDATE_USER_DATA --- user Reduer payload")
            // console.log(action.payload)
            // console.log("intial state ---> ", state)
            //finding the index of user
            // let index = state.findIndex(item => item.userId === action.payload.userId);
            // if (index !== -1) {
            //     state[index] = { ...state[index], ...action.payload };
            // }
            // // console.log(state[index])
            // console.log("After updating user data ===> ",state)

        },
    }
})

export default userSlice.reducer
export const { setUserData, updateUserData } = userSlice.actions