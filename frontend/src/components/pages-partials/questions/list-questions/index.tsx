import { useEffect, useState } from "react";

import BottomNavBar from "@/components/layout/bottom-navbar";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxTypedHooks";
import { getAppDataSelector } from "@/store/app";
import { IQuestions } from "@/store/app/types";
import { getAllQuestionsThunk } from "@/store/app/appSlice";

import QuestionsTable from "./questionsTable";

export default function ListQuestions() {
  const dispatch = useAppDispatch();
  const { allQuestions, allQuestionsPending } =
    useAppSelector(getAppDataSelector);
  const [questionsData, setQuestionsData] =
    useState<IQuestions[]>(allQuestions);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    dispatch(getAllQuestionsThunk());
  }, [dispatch]);

  useEffect(() => {
    setQuestionsData(allQuestions);
  }, [allQuestions]);

  const handleSearch = async (value: string) => {
    // First, check if the search value is not empty
    if (value.trim().length === 0) {
      // If the search string is empty, reset the data to show all questions
      setQuestionsData(allQuestions);
      return;
    }

    // Filter the allQuestions array based on the search text
    const filteredAnswers = allQuestions.filter((answer) =>
      answer.text.toLowerCase().includes(value.toLowerCase())
    );

    // Update the state to only include the filtered answers
    setQuestionsData(filteredAnswers);
  };

  const handleEmptySearchString = () => {
    setQuestionsData(allQuestions);
  };

  return (
    <>
      <BottomNavBar
        type="list"
        title="Questions"
        onSearch={handleSearch}
        onEmptySearchString={handleEmptySearchString}
        setSearchText={setSearchText}
      />
      <QuestionsTable
        handleSearch={handleSearch}
        searchText={searchText}
        questionsData={questionsData}
        loading={allQuestionsPending}
      />
    </>
  );
}
