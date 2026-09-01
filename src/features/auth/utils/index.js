const getIdentifierType = (identifier) => {
  const isMatchMobile = /^\d+$/.test(identifier.trim());

  const haveCharacters = /^(\d*[^\s\d]+\d*)+$/.test(identifier.trim())

  if (haveCharacters) {
    return "email";
  }

  if (isMatchMobile) {
    return "mobile";
  }
  return "unknown";
};

const getValidationIssues = (schema, value) => {
  const result = schema.safeParse(value);

  if (result.error) {
    return result.error.issues
      .flatMap((issue) => issue.path)
      .filter((issue) => issue !== "acceptTerms");
  }

  return [];
};


const getErrorType = (identifier) => {
  const type = getIdentifierType(identifier);

  switch (type) {
    case "mobile": {
      return "شماره همراه";
    }
    case "email": {
      return "ایمیل";
    }
    default: {
      return "شماره‌همراه یا ایمیل";
    }
  }
};


export { getIdentifierType, getValidationIssues, getErrorType };
