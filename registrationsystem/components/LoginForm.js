// import React, { useEffect } from 'react';
// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
// import { MgTextField } from '../ui/MgTextField';
// import { Grid, Typography } from '@material-ui/core';
// import { MgButton } from '../ui/MgButton';
// import { Controller, useForm } from 'react-hook-form';
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
// import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
// import { useLogin } from '../../services/authService';
// import { useCurrentUser } from '../../services/userService';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       width: '100%',
//       textAlign: 'center'
//     },
//     form: {
//       padding: '0 15px'
//     },
//     input: {
//       margin: '15px 0',
//       width: '100%'
//     },
//     button: {
//       width: '100%',
//       marginTop: 20
//     }
//   })
// );

// type LoginFormProps = {
//   a?: string;
// };

// export type LoginData = {
//   email: string;
//   password: string;
// };

// // let loginSchema = yup.object().shape({
// //   email: yup.string().email().required('Reqqqqq'),
// //   password: yup.string().min(4).required('Reqqqqq')
// // })

// export const LoginForm: React.FC<LoginFormProps> = (props: any) => {
//   const classes = useStyles();

//   const { handleSubmit, register, control, errors } = useForm<LoginData>({
//     // resolver: yupResolver(loginSchema),
//     // mode: 'all'
//   });

//   // const [mutate, {data, status, error}] = useLogin()
//   //const {refetch} = useCurrentUser({enabled: false})

//   const submitLogin = async (loginData: LoginData) => {
//     //const res = await mutate(loginData)
//     // if (res?.status === 200 && res.data) {
//     //   const token = res.data.accessToken?.token
//     //   const tokenTimer = res.data.accessToken?.expires_in
//     //   const refresh = res.data.refreshToken?.token
//     //   await window.localStorage.setItem('Bearer', token)
//     //   await window.localStorage.setItem('Expires', tokenTimer)
//     //   await window.localStorage.setItem('Refresh', refresh)
//     //   await window.localStorage.setItem('logger', "true");
//     //   await refetch()
//     //   console.log(token)
//     //   console.log(refresh)
//     //   // history.push('/projektubersich')
//     // }
//   };

//   function Alert(props: AlertProps) {
//     return <MuiAlert elevation={6} variant="filled" {...props} />;
//   }

//   return (
//     <Grid className={classes.root}>
//       <Typography variant="h1">Anmeldung</Typography>
//       <br />
//       <Typography variant="h6">
//         Einloggen mit Ihrer E-Mail-Adresse und Ihrem Passwort
//       </Typography>
//       <br />

//       <form className={classes.form} onSubmit={handleSubmit(submitLogin)}>
//         {/* {status === 'success' && (
//           <Alert onClose={console.log} severity="success">
//             This is a success message!
//           </Alert>
//         )}

//         {status === 'error' && (
//           <Alert onClose={console.log} severity="error">
//             This is a Error message!
//             {JSON.stringify(error!.response.data.error.message)}
//           </Alert>
//         )} */}

//         <Controller
//           control={control}
//           render={({ onChange, onBlur, value }) => (
//             <MgTextField
//               name="email"
//               onChange={onChange}
//               onBlur={onBlur}
//               value={value}
//               className={classes.input}
//               variant="outlined"
//               type="email"
//               placeholder="Ihre E-Mail-Adresse"
//               helperText={
//                 errors.email && (
//                   <Typography component={'span'} color="error">
//                     {JSON.stringify(errors.email.message)}
//                   </Typography>
//                 )
//               }
//             />
//           )}
//           name="email"
//           rules={{ required: true }}
//           defaultValue=""
//         />

//         <Controller
//           control={control}
//           render={({ onChange, onBlur, value }) => (
//             <MgTextField
//               name="password"
//               onChange={onChange}
//               onBlur={onBlur}
//               value={value}
//               className={classes.input}
//               variant="outlined"
//               type="password"
//               placeholder="Ihr Passwort"
//               helperText={
//                 errors.password && (
//                   <Typography component={'span'} color="error">
//                     {JSON.stringify(errors.password.message)}
//                   </Typography>
//                 )
//               }
//             />
//           )}
//           name="password"
//           defaultValue=""
//         />

//         <MgButton
//           type="submit"
//           className={classes.button}
//           variant="contained"
//           color="primary"
//         >
//           ANMELDUNG
//         </MgButton>

//         <MgButton className={classes.button} variant="text">
//           Melden Sie sich bei Google an
//         </MgButton>
//       </form>
//     </Grid>
//   );
// };
