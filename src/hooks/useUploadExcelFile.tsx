import { useState } from "react";
import * as XLSX from "xlsx";
import { excelDateFormatter } from "./excelDateFormat";
import { GallagherSiteType } from "../types";

export interface SheetData {
  [key: string]: any;
}

const useUploadExcelFile = (entity_id: string) => {
  const [data, setData] = useState<GallagherSiteType[] | null>(null);

  const resetData = () => {
    setData(null);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const binaryStr = event.target?.result;
      if (typeof binaryStr !== "string") return;

      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const sheetData: SheetData[] = XLSX.utils.sheet_to_json(sheet);

      const excel_data = sheetData?.map((item: any) => {
        return {
          entity_site_building_number: item["ENTITY-SITE-BUILDING NUMBER"],
          site_number: item["SITE NUMBER"],
          site_name: item["SITE NAME"],
          site_address: item["SITE ADDRESS"],
          city: item["CITY"],
          state: item["STATE"],
          zip: item["ZIP"],
          building_number: item["BUILDING NUMBER"],
          building_name: item["BUILDING NAME"],
          building_address: item["BUILDING ADDRESS"],
          latitude: item["LATITUDE"],
          longitude: item["LONGITUDE"],
          sov_rcn: item["SOV RCN"],
          sov_construction_class: item["SOV CONSTRUCTION CLASS"],
          sov_area: item["SOV AREA"],
          inspection_date: !item["DATE OF INSPECTION"]
            ? ""
            : excelDateFormatter(item["DATE OF INSPECTION"]),
          year_built: item["YEAR BUILT"],
          building_use: item["BUILDING USE/OCCUPANCY"],
          stories: item["NUMBER OF STORIES"],
          average_height: item["AVERAGE STORY HEIGHT"],
          area_main: item["SQUARE FOOTAGE (MAIN STRUCTURE)"],
          area_basement: item["SQUARE FOOTAGE (BASEMENT)"],
          area_total: item["SQUARE FOOTAGE (TOTAL)"],
          frame_type: item["FRAME TYPE (M&S)"],
          iso_class: item["ISO CONSTRUCTION CLASS"],
          structural_floor_frame: item["STRUCTURAL FLOOR FRAME"],
          foundation_type: item["FOUNDATION TYPE"],
          building_service_system: item["BUILDING SERVICE SYSTEMS"],
          roof_cover_material: item["ROOF COVER MATERIAL"],
          roof_frame: item["ROOF FRAME"],
          roof_age: item["ROOF AGE"],
          roof_geometry: item["ROOF GEOMETRY"],
          exterior_walltype_1: item["EXTERIOR WALL TYPE 1"],
          exterior_walltype_2: item["EXTERIOR WALL TYPE 2"],
          exterior_walltype_3: item["EXTERIOR WALL TYPE 3"],
          fire_sprinklers: item["FIRE SPRINKLERS"],
          firealarms_manual: item["FIRE ALARMS (MANUAL)"],
          firealarms_automatic: item["FIRE ALARMS (AUTOMATIC)"],
          smoke_detector: item["SMOKE DETECTORS"],
          fire_extinguishers: item["FIRE EXTINGUISHERS"],
          emergency_exit_lights: item["EMERGENCY EXIT LIGHTS"],
          additional_features: item["ADDITIONAL FEATURES"],
          cost_new: item["COST NEW"],
          cost_new_less_exclusions: item["COST NEW LESS EXCLUSIONS"],
          exclusions: item["EXCLUSIONS"],
          rcn_per_area: item["RCN PER SQ.FT"],
          bvs_type: "Reconstruction",
          entity_id: entity_id,
        };
      });

      setData(excel_data);
      return excel_data;
    };

    reader.readAsBinaryString(file);
  };

  return { data, handleFileUpload, resetData };
};

export default useUploadExcelFile;
