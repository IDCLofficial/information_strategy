export interface ResourceData {
  Home: {
    header_navigation: {
      logo_title: string;
      main_menu: string[];
    };
    hero_banner_slides: {
      description: string;
      backgrounds: string[];
      welcome_statement: {
        vision: string;
        mission: string;
      };
    };
    commissioner_section: {
      name: string;
      title: string;
      welcome_statement: string;
    };
    news_feed: {
      description: string;
    };
    management_team: {
      positions: string[];
    };
    partners_contact: {
      description: string;
    };
    google_map: {
      integration: string;
    };
    contact_footer: {
      address: string;
    };
  };
  "About Us": {
    header: string;
    breadcrumb: string;
    introduction: string;
    vision_mission_values: string;
    meet_us_panel: string;
    map_widget: string;
    footer: string;
  };
  Commissioner: {
    name: string;
  };
  "Department And Agencies": {
    header: string;
    breadcrumb: string;
    intro_paragraph: string;
    departments_list: string[];
    imagery: string;
    footer: string;
  };
  Services: {
    name: string;
    description: string;
  }[];
  Projects: {
    name: string;
    description: string;
  }[];
  News: {
    name: string;
    description: string;
  }[];
  Events: {
    name: string;
    date: string;
    location: string;
    description: string;
    time: string;
    organizer: string;
    phone: string;
    address: string;
  }[];
  Media: {
    name: string;
    description: string;
  }[];
  "Contact Us": {
    social_media: {
      facebook: string;
    };
  };
}

export interface HomeData {
  header_navigation: {
    logo_title: string;
    main_menu: string[];
  };
  hero_banner_slides: {
    description: string;
    backgrounds: string[];
    welcome_statement: {
      vision: string;
      mission: string;
    };
  };
  commissioner_section: {
    name: string;
    title: string;
    welcome_statement: string;
  };
  news_feed: {
    description: string;
  };
  management_team: {
    positions: string[];
  };
  partners_contact: {
    description: string;
  };
  google_map: {
    integration: string;
  };
  contact_footer: {
    address: string;
  };
}
