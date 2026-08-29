const getIdentifierType = (identifier) => {
  const isMatchMobile = /^\d+$/.test(identifier.trim());

  const haveCharacters = identifier.includes("@") || identifier.includes("com");

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

export { getIdentifierType, getValidationIssues };
