import resourceData from "../../../resource.json";

export const getHomeData = () => {
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

export const getCommissionerData = () => {
  return resourceData.Home.commissioner_section;
};

export const getAboutUsData = () => {
  return resourceData["About Us"];
};

export const getDepartmentsData = () => {
  return resourceData["Department And Agencies"];
};

export const getEventsData = () => {
  return resourceData.Events;
};
