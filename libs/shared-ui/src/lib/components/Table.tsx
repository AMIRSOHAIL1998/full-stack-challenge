import React, { useState } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { SignupForm } from '@full-stack-challenge/shared-ui';
import { useNavigate } from 'react-router-dom';
import { readUser, userSignup } from '@full-stack-challenge/services';

interface User {
  name: string;
  email: string;
  type: string;
  created_at: string;
}

const UserTable: React.FC = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: readUser,
  });
  const queryClient = useQueryClient();

  if (error) {
    return <div>Error fetching users</div>;
  }

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  // Function to open the modal for adding a new user
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleRowClick = (id: string) => {
    navigate(`/users/${id}`);
  };

  // Function to close the modal
  const handleClose = () => {
    setOpen(false);
  };

  // Handle the submission of the new user form
  const handleAddUser = async (data: any) => {
    delete data?.confirmPassword;
    const newUser = { ...data, type: 'user' };
    await userSignup(newUser);
    queryClient.invalidateQueries({
      queryKey: ['users'],
      queryFn: readUser,
    });
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add New User
      </Button>

      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Role</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((user: any, index: number) => (
              <TableRow
                key={index}
                hover
                sx={{ cursor: 'pointer' }}
                onClick={() => handleRowClick(user.id)}
              >
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.type}</TableCell>
                <TableCell>{user.created_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for the Add User Form */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New User</DialogTitle>
        <DialogContent>
          <SignupForm onSubmit={handleAddUser} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserTable;
