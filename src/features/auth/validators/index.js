import { toast } from "sonner";
import { getIdentifierType } from "../utils";
import { emailSchema, mobileSchema } from "./schema";

const getIdentifierSchema = (value) => {
  const type = getIdentifierType(value);

  if (type === "mobile") {
    return mobileSchema;
  }

  if (type === "email") {
    return emailSchema;
  }
};

const validateIdentifier = (value, showToast = false) => {
  const schema = getIdentifierSchema(value);

  if (!schema) return false;

  const result = schema.safeParse(value.trim());
  const isValid = result.success;

  if (!isValid) {
    showToast && toast.error(result.error.issues?.at(0).message);
    return false;
  }

  return true;
};

export default validateIdentifier;
