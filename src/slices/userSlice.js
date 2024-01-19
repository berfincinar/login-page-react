import { createSlice } from "@reduxjs/toolkit"

const initialState={
    name:" ",
    surname:" ",
    email:" "
}

export const userSlice = createSlice ({

    name:"user",
    initialState,
    reducers:{
        setName:(state, action) => {
            state.name = action.payload;
        },
        setSurname:(state, action) => {
            state.surname = action.payload;
        },
        setEmail:(state, action) => {
            state.email = action.payload;
        }
    }

});

export const { setName, setSurname, setEmail} = userSlice.actions;

export default userSlice.reducer;