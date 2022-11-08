import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { CircularProgress, DialogContent } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import { Stack } from "@mui/system";

export interface Props {
  open: boolean;
  onClose: (value: string) => void;
  isTransactionPendingSignature: boolean;
  isTransactionMining: boolean;
  isTransactionSuccess: boolean;
  title: string;
}

const TransactionStatus = (props: Props) => {
  const {
    onClose,
    open,
    isTransactionPendingSignature,
    isTransactionMining,
    isTransactionSuccess,
    title,
  } = props;

  return (
    <Dialog onClose={onClose} open={open} fullWidth maxWidth="xs">
      <DialogContent sx={{ padding: 4 }}>
        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          <Avatar>
            {isTransactionPendingSignature || isTransactionMining ? (
              <CircularProgress />
            ) : isTransactionSuccess ? (
              <CheckCircleOutlineIcon color="success" />
            ) : (
              <ErrorOutlineIcon color="error" />
            )}
          </Avatar>
          <ListItemText
            primary={title}
            secondary={
              isTransactionPendingSignature
                ? "Approve the transaction..."
                : isTransactionMining
                ? "Mining. We'll be done in a second"
                : isTransactionSuccess
                ? "Done!"
                : "Something went wrong"
            }
          />
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default TransactionStatus;
