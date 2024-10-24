// redux/formSlice.js
import { createSlice } from '@reduxjs/toolkit';

interface FormEntry {
  name: string;
  description: string;
  price: number;
  photos: string[];
  benefits: string[];
  additionalDetails: { attribute: string; value: string }[];
}

interface FormState {
  formEntries: FormEntry[];
}

const initialState: FormState = {
  formEntries: [],  // Array to hold all form data entries
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action: { payload: FormEntry }) => {
      state.formEntries.push(action.payload);
    },
  },
});

export const { setFormData } = formSlice.actions;

export default formSlice;
