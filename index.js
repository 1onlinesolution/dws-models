exports.DataTypes = require('./lib/dataTypes');

// SSO
exports.Address = require('./lib/sso/address');
exports.UserStatistics = require('./lib/sso/userStatistics');
exports.UserRole = require('./lib/sso/userRole');
exports.UserLogin = require('./lib/sso/userLogin');
exports.User = require('./lib/sso/user');
exports.EmailNotSent = require('./lib/sso/emailNotSent');
exports.ApiClientApplication = require('./lib/sso/apiClientApplication');

// RequestParams
exports.CreateUserAddressParameters = require('./lib/sso/requestParams/createUserAddressParameters');
exports.DeleteUserAddressParameters = require('./lib/sso/requestParams/deleteUserAddressParameters');
exports.UpdateUserAddressParameters = require('./lib/sso/requestParams/updateUserAddressParameters');

exports.CreateUserLoginParameters = require('./lib/sso/requestParams/createUserLoginParameters');

exports.CreateEmailNotSentParameters = require('./lib/sso/requestParams/createEmailNotSentParameters');

exports.CreateUserParameters = require('./lib/sso/requestParams/createUserParameters');
exports.DeleteUserParameters = require('./lib/sso/requestParams/deleteUserParameters');
exports.UpdateUserParameters = require('./lib/sso/requestParams/updateUserParameters');

exports.CreateApiClientApplicationParameters = require('./lib/sso/requestParams/createApiClientApplicationParameters');
exports.DeleteApiClientApplicationParameters = require('./lib/sso/requestParams/deleteApiClientApplicationParameters');
exports.UpdateApiClientApplicationParameters = require('./lib/sso/requestParams/updateApiClientApplicationParameters');
exports.AuthorizeApiClientApplicationParameters = require('./lib/sso/requestParams/authorizeApiClientApplicationParameters');

exports.CreateApiClientApplicationAuthorizationCodeParameters = require('./lib/sso/requestParams/createApiClientApplicationAuthorizationCodeParameters');
exports.RefreshApplicationAccessTokenParameters = require('./lib/sso/requestParams/refreshApplicationAccessTokenParameters');
exports.VerifyUserTokenParameters = require('./lib/sso/requestParams/verifyUserTokenParameters');

exports.LoginUserParameters = require('./lib/sso/requestParams/loginUserParameters');
exports.ForgotPasswordParameters = require('./lib/sso/requestParams/forgotPasswordParameters');
exports.ResetPasswordParameters = require('./lib/sso/requestParams/resetPasswordParameters');
exports.AutoResetPasswordParameters = require('./lib/sso/requestParams/autoResetPasswordParameters');

// ORDER
exports.ProductFeature = require('./lib/order/productFeature');
exports.ProductCategory = require('./lib/order/productCategory');
exports.Product = require('./lib/order/product');
exports.PaymentStatus = require('./lib/order/paymentStatus');
exports.OrderTerm = require('./lib/order/orderTerm');
exports.OrderStatus = require('./lib/order/orderStatus');
exports.OrderItem = require('./lib/order/orderItem');
exports.Order = require('./lib/order/order');
exports.Customer = require('./lib/order/customer');

exports.CreateProductParameters = require('./lib/order/requestparams/createProductParameters');
exports.UpdateProductParameters = require('./lib/order/requestparams/updateProductParameters');