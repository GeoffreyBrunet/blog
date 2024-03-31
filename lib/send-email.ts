import { FormData } from "@/components/email-form";

export function sendEmail(data: FormData) {
  console.log(
    "ENV:",
    process.env.NEXT_PUBLIC_ICLOUD_EMAIL,
    process.env.NEXT_PUBLIC_ICLOUD_APP_SPECIFIC_PASSWORD,
  );
  const apiEndpoint = "/api/email";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}
