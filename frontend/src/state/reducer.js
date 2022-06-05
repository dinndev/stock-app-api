export const initialState = {
  user: [],
  stocks: [],
  current_user: [],
};

export const types = {
  set_user: "SET_USER",
  set_stocks: "SET_STOCKS",
  set_current_user: "SET_CURRENT_USER",
};

export const reducer = (state, action) => {
  const { set_user, set_stocks, set_current_user } = types;
  switch (action.type) {
    case set_user:
      return {
        ...state,
        user: action.payload,
      };
    case set_stocks:
      return {
        ...state,
        stocks: action.payload,
      };
    case set_current_user:
      return {
        ...state,
        current_user: action.payload,
      };
  }
};
