import { Link } from "react-router-dom";

export function Error() {
  return (
    <div className="errorName">
      <h1>Ups...Something wrong 🎈🎈🎈</h1>
      <Link to={"/"} className="errorBack">
        Go to main
      </Link>
    </div>
  );
}
