const Validity = require('@1onlinesolution/dws-utils/lib/validity');

class VerifyUserTokenParameters {
  constructor({ token } = {}) {
    this.token = token;

    const error = this.checkForError();
    if (error) throw error;

    return this;
  }

  static get [Symbol.species]() {
    return this;
  }

  checkForError() {
    return VerifyUserTokenParameters.checkForError(this);
  }

  static checkForError(parameters) {
    if (!parameters || !(parameters instanceof VerifyUserTokenParameters)) return new Error('invalid parameters');
    if (!Validity.isValidString(parameters.token)) return new Error('invalid token');
    return null;
  }
}

module.exports = VerifyUserTokenParameters;
