import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Team",
  description: "Meet the team at the Ministry of Information & Strategy, Imo State Government.",
  path: "/about-us/team",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
