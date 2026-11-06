"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Monogram } from "@/components/monogram";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="shell not-found">
      <div className="not-found__grid">
        <div>
          <p className="folio mono">
            <span className="folio__line" /> Unexpected error
          </p>
          <h1 className="display not-found__title">
            Something <em>broke.</em>
          </h1>
          <p className="not-found__body">
            The page failed to render. This is not a design decision. Try again,
            or return to the work index.
          </p>
          <div className="not-found__actions">
            <button
              className="button button--solid"
              onClick={reset}
              type="button"
            >
              Try again
            </button>
            <Link className="button button--outline" href="/work">
              Browse the work
            </Link>
          </div>
        </div>
        <div className="not-found__side">
          <Monogram className="not-found__mark" title="JKG monogram" />
          <p className="mono not-found__note">
            Error / Client boundary
            {error.digest ? (
              <>
                <br />
                Ref {error.digest}
              </>
            ) : null}
          </p>
        </div>
      </div>
    </div>
  );
}
