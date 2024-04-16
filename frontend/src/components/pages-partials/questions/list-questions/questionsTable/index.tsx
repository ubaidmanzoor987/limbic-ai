import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { GridColDef, GridCellParams, GridRowParams } from "@mui/x-data-grid";
import { toast } from "react-toastify";

import { IQuestions } from "@/store/app/types";
import { ToastMsg } from "@/components/core/ToastMsg";
import { deleteQuestion } from "@/services/app/questions";
import { CustomNoRowsOverlay } from "@/components/core/CustomNoRowsOverlay";
import DeleteModal from "@/components/core/DeleteModal";
import { getAllQuestionsThunk } from "@/store/app/appSlice";
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

interface IQuestionsTable {
  questionsData: IQuestions[];
  loading: boolean;
  searchText: string;
  handleSearch: (value: string) => void;
}

export default function QuestionsTable({
  questionsData,
  loading,
  handleSearch,
  searchText,
}: IQuestionsTable) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [question, setQuestion] = useState<IQuestions>({} as IQuestions);

  const handlePreviewClick = (row: IQuestions) => {
    router.push(`/questions/${row.id}`);
  };

  const handleRowClick = (params: GridRowParams) => {
    const id = params.row.id;
    router.push(`/questions/${id}`);
  };

  const handleDelete = async () => {
    try {
      if (!question.id) return;
      const resp = await deleteQuestion(question.id);
      if (resp.data && resp.data.id) {
        toast(<ToastMsg description={`Question is Deleted successfully`} />, {
          autoClose: 5000,
          type: "success",
          icon: false,
        });
        setIsOpen(false);
        handleSearch(searchText);
        dispatch(getAllQuestionsThunk());
      }
    } catch (error: any) {
      toast(
        <ToastMsg
          description={`Unable to delete question ${error.message} `}
        />,
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
    row: IQuestions
  ) => {
    event.preventDefault();
    event.stopPropagation();
    setQuestion(row);
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
          rows={questionsData}
          disableColumnMenu={true}
          disableRowSelectionOnClick={true}
          loading={loading}
          pagination
          pageSizeOptions={[10, 50, 100]}
          getRowId={(row) => row.id}
          onRowClick={handleRowClick}
          slots={{
            noRowsOverlay: () => (
              <CustomNoRowsOverlay
                desp=""
                name="Questions"
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
