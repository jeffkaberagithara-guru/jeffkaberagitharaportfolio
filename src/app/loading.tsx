import { BrandLogo } from "@/components/brand-logo";

export default function Loading() {
  return (
    <div aria-label="Loading page" className="loading-screen" role="status">
      <BrandLogo alt="" className="loading-screen__mark" sizes="80px" />
      <span className="visually-hidden">Loading</span>
    </div>
  );
}
