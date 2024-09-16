import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Box } from '@mui/material';
import CommonForm from './../../components/common/Form';
import { addProductFormElements } from '../../config/Index';
import ProductImageUpload from '../../components/admin-view/image-upload';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const initialFormData = {
  image: null,
  title: '',
  description: '',
  category: '',
  brand: '',
  price: '',
  salePrice: '',
  totalStock: '',
};

const AdminProducts = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState('');
  const [imageLoadingState, setImageLoadingState] = useState(false);

  const onSubmit = () => {};
  console.log(formData, 'formData');

  return (
    <>
      <Button variant='contained' onClick={handleClickOpen}>
        Add Product
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar color='default' sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
              Add New Product
            </Typography>
            <Button autoFocus color='inherit' onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Box>
          <ProductImageUpload
            imageFile={imageFile}
            setImageFile={setImageFile}
            uploadedUrl={uploadedUrl}
            setUploadedUrl={setUploadedUrl}
            setImageLoadingState={setImageLoadingState}
          />
          <CommonForm
            formControls={addProductFormElements}
            formData={formData}
            setFormData={setFormData}
            buttonText={'add'}
            onSubmit={onSubmit}
          />
        </Box>
      </Dialog>
    </>
  );
};

export default AdminProducts;
