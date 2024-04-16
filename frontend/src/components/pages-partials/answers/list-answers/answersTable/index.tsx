import React, { useState } from "react";
import Image from "next/image";
import { GridColDef, GridCellParams } from "@mui/x-data-grid";
import { toast } from "react-toastify";

import { IAnswers } from "@/store/app/types";
import { ToastMsg } from "@/components/core/ToastMsg";
import { deleteAnswer } from "@/services/app/answers";
import { CustomNoRowsOverlay } from "@/components/core/CustomNoRowsOverlay";
import DeleteModal from "@/components/core/DeleteModal";
import {
  getAllAnswersThunk,
  setOpenAnswerModal,
  setSelectedAnswer,
} from "@/store/app/appSlice";
import { useAppDispatch } from "@/hooks/useReduxTypedHooks";

import {
  DataGridStyle,
  StyleGrid,
  IconDiv,
  PointerDiv,
  HeaderTag,
} from "@/styles/global.styles";

interface ICustomHeader {
  title: string;
  onPressSort?: () => void;
  onPressUnSort?: () => void;
}

const CustomHeader = ({ title }: ICustomHeader) => {
  return <HeaderTag>{title}</HeaderTag>;
};

interface IAnswersTable {
  answersData: IAnswers[];
  loading: boolean;
  searchText: string;
  handleSearch: (value: string) => void;
}

export default function AnswersTable({
  answersData,
  loading,
  handleSearch,
  searchText,
}: IAnswersTable) {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [answer, setAnswer] = useState<IAnswers>({} as IAnswers);

  const handlePreviewClick = (row: IAnswers) => {
    dispatch(setSelectedAnswer(row));
    dispatch(setOpenAnswerModal(true));
  };

  const handleDelete = async () => {
    try {
      if (!answer.id) return;
      const resp = await deleteAnswer(answer.id);
      if (resp.data && resp.data.id) {
        toast(
          <ToastMsg
            description={`Answer ${answer.text} is Deleted successfully`}
          />,
          {
            autoClose: 5000,
            type: "success",
            icon: false,
          }
        );
        dispatch(getAllAnswersThunk());
        setIsOpen(false);
        handleSearch(searchText);
      }
    } catch (error: any) {
      toast(
        <ToastMsg description={`Unable to delete answer ${error.message} `} />,
        {
          autoClose: 5000,
          type: "error",
          icon: false,
        }
      );
    }
  };

  const handleDeleteClick = (
    event: React.MouseEvent<HTMLImageElement>,
    row: IAnswers
  ) => {
    event.preventDefault();
    event.stopPropagation();
    setAnswer(row);
    setIsOpen(true);
  };

  const columns: GridColDef[] = [
    {
      renderHeader: (props) => {
        return <CustomHeader title="ID" {...props} />;
      },
      field: "id",
      flex: 1,
      align: "left",
      resizable: true,
    } as GridColDef,
    {
      renderHeader: (props) => {
        return <CustomHeader title="Text" {...props} />;
      },
      field: "text",
      flex: 1,
      align: "left",
    } as GridColDef,
    {
      renderHeader: (props) => {
        return <CustomHeader title="Question" {...props} />;
      },
      field: "question",
      flex: 1,
      align: "left",
      renderCell: (params: GridCellParams) => {
        const row = params.row;
        return (
          <div>
            <IconDiv>
              <p>{row.question && row.question?.text}</p>
            </IconDiv>
          </div>
        );
      },
    } as GridColDef,
    {
      renderHeader: () => {
        return <HeaderTag>Options</HeaderTag>;
      },
      field: "option",
      flex: 1,
      align: "center",
      renderCell: (params: GridCellParams) => {
        // need to get id of the current row
        const row = params.row;
        return (
          <PointerDiv>
            <IconDiv>
              <Image
                src={"/svgs/preview.svg"}
                height={23}
                width={23}
                onClick={() => handlePreviewClick(row)}
                alt="icon-view"
              />
              <Image
                src={"/svgs/delete.svg"}
                height={23}
                width={23}
                onClick={(e) => handleDeleteClick(e, row)}
                alt="icon-edit"
              />
            </IconDiv>
          </PointerDiv>
        );
      },
    } as GridColDef,
  ];

  return (
    <>
      <StyleGrid item md={11.5} sm={11} xs={11}>
        <DataGridStyle
          columns={columns}
          rows={answersData}
          disableColumnMenu={true}
          disableRowSelectionOnClick={true}
          loading={loading}
          pagination
          pageSizeOptions={[10, 50, 100]}
          getRowId={(row) => row.id}
          slots={{
            noRowsOverlay: () => (
              <CustomNoRowsOverlay
                desp=""
                name="Answers"
                onClickAdd={() => {}}
              />
            ),
          }}
        />
      </StyleGrid>
      <DeleteModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isSubmitting={false}
        handleDeleteConfirmation={handleDelete}
      />
    </>
  );
}
