import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = import.meta.env.VITE_BASE_URL;
import axiosInstance from "../axiosInterceptor";

export type EntityPayloadType = {
  entity_name: string;
  entity_number: string;
  entity_address: string;
  city: string;
  state: string;
  zip: string;
  effective_date: string;
  appraiser: string;
};

// ADD ENTITY

export const addGallagherEntity = createAsyncThunk(
  "gallagherEntity/add",
  async (payload: EntityPayloadType, { rejectWithValue }) => {
    try {
      const entity = await axiosInstance.post(
        `${URL}/gallagher_entity`,
        payload,
        {
          withCredentials: true,
        }
      );
      return entity.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// VIEW ALL ENTITY

export const viewAllGallagherEntity = createAsyncThunk(
  "gallagherEntity/viewAll",
  async (_, { rejectWithValue }) => {
    try {
      const entityList = await axiosInstance.get("/gallagher_entity/viewall", {
        withCredentials: true,
      });
      return entityList.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
