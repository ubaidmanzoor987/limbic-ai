import React from "react";
import dynamic from "next/dynamic";

import FullPageLoader from "@/components/fullPageLoader";

const DynamicAnswers = dynamic(
  () => import("@/components/pages-partials/answers"),
  {
    ssr: false,
    loading: () => <FullPageLoader title="Answers" />,
  }
);

export default function Answers() {
  return <DynamicAnswers />;
}
