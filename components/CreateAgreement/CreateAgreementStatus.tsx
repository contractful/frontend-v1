import { ThumbDown } from "@mui/icons-material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import PendingIcon from "@mui/icons-material/Pending";
import { CircularProgress } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

export interface Props {
  open: boolean;
  onClose: (e: React.MouseEvent<HTMLElement>) => void;
  isTokenApprovePendingSignature: boolean;
  isTokenApproveMining: boolean;
  isTokenApproveSuccess: boolean;
  isCreateAgreementPendingSignature: boolean;
  isCreateAgreementMining: boolean;
  isCreateAgreementSuccess: boolean;
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
                ) : (
                  <ErrorOutlineIcon color="error" />
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
                  : "Something went wrong"
              }
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                {isTokenApproveSuccess ? (
                  isCreateAgreementPendingSignature || isCreateAgreementMining ? (
                    <CircularProgress />
                  ) : isCreateAgreementSuccess ? (
                    <CheckCircleOutlineIcon color="success" />
                  ) : (
                    <ErrorOutlineIcon color="error" />
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
                    : "Something went wrong"
                  : "Waiting for token approval"
              }
            />
          </ListItem>
        </List>
      </DialogContent>
      <DialogActions>
        {((!isTokenApprovePendingSignature)
          && (!isCreateAgreementPendingSignature))
          && (!(isTokenApproveMining || isCreateAgreementMining))
          && (!(isTokenApproveSuccess && isCreateAgreementSuccess))
          && (
          <>
            <Button
              onClick={onClose}
              variant="text"
              autoFocus
            >
              Done
            </Button>
          </>
        )}

        {isCreateAgreementSuccess && (
            <>
            <Button
              onClick={onClose}
              variant="text"
              autoFocus
            >
              Review the agreement
            </Button>
            </>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default CreateAgreementStatus;
