const Validity = require('@1onlinesolution/dws-utils/lib/validity');

class CreateApiClientApplicationParameters {
  constructor({
    apiClientId,
    applicationName,
    applicationDescription,
    websiteUrl,
    returnUrl,
  } = {}) {

    this.apiClientId = apiClientId;
    this.applicationName = applicationName;
    this.applicationDescription = applicationDescription;
    this.websiteUrl = websiteUrl;
    this.returnUrl = returnUrl;

    const error = this.checkForError();
    if (error) throw error;

    return this;
  }

  static get [Symbol.species]() {
    return this;
  }

  checkForError() {
    return CreateApiClientApplicationParameters.checkForError(this);
  }

  static checkForError(parameters) {
    if (!parameters || !(parameters instanceof CreateApiClientApplicationParameters)) {
      return new Error('invalid parameters');
    }

    const {
      apiClientId,
      applicationName,
      applicationDescription,
      websiteUrl,
      returnUrl,
    } = parameters;

    if (!Validity.isValidString(apiClientId, 2)) return new Error('invalid client identifier');
    if (!Validity.isValidString(applicationName)) return new Error('invalid application name');
    if (!Validity.isValidString(applicationDescription)) return new Error('invalid application description');
    if (!Validity.isValidString(websiteUrl)) return new Error('invalid website URL');
    if (!Validity.isValidString(returnUrl)) return new Error('invalid return URL');
    return null;
  }
}

module.exports = CreateApiClientApplicationParameters;
