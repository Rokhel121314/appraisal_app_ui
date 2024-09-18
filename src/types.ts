export interface GallagherSiteType {
  site_number: string;
  site_name: string;
  site_address: string;
  city: string;
  state: string;
  zip: string;
  building_number: string;
  building_name: string;
  building_address: string;
  latitude: string;
  longitude: string;
  sov_rcn: number | undefined;
  sov_construction_class: string;
  sov_area: number | undefined;
  inspection_date: string;
  year_built: string;
  building_use: string;
  stories: string;
  average_height: number | undefined;
  area_main: number | undefined;
  area_basement: number | undefined;
  area_total: number | undefined;
  frame_type: string;
  iso_class: string;
  structural_floor_frame: string;
  foundation_type: string;
  building_service_system: string;
  roof_cover_material: string;
  roof_frame: string;
  roof_age: string;
  roof_geometry: string;
  exterior_walltype_1: string;
  exterior_walltype_2: string;
  exterior_walltype_3: string;
  partition_wall_structure: string;
  partition_wall_finish: string;
  floor_finish: string;
  ceiling_finish: string;
  fire_sprinklers: string;
  firealarms_manual: string;
  firealarms_automatic: string;
  smoke_detector: string;
  fire_extinguishers: string;
  emergency_exit_lights: string;
  additional_features: string;
  cost_new: number | undefined;
  cost_new_less_exclusions: number | undefined;
  exclusions: number | undefined;
  other_valuation_1: {
    valuation_name: string;
    valuation_amount: number | undefined;
  };

  other_valuation_2: {
    valuation_name: string;
    valuation_amount: number | undefined;
  };

  rcn_per_area: number | undefined;
  bvs_type: string;

  bvs_file: {
    pdf_name: string;
    pdf_url: string;
  };

  writeup_image_file: {
    image_name: string;
    image_url: string;
  };

  image_file: {
    image_name: string;
    image_url: string;
  };
  entity_id: string;
}
