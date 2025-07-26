import { FIELD_SYNONYMS } from "./fieldSynonyms";
import type { JobProfileDataType } from "./types";

function isMatch(
  fieldKey: string,
  inputName: string | null,
  inputId: string | null,
  inputPlaceholder: string | null,
  input: HTMLInputElement | HTMLTextAreaElement,
): boolean {
  const key = fieldKey.toLowerCase();
  const synonyms = [
    key,
    ...(FIELD_SYNONYMS[fieldKey as keyof JobProfileDataType] || []),
  ];

  const valuesToCheck = [
    inputName,
    inputId,
    inputPlaceholder,
    input.getAttribute("aria-label"),
    input.getAttribute("aria-describedby"),
    input.closest("label")?.innerText,
  ]
    .filter(Boolean)
    .map((s) => s?.toLowerCase());

  return synonyms.some((syn) =>
    valuesToCheck.some((inputValue) => inputValue?.includes(syn)),
  );
}

function fillInput(
  input: HTMLInputElement | HTMLTextAreaElement,
  value: string,
) {
  try {
    input.value = value;

    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  } catch (err) {
    console.warn("[AppiFill] Failed to fill:", err);
  }
}

chrome.storage.local.get(["profileData"], (result) => {
  const profile: JobProfileDataType | undefined = result.profileData;
  if (!profile) {
    console.log("[AppiFill] No saved profile found.");
    return;
  }

  console.log("[AppiFill] Loaded profile:", profile);

  const inputs: (HTMLInputElement | HTMLTextAreaElement)[] = [
    ...document.querySelectorAll("input"),
    ...document.querySelectorAll("textarea"),
  ];
  Object.entries(profile).forEach(([key, value]) => {
    if (!value) return;
    inputs.forEach((input) => {
      if (isMatch(key, input.name, input.id, input.placeholder, input)) {
        fillInput(input, value);
        console.log(
          `[AppiFill] Filled: ${key} → ${input.name || input.id || input.placeholder}`,
        );
      }
    });
  });
});
