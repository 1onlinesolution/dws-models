const Validity = require('@1onlinesolution/dws-utils/lib/validity');

class LoginUserParameters {
  constructor({ email, password, issueJwtTokens = false } = {}) {
    this.email = email;
    this.password = password;

    // If the user is logged in
    // and we just want to update the JWT tokens,
    // we simply set it to true
    this.issueJwtTokens = issueJwtTokens;

    const error = this.checkForError();
    if (error) throw error;

    return this;
  }

  static get [Symbol.species]() {
    return this;
  }

  checkForError() {
    return LoginUserParameters.checkForError(this);
  }

  static checkForError(parameters) {
    if (!parameters || !(parameters instanceof LoginUserParameters)) return new Error('invalid parameters');
    if (!Validity.isValidEmail(parameters.email)) return new Error('invalid email address');
    if (!Validity.isValidString(parameters.password, 8)) return new Error('invalid password');
    return null;
  }
}

module.exports = LoginUserParameters;
