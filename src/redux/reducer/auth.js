const initStateRegister = {
  name: '',
  no_wa: '',
  email: '',
  password: '',
  password_confirmation: '',
};

export const registerReducer = (state = initStateRegister, action) => {
  if (action.type === 'SET_REGISTER') {
    return {
      ...state,
      name: action.value.name,
      no_wa: action.value.no_wa,
      email: action.value.email,
      password: action.value.password,
      password_confirmation: action.value.password,
    };
  }
  return state;
};

const initPhoto = {
  uri: '',
  type: '',
  name: '',
};

export const photoReducer = (state = initPhoto, action) => {
  if (action.type === 'SET_PHOTO') {
    return {
      ...state,
      uri: action.value.uri,
      type: action.value.type,
      name: action.value.name,
    };
  }
  return state;
};
