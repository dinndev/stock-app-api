export const initialState = {
  user: [],
  stocks: [],
};

export const types = {
  set_user: "SET_USER",
  set_stocks: "SET_STOCKS",
};

export const reducer = (state, action) => {
  const { set_user, set_stocks } = types;
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
  }
};
