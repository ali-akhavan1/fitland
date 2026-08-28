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

export { getIdentifierType };
