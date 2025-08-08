import { getEventsData } from '@/app/data/resourceData';

type event = {
  slug: string,
  date: string,
  location: string,
  title: string,
  description: string
  img: string,
  time: string,
  organizer: string,
  phone: string,
  address: string,
  speakers: {
    name: string,
    img: string,
    role: string
  }[]
}

const eventsData = getEventsData();

// Create event objects from resource.json data
const events:event[] = Array.isArray(eventsData) ? eventsData.map((event: any) => ({
  slug: event.name ? event.name.toLowerCase().replace(/ /g, '-') : 'event',
  date: event.date || "TBD",
  location: event.location || "TBD",
  title: event.name || "Untitled Event",
  description: event.description || "No description available",
  img: "/images/no_image.jpg",
  time: event.time || "TBD",
  organizer: event.organizer || "Imo State Ministry of Information Strategy",
  phone: event.phone || "TBD",
  address: event.address || "TBD",
  speakers: []
})) : [];

export default events;