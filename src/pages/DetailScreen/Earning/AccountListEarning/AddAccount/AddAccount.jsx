import { sizeRatio, styleModal900 } from "@/theme";
import { Box, Modal } from "@mui/material";
import { useState } from "react";
import AddAccountStep1EnterInfo from "./AddAccountStep/AddAccountStep1EnterInfo";
import AddAccountStep2ProfitPlan from "./AddAccountStep//AddAccountStep2ProfitPlan";
import AddAccountStep3ConfirmNewAccount from "./AddAccountStep/AddAccountStep3ConfirmNewAccount";

const AddAccount = ({ showAddAccountModal, setShowAddAccountModal }) => {
  const [step, setStep] = useState(1);
  return (
    <Modal
      open={showAddAccountModal}
      onClose={() => setShowAddAccountModal(false)}
    >
      <Box sx={styleModal900}>
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
