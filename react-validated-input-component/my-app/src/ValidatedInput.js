import { useState } from "react"
import './ValidatedInput.css'

export default function ValidatedInput({ data }) {
  const [password, setPassword] = useState('');

  // let errorMessage;
  // const passwordValidation = /.{1,}/;
  // const passwordValidationResult = passwordValidation.test(password);
  // const lengthValidation = /.{8,}/;
  // const lengthResult = lengthValidation.test(password);
  // const numberValidation = /\d/;
  // const numberValidationResult = numberValidation.test(password);
  // const uppercaseValidation = /[A-Z]/;
  // const uppercaseValidationResult = uppercaseValidation.test(password);
  // const specialValidation = /[!@#$%^&*()]/;
  // const specialValidationResult = specialValidation.test(password);

  // switch (false) {
  //   case passwordValidationResult: errorMessage = 'A password is required.'; break;
  //   case lengthResult: errorMessage = 'Your password is too short.'; break;
  //   case numberValidationResult: errorMessage = 'Your password must contain a digit.'; break;
  //   case uppercaseValidationResult: errorMessage = 'Your password must contain a capital letter.'; break;
  //   case specialValidationResult: errorMessage = 'Your password must contain a special character ( ! ,  @ ,  # ,  $ ,  % ,  ^ ,  & ,  * ,  ( , or  ) ).'; break;
  //   default: errorMessage = ''; break;
  // }

  let errorMessage = '';

  for (const validation of data) {
    if (!validation.regex.test(password)) {
      errorMessage = validation.error;
      break;
    }
  }

  return (
    <>
      <img src="https://media.licdn.com/dms/image/D5603AQHskoJ15lo5Ww/profile-displayphoto-shrink_400_400/0/1678146443075?e=1685577600&v=beta&t=xAfCn2tlCv7VHsJ-aGWfsa1fjKo511pO-5Wlrc3iXT0" className={(errorMessage === '') ? "App-logo-fast" : "App-logo"} alt="Lamberto" />
      <section>
        <label htmlFor="password">
          Password
        </label>
        <br />
        <input type="password"
              name="password"
              id="password"
              value={password}
              onChange={event => setPassword(event.target.value)}>
        </input>
        <span className="icon">{(!errorMessage) ? "✔️" : "❌"}</span>
        {(errorMessage) && <p className="error-message">{errorMessage}</p>}
      </section>
    </>
  )
}
