import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./table.css";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InputData from "./form";
import { useSelector, useDispatch } from "react-redux";
import { addUser, remove, edit, get, updateUser } from "./Actions/actions";
import { useEffect, useState } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 0,
};

export default function AccessibleTable() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    Dispatch(edit(""));
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const createUser = useSelector((state) => state.getUser);
  const Dispatch = useDispatch();
  const got = async (values) => {
    if (values._id) {
      Dispatch(updateUser(values));
      return;
    } else {
      Dispatch(addUser(values));
    }
  };

  useEffect(() => {
    Dispatch(get());
  }, [Dispatch]);

  const onDelete = async (perData) => {
    Dispatch(remove(perData));
  };

  const onEdit = async (perData) => {
    Dispatch(edit(perData));
    setOpen(true);
  };

  return (
    <div className="primary-container">
      <div>
        <IconButton className="btn" onClick={handleOpen}>
          {" "}
          <AddIcon fontSize="large" />
          Add Info{" "}
        </IconButton>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-description" sx={{ mt: 0 }}>
              <InputData got={got} userData={createUser.defaultValue} />
            </Typography>
          </Box>
        </Modal>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <TableHead className="secondary-container">
              <TableRow>
                <TableCell>Names</TableCell>
                <TableCell align="left">Contacts</TableCell>
                <TableCell align="left">E-mails</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="secondary-container">
              {createUser.userList.length > 0 &&
                createUser.userList.map((e) => (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {e.name}
                    </TableCell>
                    <TableCell align="left">{e.contact}</TableCell>
                    <TableCell align="left">{e.email}</TableCell>
                    <TableCell>
                      {" "}
                      <IconButton onClick={() => onEdit(e)}>
                        {" "}
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      {" "}
                      <IconButton onClick={() => onDelete(e._id)}>
                        {" "}
                        <DeleteIcon />{" "}
                      </IconButton>{" "}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
