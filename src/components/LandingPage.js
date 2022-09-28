const LandingPage = ({ user }) => {
  return (
    <div>
      <p className="title">Hello {user.email}!</p>
      <p>Welcome</p>

    </div>
  );
};

export default LandingPage;
