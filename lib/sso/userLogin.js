const Validity = require('@1onlinesolution/dws-utils/lib/validity');
const DateTimeUtils = require('@1onlinesolution/dws-utils/lib/dateTimeUtils');

class UserLogin {
  constructor({ ip, email, _id = null, createdAt = null } = {}) {
    this.email = email;
    this.ip = ip;
    this._id = _id;

    const nowUtc = DateTimeUtils.currentUtcDate();
    this.createdAt = createdAt || nowUtc;

    const error = this.checkForError();
    if (error) throw error;
    return this;
  }

  static get [Symbol.species]() {
    return this;
  }

  checkForError() {
    return UserLogin.checkForError(this);
  }

  static checkForError(userLogin) {
    if (!userLogin || !(userLogin instanceof UserLogin)) return new Error('invalid user login');
    if (!Validity.isValidString(userLogin.ip)) return new Error('invalid IP address');
    if (!Validity.isValidEmail(userLogin.email)) return new Error('invalid user email address');
    return null;
  }

  static get indexMap() {
    const createIndexName = (postfix) => `index_userLogin_${postfix}`;

    const map = new Map();
    map
      .set(createIndexName('email_ip'), {
        fieldOrSpec: { email: 1, ip: 1 },
        options: {
          name: createIndexName('email_ip'),
          background: true,
          // writeConcern: {w: 'majority', wtimeout: 100},
        },
      })
      .set(createIndexName('ip'), {
        fieldOrSpec: { ip: 1 },
        options: {
          name: createIndexName('ip'),
          background: true,
          // writeConcern: {w: 'majority', wtimeout: 100},
        },
      })
      .set(createIndexName('createdAt'), {
        fieldOrSpec: { createdAt: 1 },
        options: {
          name: createIndexName('createdAt'),
          background: true,
          // writeConcern: {w: 'majority', wtimeout: 100},
        },
      });

    return map;
  }
}

module.exports = UserLogin;
