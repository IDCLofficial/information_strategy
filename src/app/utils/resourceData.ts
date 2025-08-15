import resourceData from "../../../resource.json";
import { HomeData } from "../types/resource";

export const getHomeData = (): HomeData => {
  return resourceData.Home;
};

export const getServicesData = () => {
  return resourceData.Services;
};

export const getProjectsData = () => {
  return resourceData.Projects;
};

export const getContactData = () => {
  return resourceData["Contact Us"];
};
