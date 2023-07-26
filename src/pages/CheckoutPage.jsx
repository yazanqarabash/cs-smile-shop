import * as React from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext";
import DispatchCheckout from "../components/Checkout/DispatchCheckout";
import getStepContent from "../helpers/getStepContent";
import {
  Typography,
  Button,
  StepLabel,
  Step,
  Stepper,
  Paper,
  Container,
  Box,
} from "@mui/material";

const steps = ["Shipping Address", "Payment Details", "Checkout Summary"];

function CheckoutPage() {
  const [activeStep, setActiveStep] = React.useState(0);
  const { userData, setErrors, resetUserData } = React.useContext(UserContext);
  const { cart, resetCart, totalCartPrice, amountOfItemsInCart } =
    React.useContext(CartContext);

  if (amountOfItemsInCart() === 0 && activeStep !== steps.length) {
    return <Navigate to="/" />;
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setErrors({});
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <Container
        component="main"
        maxWidth="sm"
        className="animate__animated animate__fadeIn"
        sx={{ mt: 12 }}
      >
        <Paper
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          elevation={12}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper
            activeStep={activeStep}
            sx={{ pt: 3, pb: 5, display: { xs: "none", sm: "flex" } }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <DispatchCheckout
                userData={userData}
                resetUserData={resetUserData}
                cart={cart}
                resetCart={resetCart}
                totalCartPrice={totalCartPrice}
              />
            ) : (
              <>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1
                      ? "Finish my purchase"
                      : "Next"}
                  </Button>
                </Box>
              </>
            )}
          </>
        </Paper>
      </Container>
    </>
  );
}

export default CheckoutPage;
