const apiBaseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_API_BASE_URL
    : "$REACT_APP_API_BASE_URL";

export {
  // eslint-disable-next-line import/prefer-default-export
  apiBaseUrl,
};
