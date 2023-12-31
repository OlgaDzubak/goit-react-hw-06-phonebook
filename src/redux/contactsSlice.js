import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    addContact:{
        reducer(state, action) { state.push(action.payload); },
        prepare(name, number)  { return { payload: { id: nanoid(), name, number, }} },
    },
    deleteContact: {
        reducer(state, action) { 
            const index = state.findIndex(contact => contact.name === action.payload);
            state.splice(index, 1);
        },
        prepare(name) { return { payload: name,} },
    },
  }
});

export const {addContact, deleteContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;