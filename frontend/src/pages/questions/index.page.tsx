import React from "react";
import dynamic from "next/dynamic";

import FullPageLoader from "@/components/fullPageLoader";

const DynamicQuestions = dynamic(
  () => import("@/components/pages-partials/questions"),
  {
    ssr: false,
    loading: () => <FullPageLoader title="Questions" />,
  }
);

export default function Questions() {
  return <DynamicQuestions type="list" />;
}
