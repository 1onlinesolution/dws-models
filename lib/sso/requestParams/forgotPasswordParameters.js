const Validity = require('@1onlinesolution/dws-utils/lib/validity');

class ForgotPasswordParameters {
  constructor({ email } = {}) {
    this.email = email;

    const error = this.checkForError();
    if (error) throw error;

    return this;
  }

  static get [Symbol.species]() {
    return this;
  }

  checkForError() {
    return ForgotPasswordParameters.checkForError(this);
  }

  static checkForError(parameters) {
    if (!parameters || !(parameters instanceof ForgotPasswordParameters)) return new Error('invalid parameters');

    if (!Validity.isValidEmail(parameters.email)) return new Error('invalid email address');
    return null;
  }
}

module.exports = ForgotPasswordParameters;
