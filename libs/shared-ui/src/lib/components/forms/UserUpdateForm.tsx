import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from '@mui/material';
import { log } from 'console';

interface UserUpdateFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; email: string }) => void;
  user: any;
}

const UserUpdateForm: React.FC<UserUpdateFormProps> = ({
  open,
  onClose,
  onSubmit,
  user,
}) => {
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);

  const handleSubmit = () => {
    onSubmit({ name, email });
  };

  useEffect(() => {
    setEmail(user?.email);
    setName(user?.name);
  }, [user]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Update User</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          type="text"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserUpdateForm;
