import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl?: string;
  alt?: string;
}

const MyModal: React.FC<ModalProps> = ({ isOpen, onClose, imageUrl, alt }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      // Disabilita fullScreen per gestire manualmente le dimensioni
      fullScreen={false}
      slotProps={{
        paper: {
          sx: {
            maxWidth: isMobile ? '95vw' : '80vw',
            height: isMobile ? '95vh' : '80vh',
            m: 0,
            p: 0,
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 2,
          },
        },
        backdrop: {
          sx: {
            backdropFilter: 'blur(4px)',
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
        },
      }}
    >
      <IconButton
        onClick={onClose}
        aria-label="Chiudi"
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          color: theme.palette.grey[600],
          zIndex: 1
        }}
      >
        ✖
      </IconButton>

      <DialogContent
        sx={{
          width: '100%',
          height: '100%',
          p: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.palette.background.paper
        }}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={alt || 'Anteprima'}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain', // o 'cover' se vuoi riempire totalmente anche a costo di tagliare
              display: 'block',
            }}
          />
        ) : (
          <p className="text-center">Immagine non trovata</p>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default MyModal
