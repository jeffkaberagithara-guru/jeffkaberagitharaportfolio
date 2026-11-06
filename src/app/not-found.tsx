import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Monogram } from "@/components/monogram";

export default function NotFound() {
  return (
    <div className="shell not-found">
      <div className="not-found__grid">
        <div>
          <p className="folio mono">
            <span className="folio__line" /> Error 404
          </p>
          <h1 className="display not-found__title">
            A page <em>missing.</em>
          </h1>
          <p className="not-found__body">
            The address does not match a page in this edition. The work index is
            the best place to pick up the thread.
          </p>
          <div className="not-found__actions">
            <Link className="button button--solid" href="/work">
              <ArrowLeft aria-hidden="true" size={15} strokeWidth={1.5} />
              <span>Browse the work</span>
            </Link>
            <Link className="button button--outline" href="/">
              Return home
            </Link>
          </div>
        </div>
        <div className="not-found__side">
          <Monogram className="not-found__mark" title="JKG monogram" />
          <p className="mono not-found__note">
            404 / Not found
            <br />
            Nairobi, Kenya
          </p>
        </div>
      </div>
    </div>
  );
}
