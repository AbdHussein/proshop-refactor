export const formDataCstom = (image: File) => {
  const formData = new FormData();
  formData.append('image', image);
  return formData;
};
