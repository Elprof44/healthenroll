"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <button
          className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90 gap-4"
          type="submit"
        >
          <div className="h-5 w-5 animate-spin rounded-full border-4 border-solid border-whiter border-t-transparent"></div>
          En cours ...
        </button>
      ) : (
        <button
          className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90"
          type="submit"
        >
          Enregistrer
        </button>
      )}
    </>
  );
}
