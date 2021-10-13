export default function useFormData<T>(form: HTMLFormElement) {
  const formData = new FormData(form);

  return Object.fromEntries(formData) as unknown as T;
}
