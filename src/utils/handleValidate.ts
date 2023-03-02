interface ErrorState {
  name: string;
  email: string;
  phoneNumber: string;
}

const isValidEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const handleValidate = (
  name: string,
  email: string,
  phoneNumber: string,
  errorState: ErrorState
) => {
  const _name = name.trim();
  const _email = email.trim();
  const _phoneNumber = phoneNumber.toString().trim();
  const requiredMsg = 'This field is required';

  // clean error state first
  errorState.name = errorState.email = errorState.phoneNumber = '';

  if (!_name) {
    errorState.name = requiredMsg;
  } else if (_name && _name.length < 3) {
    errorState.name = 'name must be at least 3 characters';
  }

  if (!_email) {
    errorState.email = requiredMsg;
  } else if (_email && !isValidEmail(_email)) {
    errorState.email = 'Please provide a valid email';
  }

  if (!_phoneNumber) {
    errorState.phoneNumber = requiredMsg;
  } else if (
    _phoneNumber &&
    (_phoneNumber.length < 10 || _phoneNumber.length > 11)
  ) {
    errorState.phoneNumber = 'Please provide a valid phone number';
  }

  const isValid =
    !errorState.name && !errorState.email && !errorState.phoneNumber;

  return isValid;
};
