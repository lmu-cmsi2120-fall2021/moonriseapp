import { SignIn, SignOut } from "../services/authService";

export default function Header({ user }) {
  return (
    <header>
      <div className="title">
        <h1>Moonrise App</h1>
      </div>
      {!user ? <SignIn /> : <SignOut />}
    </header>
  );
}
