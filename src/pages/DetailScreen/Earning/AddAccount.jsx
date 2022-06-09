import { sizeRatio } from "@/theme";
import { Box, Modal } from "@mui/material";
import { useState } from "react";
import AddAccountStep1EnterInfo from "./AddAccountStep1EnterInfo";
import AddAccountStep2ProfitPlan from "./AddAccountStep2ProfitPlan";
import AddAccountStep3ConfirmNewAccount from "./AddAccountStep3ConfirmNewAccount";

const AddAccount = ({ showAddAccountModal, setShowAddAccountModal }) => {
  const [step, setStep] = useState(1);
  return (
    <Modal
      open={showAddAccountModal}
      onClose={() => setShowAddAccountModal(false)}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: sizeRatio(900),
          bgcolor: "#FFF",
          paddingBlock: sizeRatio(35),
          paddingInline: sizeRatio(70),
          borderRadius: "12px",
        }}
      >
        {step === 1 && (
          <AddAccountStep1EnterInfo
            setStep={setStep}
            setShowAddAccountModal={setShowAddAccountModal}
          />
        )}
        {step === 2 && <AddAccountStep2ProfitPlan setStep={setStep} />}
        {step === 3 && (
          <AddAccountStep3ConfirmNewAccount
            setStep={setStep}
            setShowAddAccountModal={setShowAddAccountModal}
          />
        )}
      </Box>
    </Modal>
  );
};
export default AddAccount;
