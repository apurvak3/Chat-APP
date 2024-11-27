import React, { useState } from "react";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
            >
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                sx={{ marginTop: "1rem" }}
              >
                Login
              </Button>
              <Typography sx={{ marginTop: "1rem" }}>OR</Typography>
              <Button
                fullWidth
                variant="text"
                onClick={() => setIsLogin(false)}
                sx={{ marginTop: "0.5rem" }}
              >
                Sign up instead
              </Button>
            </form>
          </>
        ) : (
          <Typography variant="h5">Register</Typography>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
