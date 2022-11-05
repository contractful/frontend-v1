import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { CircularProgress, DialogContent } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import { Stack } from "@mui/system";

export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: string) => void;
  isActivateAgreementPendingSignature: boolean;
  isActivateAgreementMining: boolean;
  isActivateAgreementSuccess: boolean;
}

const ActivateAgreementStatus = (props: SimpleDialogProps) => {
  const {
    onClose,
    open,
    isActivateAgreementPendingSignature,
    isActivateAgreementMining,
    isActivateAgreementSuccess,
  } = props;

  return (
    <Dialog onClose={onClose} open={open} fullWidth maxWidth="xs">
      <DialogContent sx={{ padding: 4 }}>
        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          <Avatar>
            {isActivateAgreementPendingSignature ||
            isActivateAgreementMining ? (
              <CircularProgress />
            ) : isActivateAgreementSuccess ? (
              <CheckCircleOutlineIcon color="success" />
            ) : (
              <ErrorOutlineIcon color="error" />
            )}
          </Avatar>
          <ListItemText
            primary="Activate Agreement"
            secondary={
              isActivateAgreementPendingSignature
                ? "Approve the transaction..."
                : isActivateAgreementMining
                ? "Mining. We'll be done in a second"
                : isActivateAgreementSuccess
                ? "Done!"
                : "Something went wrong"
            }
          />
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default ActivateAgreementStatus;
