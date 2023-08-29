import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { Box, Button, Container, InputLabel, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Helmet } from "react-helmet";
import axios from "../../api/axios";
import { Google } from "@mui/icons-material";
import { FormContainer, TextInput } from "./styled";

const LoginValidationSchema = Yup.object({
  email: Yup.string("Enter your email")
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string("Enter your password").required("Password is required"),
});

const RegisterValidationSchema = Yup.object({
  email: Yup.string("Enter your email")
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string("Enter your password").required("Password is required"),
  displayName: Yup.string("Enter a display name").required(
    "Display name is required"
  ),
});

export default function AuthenticationForm({ type }) {
  const { setUser } = useContext(UserContext);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      displayName: "",
    },
    validationSchema:
      type === "login" ? LoginValidationSchema : RegisterValidationSchema,
    onSubmit: (values, { setSubmitting }) => {
      if (type === "login") {
        handleLogin(values);
      } else {
        handleRegister(values);
      }
      setSubmitting(false);
    },
  });

  const google = () => {
    window.open("http://localhost:5000/api/auth/google", "_self");
  };

  const handleLogin = async (values) => {
    try {
      const res = await axios.post("/auth/login", JSON.stringify(values), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRegister = async (values) => {
    try {
      const res = await axios.post("/auth/register", JSON.stringify(values), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const headerText = type[0].toUpperCase() + type.slice(1);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Helmet>
        <title>goElec | {headerText}</title>
      </Helmet>
      <FormContainer style={{}}>
        <h1 style={{ color: "white" }}>{headerText}</h1>
        <Box
          component="form"
          noValidate
          onSubmit={formik.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <InputLabel
            htmlFor="email"
            sx={{ color: "white", alignSelf: "left" }}
          >
            <Typography variant="h6">Email</Typography>
          </InputLabel>
          <TextInput
            id="email"
            name="email"
            type="email"
            InputProps={{ sx: { color: "white" } }}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          {type === "register" && (
            <>
              <InputLabel
                htmlFor="displayName"
                sx={{ color: "white", marginTop: 3 }}
              >
                <Typography variant="h6">Display Name</Typography>
              </InputLabel>
              <TextInput
                id="displayName"
                name="displayName"
                type="text"
                InputProps={{ sx: { color: "white" } }}
                value={formik.values.displayName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.displayName &&
                  Boolean(formik.errors.displayName)
                }
                helperText={
                  formik.touched.displayName && formik.errors.displayName
                }
              />
            </>
          )}
          <InputLabel htmlFor="password" sx={{ color: "white", marginTop: 3 }}>
            <Typography variant="h6">Password</Typography>
          </InputLabel>
          <TextInput
            id="password"
            name="password"
            type="password"
            InputProps={{ sx: { color: "white" } }}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            variant="contained"
            type="submit"
            disabled={formik.isSubmitting}
            sx={{ marginTop: 3, width: "100%", padding: 1 }}
          >
            <Typography variant="button">Submit</Typography>
          </Button>
        </Box>
        <hr style={{ width: "80%", margin: 50 }} />
        <Button variant="outlined" sx={{ marginBottom: 5 }} onClick={google}>
          <Google sx={{ marginRight: 2 }} />
          <Typography variant="button">Sign in with Google</Typography>
        </Button>
      </FormContainer>
    </Container>
  );
}
