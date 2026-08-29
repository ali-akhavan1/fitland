import { toast } from "sonner";

const replaceClass = (elem, removeClass, addClass) => {
  elem.classList.remove(removeClass);
  elem.classList.add(addClass);
};

const validateSchema = (schema, value) => {
  const result = schema.safeParse(value);
  const isValid = result.success;

  if (!isValid) {
    toast.error(result.error.issues?.at(0).message);
    return false;
  }
  return true;
};

export { validateSchema, replaceClass};
