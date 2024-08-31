import { createSlice } from "@reduxjs/toolkit";
import { GallagherSiteType } from "../../types";
import {
  addGallagherSite,
  addMultipleGallagherSite,
  deleteGallagherSite,
  updateGallagherSite,
  viewGallagherSitesPerEntity,
} from "../extraReducers/gallagherSiteReducers";

// TYPES
export interface GallagherSiteSliceType extends GallagherSiteType {
  site_id: string;
  date_created: string;
  data_updated: string;
}

interface InitialStateType {
  site: GallagherSiteSliceType;
  empty_site: GallagherSiteSliceType;
  site_list: GallagherSiteSliceType[];
  uploaded_site_list: GallagherSiteSliceType[];
  filtered_site_list: GallagherSiteSliceType[];
  status: "idle" | "loading" | "failed";
  message?: any;
}

const initialState: InitialStateType = {
  site: {
    entity_site_building_number: "",
    site_number: "",
    site_name: "",
    site_address: "",
    city: "",
    state: "",
    zip: "",
    building_number: "",
    building_name: "",
    building_address: "",
    latitude: "",
    longitude: "",
    sov_rcn: undefined,
    sov_construction_class: "",
    sov_area: undefined,
    inspection_date: "",
    year_built: "",
    building_use: "",
    stories: undefined,
    average_height: undefined,
    area_main: undefined,
    area_basement: 0,
    area_total: undefined,
    frame_type: "",
    iso_class: "",
    structural_floor_frame: "",
    foundation_type: "",
    building_service_system: "",
    roof_cover_material: "",
    roof_frame: "",
    roof_age: "",
    roof_geometry: "",
    exterior_walltype_1: "",
    exterior_walltype_2: "",
    exterior_walltype_3: "",
    partition_wall_structure: "",
    partition_wall_finish: "",
    floor_finish: "",
    ceiling_finish: "",
    fire_sprinklers: "No",
    firealarms_manual: "No",
    firealarms_automatic: "No",
    smoke_detector: "No",
    fire_extinguishers: "No",
    emergency_exit_lights: "No",
    additional_features: "",
    cost_new: undefined,
    cost_new_less_exclusions: undefined,
    exclusions: undefined,
    rcn_per_area: undefined,
    bvs_type: "Reconstruction",
    entity_id: "",
    site_id: "",
    date_created: "",
    data_updated: "",
  },
  empty_site: {
    entity_site_building_number: "",
    site_number: "",
    site_name: "",
    site_address: "",
    city: "",
    state: "",
    zip: "",
    building_number: "",
    building_name: "",
    building_address: "",
    latitude: "",
    longitude: "",
    sov_rcn: undefined,
    sov_construction_class: "",
    sov_area: undefined,
    inspection_date: "",
    year_built: "",
    building_use: "",
    stories: undefined,
    average_height: undefined,
    area_main: undefined,
    area_basement: 0,
    area_total: undefined,
    frame_type: "",
    iso_class: "",
    structural_floor_frame: "",
    foundation_type: "",
    building_service_system: "",
    roof_cover_material: "",
    roof_frame: "",
    roof_age: "",
    roof_geometry: "",
    exterior_walltype_1: "",
    exterior_walltype_2: "",
    exterior_walltype_3: "",
    partition_wall_structure: "",
    partition_wall_finish: "",
    floor_finish: "",
    ceiling_finish: "",
    fire_sprinklers: "No",
    firealarms_manual: "No",
    firealarms_automatic: "No",
    smoke_detector: "No",
    fire_extinguishers: "No",
    emergency_exit_lights: "No",
    additional_features: "",
    cost_new: undefined,
    cost_new_less_exclusions: undefined,
    exclusions: undefined,
    rcn_per_area: undefined,
    bvs_type: "Reconstruction",
    entity_id: "",
    site_id: "",
    date_created: "",
    data_updated: "",
  },
  site_list: [],
  filtered_site_list: [],
  uploaded_site_list: [],
  status: "idle",
  message: "",
};

