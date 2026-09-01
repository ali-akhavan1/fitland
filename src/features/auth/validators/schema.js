import z from "zod";

const mobileSchema = z
  .string()
  .trim()
  .regex(/^09\d{9}$/, { error: "شماره‌موبایل معتبر نمی‌باشد" });

const emailSchema = z.string().trim().email({ error: "ایمیل معتبر نمی‌باشد" });

const otpSchema = z
  .string()
  .trim()
  .length(5, { error: "کد تایید معتبر نمی‌باشد" });

const registerSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, { error: "نام و نام خانوادگی معتبر نمی‌باشد" })
    .max(30, { error: "نام نمی‌تواند بیشتر از 30 حرف باشد" })
    .regex(/^[آ-ی\s\u200C]+$/, "نام و نام‌خانوادگی باید فارسی باشد"),

  mobile: mobileSchema,
  email: z.union([emailSchema, z.literal("")]),

  acceptTerms: z.literal(true, { error: "لطفا قوانین سایت را بپذیرید" }),
});

export { mobileSchema, emailSchema, otpSchema, registerSchema };
