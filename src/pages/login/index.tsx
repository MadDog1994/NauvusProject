import React, { useState } from "react";
import AuthContainer from "../../components/auth-container";
import { Button } from "../../components/button";
import { TextField } from "../../components/text-field";
import { Title } from "../../components/title";
import { Link } from "react-router-dom";
import "./styles.scss";

import { useAppDispatch } from "../../redux/hooks";
import { sendLoginData } from "../../redux/auth/actions";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useAppDispatch();

  const sendLogin = () => {
    dispatch(sendLoginData(email, password));
  };

  return (
    <AuthContainer buttonTitle="Sign Up" link="/sign-up">
      <div className="title-container-welcome">
        <div className="title-container-welcome__field">
          <Title text="Welcome back" subtitle="" className="black" />
        </div>
        <TextField
          value={email}
          onFieldChange={setEmail}
          placeholder="Email address"
        />
        <TextField
          value={password}
          onFieldChange={setPassword}
          placeholder="Password"
        />
        <div className="button-container">
          <Button label="Login" className="big-button" onClick={sendLogin} />
        </div>
        <div className="reset-container">
          <span>Forgot password? </span>
          <Link to="">
            <button className="reset-button">Reset</button>
          </Link>
        </div>
      </div>
    </AuthContainer>
  );
};

export default Login;
