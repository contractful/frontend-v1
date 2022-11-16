import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import PendingIcon from "@mui/icons-material/Pending";
import { CircularProgress } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

export interface Props {
  open: boolean;
  onClose: (e: React.MouseEvent<HTMLElement>) => void;
  isTokenApprovePendingSignature: boolean;
  isTokenApproveMining: boolean;
  isTokenApproveSuccess: boolean;
  isCreateAgreementPendingSignature: boolean;
  isCreateAgreementMining: boolean;
  isCreateAgreementSuccess: boolean;
  isError: boolean;
}

const CreateAgreementStatus = (props: Props) => {
  const {
    onClose,
    open,
    isTokenApprovePendingSignature,
    isTokenApproveMining,
    isTokenApproveSuccess,
    isCreateAgreementPendingSignature,
    isCreateAgreementMining,
    isCreateAgreementSuccess,
    isError,
  } = props;

  return (
    <Dialog onClose={onClose} open={open} fullWidth maxWidth="xs">
      <DialogContent>
        <List sx={{ padding: 2 }}>
          <ListItem key={0}>
            <ListItemAvatar>
              <Avatar>
                {isTokenApprovePendingSignature || isTokenApproveMining ? (
                  <CircularProgress />
                ) : isTokenApproveSuccess ? (
                  <CheckCircleOutlineIcon color="success" />
                ) : isError ? (
                  <ErrorOutlineIcon color="error" />
                ) : (
                  <CircularProgress />
                )}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Approve Token"
              secondary={
                isTokenApprovePendingSignature
                  ? "Approve the transaction..."
                  : isTokenApproveMining
                  ? "Mining. We'll be done in a second"
                  : isTokenApproveSuccess
                  ? "Done!"
                  : isError
                  ? "Something went wrong"
                  : "Loading the transaction"
              }
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                {isTokenApproveSuccess ? (
                  isCreateAgreementPendingSignature ||
                  isCreateAgreementMining ? (
                    <CircularProgress />
                  ) : isCreateAgreementSuccess ? (
                    <CheckCircleOutlineIcon color="success" />
                  ) : isError ? (
                    <ErrorOutlineIcon color="error" />
                  ) : (
                    <PendingIcon color="primary" />
                  )
                ) : (
                  <PendingIcon color="primary" />
                )}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Create Hiring Agreement"
              secondary={
                isTokenApproveSuccess
                  ? isCreateAgreementPendingSignature
                    ? "Approve the transaction..."
                    : isCreateAgreementMining
                    ? "Mining. We'll be done in a second"
                    : isCreateAgreementSuccess
                    ? "Done!"
                    : isError && "Something went wrong"
                  : "Waiting for token approval"
              }
            />
          </ListItem>
        </List>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", gap: "1.5rem" }}>
        <Button disabled={!isError} onClick={onClose} autoFocus>
          close
        </Button>

        <Button
          disabled={!isCreateAgreementSuccess}
          onClick={onClose}
          variant="contained"
          autoFocus
        >
          Review the agreement
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateAgreementStatus;