export const gallagherSiteSlice = createSlice({
  name: "gallagherSite",
  initialState,
  reducers: {
    resetGallagherSite: () => {
      return initialState;
    },

    resetSite: (state) => {
      return { ...state, site: initialState.site };
    },

    selectSite: (state, action) => {
      return { ...state, ...{ site: action.payload } };
    },
    uploadSiteList: (state, action) => {
      return { ...state, ...{ uploaded_site_list: action.payload } };
    },
    searchFilter: (state, action) => {
      state.filtered_site_list = state.site_list.filter((item) => {
        return item.entity_site_building_number
          .toLowerCase()
          .includes(action.payload.toLowerCase());
      });
    },
  },
  extraReducers: (build) => {
    build

      // ADD SITE
      .addCase(addGallagherSite.pending, (state, _) => {
        return { ...state, ...{ status: "loading" } };
      })
      .addCase(addGallagherSite.fulfilled, (state, action) => {
        return {
          ...state,
          ...{ site: action.payload },
          ...{ status: "idle" },
          ...{ message: "SITE ADDED SUCCESSFULLY!" },
        };
      })
      .addCase(addGallagherSite.rejected, (state, action) => {
        return {
          ...state,
          ...{ message: action.payload },
          ...{ status: "failed" },
        };
      })

      // ADD MANY SITES
      .addCase(addMultipleGallagherSite.pending, (state, _) => {
        return { ...state, ...{ status: "loading" } };
      })
      .addCase(addMultipleGallagherSite.fulfilled, (state, action) => {
        return {
          ...state,
          ...{ site_list: action.payload },
          ...{ status: "idle" },
          ...{ message: "SITES ADDED SUCCESSFULLY!" },
        };
      })
      .addCase(addMultipleGallagherSite.rejected, (state, action) => {
        return {
          ...state,
          ...{ message: action.payload },
          ...{ status: "failed" },
        };
      })

      // VIEW GALLAHGER ENTITY SITES
      .addCase(viewGallagherSitesPerEntity.pending, (state, _) => {
        return { ...state, ...{ status: "loading" } };
      })
      .addCase(viewGallagherSitesPerEntity.fulfilled, (state, action) => {
        return {
          ...state,
          ...{ site_list: action.payload },
          ...{ filtered_site_list: action.payload },
          ...{ status: "idle" },
          ...{ message: "SITES ADDED SUCCESSFULLY!" },
        };
      })
      .addCase(viewGallagherSitesPerEntity.rejected, (state, action) => {
        return {
          ...state,
          ...{ message: action.payload },
          ...{ status: "failed" },
        };
      })

      // UPDATE SITE
      .addCase(updateGallagherSite.pending, (state, _) => {
        return { ...state, ...{ status: "loading" } };
      })
      .addCase(updateGallagherSite.fulfilled, (state, action) => {
        return {
          ...state,
          ...{ site: action.payload },
          ...{ status: "idle" },
          ...{ message: "SITE UPDATED SUCCESSFULLY!" },
        };
      })
      .addCase(updateGallagherSite.rejected, (state, action) => {
        return {
          ...state,
          ...{ message: action.payload },
          ...{ status: "failed" },
        };
      })

      // DELETE SITE
      .addCase(deleteGallagherSite.pending, (state, _) => {
        return { ...state, ...{ status: "loading" } };
      })
      .addCase(deleteGallagherSite.fulfilled, (state, action) => {
        return {
          ...state,
          ...{ site: action.payload },
          ...{ status: "idle" },
          ...{ message: "SITE DELETED SUCCESSFULLY!" },
        };
      })
      .addCase(deleteGallagherSite.rejected, (state, action) => {
        return {
          ...state,
          ...{ message: action.payload },
          ...{ status: "failed" },
        };
      });
  },
});

export const {
  resetGallagherSite,
  selectSite,
  uploadSiteList,
  resetSite,
  searchFilter,
} = gallagherSiteSlice.actions;

export default gallagherSiteSlice.reducer;
