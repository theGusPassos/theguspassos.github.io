export const goToExternalPage = (url: string) => {
  const ref = window.open(url, "_blank");
  if (ref) ref.opener = null;
};

export const goToExternalPageOnKeyDown = (e: any, url: string) => {
  if (e.keyCode === 13 || e.charCode === 13) goToExternalPage(url);
};
