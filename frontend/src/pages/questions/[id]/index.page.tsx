import React from "react";
import dynamic from "next/dynamic";

import FullPageLoader from "@/components/fullPageLoader";

const DynamicEditQuestion = dynamic(
  () => import("@/components/pages-partials/questions"),
  {
    ssr: false,
    loading: () => <FullPageLoader title="Edit Question" />,
  }
);

export default function EditQuestion() {
  return <DynamicEditQuestion type="edit" />;
}
