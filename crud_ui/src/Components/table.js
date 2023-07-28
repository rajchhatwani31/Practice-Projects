import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./table.css"
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import InputData from './form';
import { useSelector, useDispatch } from 'react-redux';
import { create, remove, edit } from './Actions/actions';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 0,
};

export default function AccessibleTable() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setDefaultValue('');
        setOpen(true);
    };
    const handleClose = () => setOpen(false);
    const [defaultValue, setDefaultValue] = React.useState('');
    const createUser = useSelector((state) => state.getUser);
    const Dispatch = useDispatch();
    console.log(createUser)

    const got = async (values) => {
        if (values._id) {
            const updating = await axios.put(`http://localhost:8080/update`, values)
            let updateData = createUser.userList.map((data) => {
                if (updating.data.data._id === data._id) {
                    return updating.data.data;
                }
                else {
                    return data;
                }
            })
            Dispatch(create(updateData));
            return
        }
        else {
            const response = await axios.post('http://localhost:8080/addUser', values);
            // console.log(response)
            createUser.userList.push(response.data.data)
            Dispatch(create(createUser.userList));
        }

    }

    React.useEffect(() => {
        async function callApi() {
            let response = await axios.get('http://localhost:8080/get');
            Dispatch(create(response.data.data));
                }
        callApi()
    }, [Dispatch])

    const onDelete = async (perData) => {

        const response = await axios.delete(`http://localhost:8080/delete?id=${perData}`);
        console.log(response)
        if (response.status === 200) {
            Dispatch(remove(createUser.userList.filter((e) => {
                return e._id !== perData
            })))
        }
    }

    const onEdit = async (perData) => {

        // console.log(perData._id);
        setDefaultValue(perData);
        Dispatch(edit(perData));
        setOpen(true);
    }

    return (
        <div className='primary-container'>

            <div>
                <IconButton className='btn' onClick={handleOpen} > <AddIcon fontSize='large' />Add Info </IconButton>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-description" sx={{ mt: 0 }}>
                            <InputData got={got} userData={defaultValue} />
                        </Typography>
                    </Box>
                </Modal>
            </div>
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="caption table"  >
                        <TableHead className='secondary-container'>
                            <TableRow>
                                <TableCell>Names</TableCell>
                                <TableCell align="left">Contacts</TableCell>
                                <TableCell align="left">E-mails</TableCell>
                                <TableCell>Edit</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className='secondary-container' >
                            {createUser.userList.map((e) => (
                                <TableRow >
                                    <TableCell component="th" scope="row">{e.name}</TableCell>
                                    <TableCell align="left">{e.contact}</TableCell>
                                    <TableCell align="left">{e.email}</TableCell>
                                    <TableCell> <IconButton onClick={() => onEdit(e)} > <EditIcon /></IconButton></TableCell>
                                    <TableCell> <IconButton onClick={() => onDelete(e._id)}> <DeleteIcon /> </IconButton> </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* <IconButton> <CheckCircleOutlineIcon/> </IconButton> */}
            </div>
        </div>

    );
}
