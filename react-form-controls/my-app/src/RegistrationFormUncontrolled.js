export default function RegistrationFormUncontrolled() {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username<input type="text" name="username" />
      </label>
      <label>
        Password<input type="password" name="password" />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
