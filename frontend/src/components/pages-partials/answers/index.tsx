import React from "react";

import SharedLayout from "@/components/layout/shared-layout";
import { getAppDataSelector } from "@/store/app";
import { useAppSelector } from "@/hooks/useReduxTypedHooks";

import ListAnswers from "./list-answers";
import AnswerModal from "./answer-modal";

export default function Answers() {
  const { openAnswersModal } = useAppSelector(getAppDataSelector);

  return (
    <>
      <SharedLayout title={"Answers"} isEdit={false}>
        <ListAnswers />
        <AnswerModal isOpen={openAnswersModal} />
      </SharedLayout>
    </>
  );
}
