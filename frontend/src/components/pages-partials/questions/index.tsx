import React from "react";

import SharedLayout from "@/components/layout/shared-layout";

import EditQuestion from "./edit-question";
import ListQuestions from "./list-questions";
import AddQuestionModal from "./add-question-modal";
import { useAppSelector } from "@/hooks/useReduxTypedHooks";
import { getAppDataSelector } from "@/store/app";

interface IQuestions {
  type: "edit" | "list";
}

export default function Questions({ type }: IQuestions) {
  const { openQuestionModal } = useAppSelector(getAppDataSelector);

  const getComponent = () => {
    switch (type) {
      case "edit":
        return <EditQuestion />;
      case "list":
        return <ListQuestions />;
      default:
        return <ListQuestions />;
    }
  };

  return (
    <>
      <SharedLayout title={"Questions"} isEdit={type === "edit"}>
        {getComponent()}
        <AddQuestionModal isOpen={openQuestionModal} />
      </SharedLayout>
    </>
  );
}
