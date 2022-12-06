import { SignIn, SignOut } from "../services/authService";

export default function Header({user}) {
    return (
      <header>
        <h1>Moonrise App</h1>
        {!user ? <SignIn /> : <SignOut />}
      </header>
    );

}