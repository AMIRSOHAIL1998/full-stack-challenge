import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate, useParams } from 'react-router-dom';
import UserUpdateForm from '../../components/forms/UserUpdateForm';
import DeleteConfirmationModal from '../../components/modals/DeleteConfirmationModal';
import { useDispatch } from 'react-redux';
import {
  readSingleUser,
  deleteUserByID,
  updateUserByID,
} from '@full-stack-challenge/services';

const ClientUserCard: React.FC = () => {
  const [openUpdateForm, setOpenUpdateForm] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { id } = useParams();
  const dispatch = useDispatch();

  const getUser = async () => {
    if (id) {
      const user = await readSingleUser(id);
      return user;
    }
  };

  const { data, error } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
  });

  const handleEdit = () => {
    setOpenUpdateForm(true);
  };

  const handleCloseUpdateForm = () => setOpenUpdateForm(false);

  const handleUpdateUser = async (data: any) => {
    const payload = {
      name: data?.name,
      email: data?.email,
    };
    if (id) {
      await updateUserByID(id, payload);
    }
    queryClient.invalidateQueries({
      queryKey: ['users'],
      queryFn: getUser,
    });
    setOpenUpdateForm(false);
    window.location.href = `/users/${id}`;
  };

  const handleDeleteClick = () => setOpenDeleteModal(true);

  const handleDeleteConfirm = async () => {
    if (id) {
      await deleteUserByID(id);
      navigate('/users');
    }
    setOpenDeleteModal(false);
    dispatch({ type: 'LOGOUT' });
    navigate('/auth');
  };

  const handleDeleteCancel = () => {
    setOpenDeleteModal(false);
  };

  if (error) {
    return <div>Error fetching users</div>;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        backgroundColor: '#f9f9f9',
        padding: '2rem',
      }}
    >
      {/* Welcome Message */}
      <Typography variant="h4" sx={{ mb: 2 }}>
        Hi {data?.name}, you can manage your Profile
      </Typography>

      {/* User Card */}
      <Card
        sx={{
          width: 400,
          padding: 3,
          margin: 'auto',
          boxShadow: 3,
          textAlign: 'center',
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontWeight: 'bold', fontSize: '2rem', mb: 1 }}
          >
            {data?.name}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontSize: '1.2rem', mb: 1 }}
          >
            {data?.email}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: '1rem', mb: 2 }}
          >
            Role: {data?.type}
          </Typography>

          {/* Edit and Delete buttons */}
          <Button
            startIcon={<EditIcon />}
            variant="outlined"
            color="primary"
            onClick={handleEdit}
            sx={{ mr: 1 }}
          >
            Edit
          </Button>

          <IconButton
            color="error"
            aria-label="delete"
            onClick={handleDeleteClick}
            sx={{ ml: 1 }}
          >
            <DeleteIcon />
          </IconButton>
        </CardContent>
      </Card>

      {/* Update User Form (Modal) */}
      <UserUpdateForm
        open={openUpdateForm}
        onClose={handleCloseUpdateForm}
        onSubmit={handleUpdateUser}
        user={data}
      />

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        open={openDeleteModal}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        userName={data?.name}
      />
    </div>
  );
};

export default ClientUserCard;