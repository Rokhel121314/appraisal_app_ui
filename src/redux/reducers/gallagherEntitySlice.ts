import { createSlice } from "@reduxjs/toolkit";
import {
  addGallagherEntity,
  deleteGallagherEntity,
  viewAllGallagherEntity,
} from "../extraReducers/gallagherEntityReducer";

// TYPES

export interface GallagherEntityType {
  entity_name: string;
  entity_number: string;
  entity_address: string;
  city: string;
  state: string;
  zip: string;
  effective_date: string;
  appraiser: string;
  client: string;
  entity_id: string;
  date_created: string;
  date_updated: string;
}

interface InitialStateType {
  entity: GallagherEntityType;
  empty_entity: GallagherEntityType;
  entityList: GallagherEntityType[];
  status: "idle" | "loading" | "failed";
  message?: any;
}

const initialState: InitialStateType = {
  entity: {
    entity_name: "",
    entity_number: "",
    entity_address: "",
    city: "",
    state: "",
    zip: "",
    effective_date: "",
    appraiser: "",
    client: "",
    entity_id: "",
    date_created: "",
    date_updated: "",
  },
  empty_entity: {
    entity_name: "",
    entity_number: "",
    entity_address: "",
    city: "",
    state: "",
    zip: "",
    effective_date: "",
    appraiser: "",
    client: "",
    entity_id: "",
    date_created: "",
    date_updated: "",
  },
  entityList: [],
  status: "idle",
  message: "",
};

export const gallagherEntitySlice = createSlice({
  name: "gallagherEntity",
  initialState,
  reducers: {
    resetGallagherEntityState: () => {
      return initialState;
    },

    selectEntity: (state, action) => {
      return { ...state, ...{ entity: action.payload } };
    },

    resetEntity: (state) => {
      return { ...state, entity: initialState.entity };
    },
  },
  extraReducers: (build) => {
    build

      // ADD ENTITY
      .addCase(addGallagherEntity.pending, (state, _) => {
        return { ...state, ...{ status: "loading" } };
      })
      .addCase(addGallagherEntity.fulfilled, (state, action) => {
        return {
          ...state,
          ...{ entity: action.payload },
          ...{ status: "idle" },
          ...{ message: "ENTITY SAVED SUCCESSFULL!" },
        };
      })
      .addCase(addGallagherEntity.rejected, (state, action) => {
        return {
          ...state,
          ...{ message: action.payload },
          ...{ status: "failed" },
        };
      })

      // VIEW ALL ENTITY

      .addCase(viewAllGallagherEntity.pending, (state, _) => {
        return { ...state, ...{ status: "loading" } };
      })
      .addCase(viewAllGallagherEntity.fulfilled, (state, action) => {
        return {
          ...state,
          ...{ entityList: action.payload },
          ...{ status: "idle" },
          ...{ message: "GOT ALL ENTITY SUCCESFULLY!" },
        };
      })
      .addCase(viewAllGallagherEntity.rejected, (state, action) => {
        return {
          ...state,
          ...{ message: action.payload },
          ...{ status: "failed" },
        };
      })

      // DELETE ENTITY
      .addCase(deleteGallagherEntity.pending, (state, _) => {
        return { ...state, ...{ status: "loading" } };
      })
      .addCase(deleteGallagherEntity.fulfilled, (state, action) => {
        return {
          ...state,
          ...{ message: action.payload },
          ...{ status: "idle" },
        };
      })
      .addCase(deleteGallagherEntity.rejected, (state, action) => {
        return {
          ...state,
          ...{ message: action.payload },
          ...{ status: "failed" },
        };
      });
  },
});

export const { resetGallagherEntityState, selectEntity, resetEntity } =
  gallagherEntitySlice.actions;

export default gallagherEntitySlice.reducer;
