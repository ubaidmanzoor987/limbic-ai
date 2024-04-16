import { useEffect, useState } from "react";

import BottomNavBar from "@/components/layout/bottom-navbar";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxTypedHooks";
import { getAppDataSelector } from "@/store/app";
import { IAnswers } from "@/store/app/types";
import { getAllAnswersThunk } from "@/store/app/appSlice";

import AnswersTable from "./answersTable";

export default function ListAnswers() {
  const dispatch = useAppDispatch();
  const { allAnswers, allAnswersPending } = useAppSelector(getAppDataSelector);
  const [answersData, setAnswersData] = useState<IAnswers[]>(allAnswers);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    dispatch(getAllAnswersThunk());
  }, [dispatch]);

  useEffect(() => {
    setAnswersData(allAnswers);
  }, [allAnswers]);

  const handleSearch = async (value: string) => {
    // First, check if the search value is not empty
    if (value.trim().length === 0) {
      // If the search string is empty, reset the data to show all answers
      setAnswersData(allAnswers);
      return;
    }

    // Filter the allAnswers array based on the search text
    const filteredAnswers = allAnswers.filter((answer) =>
      answer.text.toLowerCase().includes(value.toLowerCase())
    );

    // Update the state to only include the filtered answers
    setAnswersData(filteredAnswers);
  };

  const handleEmptySearchString = () => {
    setAnswersData(allAnswers);
  };

  return (
    <>
      <BottomNavBar
        type="list"
        title="Answers"
        onSearch={handleSearch}
        onEmptySearchString={handleEmptySearchString}
        setSearchText={setSearchText}
      />
      <AnswersTable
        handleSearch={handleSearch}
        searchText={searchText}
        answersData={answersData}
        loading={allAnswersPending}
      />
    </>
  );
}
