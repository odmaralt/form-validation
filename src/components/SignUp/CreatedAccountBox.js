const CreatedAccountBox = ({ setSignIn }) => {
  const handleOkButton = () => {
    setSignIn(true);
  };
  return (
    <div
      style={{
        textAlign: "center",
        height: "30vh",
        width: "40vw",
        margin: "0 auto",
        border: "1px solid black",
        marginTop: "100px",
        paddingTop: "80px",
        fontSize: "22px",
        fontFamily: "verdana",
      }}
    >
      You've successfully created an account!
      <button
        onClick={() => {
          handleOkButton();
        }}
      >
        Go to Sign In page
      </button>
    </div>
  );
};
export default CreatedAccountBox;
