import type { MetadataRoute } from "next";
import { allProjects } from "@/content/projects";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes = ["", "/work", "/about", "/journey", "/contact", "/cv", "/colophon"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: path === "" || path === "/work" ? "monthly" : "yearly",
      priority: path === "" ? 1 : path === "/work" ? 0.9 : 0.7,
    }),
  ) as MetadataRoute.Sitemap;

  const projectRoutes: MetadataRoute.Sitemap = allProjects.map((project) => ({
    url: `${base}/work/${project.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: project.featured ? 0.8 : 0.5,
  }));

  return [...staticRoutes, ...projectRoutes];
}
