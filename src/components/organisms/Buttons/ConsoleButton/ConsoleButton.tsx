import { Terminal as TerminalIcon } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const ConsoleButton = ({ vmId }: { vmId: string }) => {
  const navigate = useNavigate();
  const onClick = useCallback(() => {
    navigate(`/vnc/${vmId}`);
  }, [vmId, navigate]);
  return (
    <Button startIcon={<TerminalIcon />} variant="contained" color="info" onClick={onClick}>
      CONSOLE
    </Button>
  );
};
