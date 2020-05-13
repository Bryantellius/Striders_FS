import * as React from "react";
import { useHistory } from "react-router-dom";
import { apiService, setAccessToken } from "../utils/apiService";

const SignUp: React.FC<SignUpProps> = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [firstname, setFirstname] = React.useState<string>("");
  const [lastname, setLastname] = React.useState<string>("");

  const history = useHistory();

  const SignUp = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let FNInput = document.getElementById("firstname") as HTMLInputElement;
    let LNInput = document.getElementById("lastname") as HTMLInputElement;
    let EInput = document.getElementById("email") as HTMLInputElement;
    let PInput = document.getElementById("password") as HTMLInputElement;

    // If statements check for inputed values, if blank, displays error messages
    if (FNInput.value === "") {
      
      document.getElementById("FNError").style.display = "block";
      FNInput.style.border = "2px solid red";
      return;
    }
    if (LNInput.value === "") {
      document.getElementById("LNError").style.display = "block";
      LNInput.style.border = "2px solid red";
      return;
    }
    if (EInput.value === "") {
      document.getElementById("EError").style.display = "block";
      EInput.style.border = "2px solid red";
      return;
    }
    if (PInput.value.length < 10) {
      document.getElementById("PError").style.display = "block";
      PInput.style.border = "2px solid red";
      return;
    }

    try {
      let res = await apiService(`/auth/register`, "POST", {
        email,
        password,
        firstname,
        lastname,
      });
      if (res) {
        setAccessToken(res.token, { userid: res.userid, role: res.role });
        history.replace("/");
      }
    } catch (e) {
      document.getElementById("signUpForm").style.display = "block";
      throw e;
    }
  };

  return (
    <main className="container">
      <section className="row my-2 justify-content-center">
        <div className="col-md-8">
          <div className="alert alert-danger d-none">
            Sign Up Failed. This may be due to a duplicate email that has
            already been registered, or that your password is not strong enough.
            Please enter new information.
          </div>
          <form
            id="signUpForm"
            className="form-group p-3 border rounded shadow"
          >
            <h2 className="text-center p-2 mb-4 border-bottom border-success">
              Get moving. Join Striders Today.
            </h2>
            <div className="row my-3">
              <div className="col">
                <h4>First Name:</h4>
                <small id="FNError" className="inputError">
                  Please enter Your First Name
                </small>
                <input
                  type="text"
                  id="firstname"
                  className="form-control"
                  placeholder="John"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="col">
                <h4>Last Name:</h4>
                <small id="LNError" className="inputError">
                  Please enter Your Last Name
                </small>
                <input
                  type="text"
                  id="lastname"
                  className="form-control"
                  placeholder="Strider"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>
            <div className="row my-3">
              <div className="col">
                <h4>Email:</h4>
                <small id="EError" className="inputError">
                  Please enter Valid Email Address
                </small>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter Valid Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col">
                <h4>Password:</h4>
                <small id="PError" className="inputError">
                  Password must be atleast 10 characters
                </small>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter Unique Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              className="btn btn-success btn-block w-25 mx-auto my-3"
              onClick={SignUp}
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export interface SignUpProps {}

export default SignUp;
