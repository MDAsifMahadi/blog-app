
import "./style.login.css";

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Login</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="input-group">
            <label htmlFor="username" className="label">Username:</label>
            <input type="text" id="username" name="username" className="input" required />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="label">Password:</label>
            <input type="password" id="password" name="password" className="input" required />
          </div>
          <button type="submit" className="button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
