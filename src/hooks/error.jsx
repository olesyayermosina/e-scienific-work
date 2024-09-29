import { useState, useCallback } from 'react';
import { Snackbar, Alert } from '@mui/material';

export const useError = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [open, setOpen] = useState(false);

    const showError = useCallback((message) => {
        setErrorMessage(message);
        setOpen(true);
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    const ErrorSnackbar = () => (
        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert onClose={handleClose} severity="error" sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                {errorMessage}
            </Alert>
        </Snackbar>
    );

    return { showError, ErrorSnackbar };
};