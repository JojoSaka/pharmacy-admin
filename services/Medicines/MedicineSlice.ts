import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../services/store";

interface Medicine {
  id: string;
  name: string;
  // add other fields here
}

interface MedicineState {
  medicines: Medicine[];
  loading: boolean;
  error: string | null;
}

export const fetchData = createAsyncThunk("medicine/fetchData", async () => {
  const url =
    "https://ema-medicines-data-api.p.rapidapi.com/api/medicines/";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "b9574fbb25msh90d8b72a00e52c3p108159jsn866165a8357a",
      "x-rapidapi-host": "ema-medicines-data-api.p.rapidapi.com",
    },
  };
	const response = await fetch(url, options);
    if (!response.ok) throw new Error('Network response error');
	const data = await response.json();
    return data
});

const initialState: MedicineState = {
  medicines: [],
  loading: false,
  error: null,
};

export const medicineSlice = createSlice({
  name: "medicine",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(
        fetchData.fulfilled,
        (state, action: PayloadAction<Medicine[]>) => {
          state.medicines = action.payload;
          state.loading = false;
        }
      )

      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export const selectMedicine = (state: RootState) => state.medicines;

export default medicineSlice.reducer;
