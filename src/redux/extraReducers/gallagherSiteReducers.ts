import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axiosInterceptor";
import { GallagherSiteType } from "../../types";

// ADD SITE

export const addGallagherSite = createAsyncThunk(
  "gallagherSite/add",
  async (payload: GallagherSiteType, { rejectWithValue }) => {
    try {
      const site = await axiosInstance.post(`/gallagher_site/add`, payload, {
        withCredentials: true,
      });
      return site.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// ADD MULTIPLE SITE

export const addMultipleGallagherSite = createAsyncThunk(
  "gallagherSite/add_many",
  async (payload: GallagherSiteType[], { rejectWithValue }) => {
    try {
      const sites = await axiosInstance.post(
        `/gallagher_site/add_many`,
        payload,
        { withCredentials: true }
      );
      return sites.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// VIEW ALL SITES OF ENTITY

export const viewGallagherSitesPerEntity = createAsyncThunk(
  "gallagherSite/view_entity_sites",
  async (payload: string, { rejectWithValue }) => {
    try {
      const sites = await axiosInstance.get(
        `/gallagher_site/view_entity_sites/${payload}`,
        { withCredentials: true }
      );
      return sites.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
