-- CreateIndex
CREATE INDEX "users_user_name_email_age_gender_phone_no_postal_code_date__idx" ON "users"("user_name", "email", "age", "gender", "phone_no", "postal_code", "date_of_birth");
