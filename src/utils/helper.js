import { toast } from "sonner";

const validateSchema = (schema, value) => {
  const result = schema.safeParse(value);
  const isValid = result.success;

  if (!isValid) {
    toast.error(result.error.issues?.at(0).message);
    return false;
  }
  return true;
};

export { validateSchema };
