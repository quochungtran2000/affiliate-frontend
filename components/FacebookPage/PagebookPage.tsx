import Link from "next/link";
import React from "react";

export default function PagebookPage() {
  return (
    <>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/hoisanmavoucher"
        data-tabs="timeline"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/hoisanmavoucher"
          className="fb-xfbml-parse-ignore"
        >
          <Link href="https://www.facebook.com/hoisanmavoucher" passHref>
            <a target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200">
              Hội Săn Mã
            </a>
          </Link>
        </blockquote>
      </div>
    </>
  );
}
