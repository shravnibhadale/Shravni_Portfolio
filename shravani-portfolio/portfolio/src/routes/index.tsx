import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shravani Bhadale — Cloud & DevOps Engineer" },
      { name: "description", content: "Portfolio of Shravani Bhadale — Cloud & DevOps engineer building on AWS, Linux and modern web stacks." },
      { property: "og:title", content: "Shravani Bhadale — Cloud & DevOps Engineer" },
      { property: "og:description", content: "AWS · Linux · Python · Cloud Computing — selected work, certifications and projects." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});
