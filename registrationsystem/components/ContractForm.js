import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Label, RadioButtonUnchecked } from "@material-ui/icons";
import {
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Typography,
  Grid,
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";

const useStyles = makeStyles(() => ({
  root: {
    color: "#00000",
    marginLeft: "8%",
  },
  text: {
    fontSize: 14,
  },
}));

function ContractForm(props) {
  const [payment, setPayment] = React.useState("");
  const [permit, setPermit] = React.useState("");

  const classes = useStyles();

  const handleChange = (event) => {
    setPayment(event.target.value);
  };
  const handleChangePermit = (event) => {
    setPermit(event.target.value);
  };

  return (
    <form className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              1. Please select the payment method for your tuition fees
            </FormLabel>
            <RadioGroup
              aria-label="pay"
              name="pay"
              value={payment}
              onChange={handleChange}
            >
              <FormControlLabel
                value="InAdvance"
                control={<Radio />}
                label={
                  <Typography className={classes.text}>
                    In advance payment (cash)
                  </Typography>
                }
              />
              <FormControlLabel
                value="BankLoan"
                control={<Radio />}
                label={
                  <Typography className={classes.text}>Bank loan</Typography>
                }
              />
              <FormControlLabel
                value="CreditCard"
                control={<Radio />}
                label={
                  <Typography className={classes.text}>Credit card</Typography>
                }
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              2. Please Select Residency Permit Payment
            </FormLabel>
            <RadioGroup
              aria-label="permit"
              name="permit"
              value={permit}
              onChange={handleChangePermit}
            >
              <FormControlLabel
                value="No"
                control={<Radio />}
                label={
                  <Typography className={classes.text}>
                    I don’t need residency permit.
                  </Typography>
                }
              />
              <FormControlLabel
                value="Apply"
                control={<Radio />}
                label={
                  <Typography className={classes.text}>
                    I will apply for residency permit by myself.
                  </Typography>
                }
              />
              <FormControlLabel
                value="ApplyIUS"
                control={<Radio />}
                label={
                  <Typography className={classes.text}>
                    I will apply for residency permit via IUS
                  </Typography>
                }
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
}

export default ContractForm;
