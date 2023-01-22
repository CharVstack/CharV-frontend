import TerminalIcon from '@mui/icons-material/Terminal';
import { Button } from '@mui/material';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const VmConsoleButton = ({ vmId }: { vmId: string }) => <BaseVmConsoleButton vmId={vmId} />;

export const BaseVmConsoleButton = ({ vmId }: { vmId: string }) => {
  const navigate = useNavigate();
  const jump = useCallback((to: string) => () => navigate(to), [navigate]);

  return (
    <Button
      startIcon={<TerminalIcon />}
      disabled={vmId.length === 0}
      variant="contained"
      color="primary"
      onClick={jump(`/vnc?vmId=${vmId}`)}
    >
      Console
    </Button>
  );
};
