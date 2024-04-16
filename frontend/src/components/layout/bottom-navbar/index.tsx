import React, { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";

import FieldInput from "@/components/core/FieldInput";
import { useAppDispatch } from "@/hooks/useReduxTypedHooks";

import { BottomNavButtons, NewButtonDiv } from "@/styles/global.styles";

import { DivFlexRow, DivInput, SearchButton } from "./index.styles";
import { setOpenQuestionModal } from "@/store/app";

interface IBottomNavBar {
  title: string;
  onSearch?: (value: string) => void;
  onEmptySearchString?: () => void;
  type?: "create" | "edit" | "list";
  onClickEditAction?: () => void;
  setSearchText?: Dispatch<SetStateAction<string>>;
  isShowDropdown?: boolean;
}

export default function BottomNavBar({
  title,
  type,
  onSearch,
  onEmptySearchString,
  setSearchText,
}: IBottomNavBar) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [searchValue, setSearchValue] = useState<string>("");

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    if (setSearchText) {
      setSearchText(e.target.value);
    }
    if (e.target.value.length === 0 && onEmptySearchString) {
      onEmptySearchString();
    }
  };

  const handleSearchButton = () => {
    if (onSearch) {
      onSearch(searchValue);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearchButton();
    }
  };

  const onClickAdd = () => {
    switch (title) {
      case "Questions":
        dispatch(setOpenQuestionModal(true));
        break;
      case "Answers":
        router.push("/answers/add");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div style={{ padding: "0 2rem 1rem 2rem" }}>
        {type === "list" && (
          <>
            <DivFlexRow style={{ gap: "20px" }}>
              <DivInput>
                <p>What are you looking for?</p>
                <div style={{ display: "flex", gap: "20px" }}>
                  <FieldInput
                    name="search"
                    inputType={"search-input"}
                    onChange={onSearchChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Search..."
                  />
                  <SearchButton onClick={handleSearchButton}>
                    Search
                  </SearchButton>
                </div>
              </DivInput>
            </DivFlexRow>
            {title.toLowerCase().includes("question") && (
              <BottomNavButtons>
                <Typography
                  fontSize={32}
                  fontWeight={700}
                  color={"#0284D5"}
                  style={{ lineHeight: "41px" }}
                >
                  {}
                </Typography>
                <NewButtonDiv onClick={onClickAdd}>
                  {`+ Another ${title}`}
                </NewButtonDiv>
              </BottomNavButtons>
            )}
          </>
        )}
      </div>
    </>
  );
}
