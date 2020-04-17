export const goToExternalPage = (url: string) => {
  const ref = window.open(url, "_blank");
  if (ref) ref.opener = null;
};
