import { Monogram } from "@/components/monogram";

export default function Loading() {
  return (
    <div aria-label="Loading page" className="loading-screen" role="status">
      <Monogram className="loading-screen__mark" />
      <span className="visually-hidden">Loading</span>
    </div>
  );
}
