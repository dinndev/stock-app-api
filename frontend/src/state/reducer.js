export const initialState = {
  user: [],
  stocks: [],
};

export const types = {
  set_user: "SET_USER",
};

export const reducer = (state, action) => {
  const { set_user } = types;
  switch (action.type) {
    case set_user:
      return {
        ...state,
        user: action.payload,
      };
  }
};
