import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axiosInterceptor";

export interface EntityPayloadType {
  entity_name: string;
  entity_number: string;
  entity_address: string;
  city: string;
  state: string;
  zip: string;
  effective_date: string;
  appraiser: string;
}

export interface UpdateEntityPayload extends EntityPayloadType {
  entity_id: string;
}

// ADD ENTITY

export const addGallagherEntity = createAsyncThunk(
  "gallagherEntity/add",
  async (payload: EntityPayloadType, { rejectWithValue }) => {
    try {
      const entity = await axiosInstance.post(`/gallagher_entity`, payload, {
        withCredentials: true,
      });
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

// DELETE ENTITY

export const deleteGallagherEntity = createAsyncThunk(
  "gallagherEntity/delete",
  async (payload: string, { rejectWithValue }) => {
    try {
      const entity = await axiosInstance.delete(
        `/gallagher_entity/delete/${payload}`,
        { withCredentials: true }
      );
      return entity.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// UPDATE ENTITY

export const updateGallagherEntity = createAsyncThunk(
  "gallagherEntity/update",
  async (
    payload: { entity_id: string; entity: EntityPayloadType },
    { rejectWithValue }
  ) => {
    try {
      const entity = await axiosInstance.put(
        `/gallagher_entity/update/${payload.entity_id}`,
        payload.entity,
        { withCredentials: true }
      );
      return entity.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
