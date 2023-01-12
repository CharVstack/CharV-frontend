import { Container } from '@mui/material';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { VncScreen } from 'react-vnc';

export const VNC = () => {
  const vncScreenRef = useRef<React.ElementRef<typeof VncScreen>>(null);
  const { search } = useLocation();
  const query2 = new URLSearchParams(search);
  const vmId = query2.get('vmId');
  if (!vmId) {
    return null;
  }
  const backendOrigin = import.meta.env.VITE_BACKEND_BASE_URL.replace(/^http/, 'ws');

  return (
    <Container maxWidth={false} disableGutters>
      <VncScreen
        url={`${backendOrigin}ws/vnc/${vmId}`}
        retryDuration={5000}
        scaleViewport
        debug
        ref={vncScreenRef}
        style={{
          width: '100vw',
          height: '75vh',
        }}
      />
    </Container>
  );
};
