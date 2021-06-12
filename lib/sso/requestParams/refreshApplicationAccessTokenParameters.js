const Validity = require('@1onlinesolution/dws-utils/lib/validity');

class RefreshApplicationAccessTokenParameters {
  constructor({ refreshToken, clientId, clientSecret } = {}) {
    this.refreshToken = refreshToken;
    this.clientId = clientId;
    this.clientSecret = clientSecret;

    const error = this.checkForError();
    if (error) throw error;

    return this;
  }

  static get [Symbol.species]() {
    return this;
  }

  checkForError() {
    return RefreshApplicationAccessTokenParameters.checkForError(this);
  }

  static checkForError(parameters) {
    if (!parameters || !(parameters instanceof RefreshApplicationAccessTokenParameters)) {
      return new Error('invalid parameters');
    }

    if (!Validity.isValidString(parameters.refreshToken)) return new Error('invalid refresh token');
    if (!Validity.isValidString(parameters.clientId)) return new Error('invalid client identifier');
    if (!Validity.isValidString(parameters.clientSecret)) return new Error('invalid client secret');
    return null;
  }
}

module.exports = RefreshApplicationAccessTokenParameters;
