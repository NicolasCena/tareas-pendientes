export const capitalize = (text: string): string => {
  if (text.length === 0) return text;

  const firstChar = text.charAt(0).toLocaleUpperCase();
  const restText = text.slice(1).toLocaleLowerCase();
  return firstChar + restText;
};

const capitalizeWords = (text: string): string => {
    if(text.length === 0) return text;

    const words = text.split(' ');
    const capitalizeWords = words.map( word => capitalize(word));

    return capitalizeWords.join(' ');

}