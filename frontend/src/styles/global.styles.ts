import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { COLORS } from "../constants/colors";

export const StyleGrid = styled(Grid)`
  display: flex;
  background-color: ${COLORS.BLUE_THEME};
  overflow-x: auto;
  margin: 1rem 2rem 2rem 2rem;
  border-radius: 8px 8px 0 0;
  height: 700px;
  overflow: hidden;
`;

// @ts-ignore
export const DataGridStyle = styled(DataGrid)(() => ({
  height: "100%",
  "& .MuiDataGrid-cell ": {
    padding: "0 44px",
  },
  "& .MuiDataGrid-row:hover": {
    cursor: "pointer",
  },
  "& .css-1al08jm": {
    justifyContent: "flex-start",
  },
  border: "none",
  boxShadow: "0px 4px 10px 0px #0284D533",
  "& .css-13cstde-MuiDataGrid-root .MuiDataGrid-withBorderColor": {
    border: "none !important",
  },
  "& .css-ltf0zy-MuiDataGrid-iconButtonContainer ": {
    display: "none",
  },
  "& .MuiDataGrid-columnHeader:focus-within": {
    outline: "none !important",
  },
  "& .MuiDataGrid-toolbarContainer": {
    padding: "15px",
    justifyContent: "flex-end",
  },
  "& .MuiDataGrid-virtualScroller": {
    backgroundColor: COLORS.WHITE_100,
    border: "1px solid #C3CAD2",
  },
  "& .css-x21m3b-MuiButtonBase-root-MuiButton-root ": {
    backgroundColor: "#8bc152",
    color: "white !important",
    padding: "7px 15px",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#73a144",
    },
  },
  "& .MuiDataGrid-columnHeaderTitleContainer": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    alignContent: "space-around",
    paddingLeft: "32px",
  },
  "& .MuiDataGrid-sortIcon": {
    display: "none",
  },

  "& .MuiDataGrid-cell:focus-within": {
    outline: "none !important",
  },
  "& .MuiDataGrid-virtualScroller::-webkit-scrollbar": {
    width: "0.4em",
    height: "0.4em",
  },
  "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track": {
    background: `${COLORS.WHITE_100}`,
    borderRadius: "7px",
  },
  "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb": {
    backgroundColor: `${COLORS.THEME_COLOR}`,
    borderRadius: "10px",
  },
  "& .MuiDataGrid-footerContainer": {
    backgroundColor: `${COLORS.WHITE_100}`,
  },
  "& .css-in69uf-MuiTablePagination-root": {
    color: `${COLORS.BLACK_100}`,
  },
  "& .css-agl4zj-MuiTablePagination-selectLabel": {
    color: `${COLORS.BLUE_THEME}`,
    fontSize: "14px",
    fontWeight: "700",
  },
  "& .css-15kdv1p-MuiTablePagination-displayedRows": {
    color: `${COLORS.BLACK_100}`,
  },
}));

export const IconDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 3.5rem;
`;

export const PointerDiv = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

export const HeaderTag = styled.h1`
  color: ${COLORS.WHITE_100};
  font-weight: bolder;
  font-size: 16px;
`;

export const StyledModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 55%;
  width: 50%;

  transform: translate(-50%, -50%);
  background-color: ${COLORS.LIGHT_GREY};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  border-radius: 10px;
  overflow: hidden;
  max-height: 80vh; /* Set a maximum height for the modal */
  height: 100%; /* Ensure the container takes the full height */
  overflow-y: auto;
`;

export const LabelHeading = styled.div`
  font-weight: 600;
  font-size: 16px;
  font-style: normal;
  color: ${COLORS.BLACK_100};
  width: 25%;
  display: flex;
  align-items: center;
`;

export const HeadingText = styled.div`
  font-weight: 600;
  font-size: 34px;
  font-style: normal;
  color: ${COLORS.BLACK_100};
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.5rem;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  width: 50%;
`;

export const ModalText = styled.p`
  color: black;
  margin: 0px;
  font-size: 24px;
  font-weight: 400;
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

// export const Container = styled.div`
//   background-color: ${COLORS.LIGHT_GREY};
//   min-height: 83.2vh;
//   padding: 2rem;
//   display: flex;
// `;

export const AudioField = styled.div`
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${COLORS.GREY_200};
  background-color: ${COLORS.GREY_100};
  padding: 0.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${COLORS.BLUE_100};
  font-weight: bolder;
  label {
    cursor: pointer;
  }
`;
export const AddButtonDiv = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const OverLayComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const TextBox = styled(Box)`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 700;
  color: ${COLORS.BLACK_100};
`;

export const TextDescription = styled(Box)`
  font-size: 20px;
  margin-top: 10px;
  font-weight: 700;
  line-height: 23px;
  color: ${COLORS.BLUE_200};
`;

export const NewButtonDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 15px;
  color: ${COLORS.WHITE_100};
  box-shadow: 0px 2px 7px 0px #0284d533;
  background-color: ${COLORS.BLUE_200};
  font-size: 20px;
  margin-top: 13px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
`;

export const BottomNavButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;

export const Container = styled.div`
  background-color: ${COLORS.WHITE_100};
  display: flex;
  flex-direction: column;
  margin: 0 2rem 2rem 2rem;
  border-radius: 8px;
  height: fit-content;
  border: 1px solid ${COLORS.GREY_BORDER};
  box-shadow: 0px 4px 10px 0px #0284d533;
`;

export const UploadLabel = styled.label`
  width: 100%;
  display: flex;
  background-color: ${COLORS.BLUE_200};
  justify-content: space-between;
  align-items: center;
  padding: 5px 7px;
  border-radius: 5px;
  cursor: pointer;
`;

export const ImageMainDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageNameDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;
  margin-left: 50%;
  margin-bottom: 0.8rem;
  font-size: 12px;
  font-weight: 600;
`;

export const ImageTextDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const FlexColContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  width: 100%;
`;

export const UploadButtonDiv = styled.div`
  width: 47%;
`;

export const DeleteButtonDiv = styled.div`
  width: 47%;
  display: flex;
  background-color: ${COLORS.DEL_BUTTON_COLOR};
  justify-content: space-between;
  align-items: center;
  padding: 5px 7px;
  border-radius: 5px;
  cursor: pointer;
`;

export const DeleteButton = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${COLORS.WHITE_100};
  margin-left: 5px;
  cursor: pointer;
`;

export const UploadButton = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${COLORS.WHITE_100};
  margin-left: 5px;
  cursor: pointer;
`;

export const LabelHeadingTextArea = styled.div`
  font-weight: 800;
  font-size: 16px;
  font-style: normal;
  color: ${COLORS.BLACK_100};
  width: 30%;
  display: flex;
  align-items: center;
  padding-left: 30px;
`;
