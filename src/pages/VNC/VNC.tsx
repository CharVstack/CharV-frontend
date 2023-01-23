import { Container } from '@mui/material';
import { useRef, useState, useCallback } from 'react';
import { VncScreen } from 'react-vnc';

import { Head } from '@components/atoms/Head';
import { useIsProduction } from '@lib/isProduction';

type Props = {
  vmId: string;
};

export const VNC = ({ vmId }: Props) => {
  const vncScreenRef = useRef<React.ElementRef<typeof VncScreen>>(null);
  const isProduction = useIsProduction();
  const backendOrigin = import.meta.env.VITE_BACKEND_BASE_URL.replace(/^http/, 'ws');
  const [desktopName, setDesktopName] = useState<string | undefined>('');

  const onDesktopName = useCallback((e?: { detail: { name: string } }) => {
    setDesktopName(e?.detail.name);
  }, []);

  const [isConnected, setIsConnected] = useState(false);

  const onConnect = useCallback(() => {
    setIsConnected(true);
  }, []);

  const onDisConnect = useCallback(() => {
    setIsConnected(false);
  }, []);

  return (
    <>
      <Head title={`VNC${desktopName ? `(${desktopName})` : ''} - ${isConnected ? 'connected' : 'disconnected'}`} />
      <Container maxWidth={false} disableGutters>
        <VncScreen
          url={`${backendOrigin}ws/vnc/${vmId}`}
          retryDuration={5000}
          scaleViewport
          debug={!isProduction}
          ref={vncScreenRef}
          onDesktopName={onDesktopName}
          onConnect={onConnect}
          onDisconnect={onDisConnect}
          style={{
            width: '100vw',
            height: '75vh',
          }}
        />
      </Container>
    </>
  );
};
