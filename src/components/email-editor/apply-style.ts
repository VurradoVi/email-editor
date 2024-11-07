export type TStyle = 'bold' | 'italic' | 'underline'

export const applyStyle = (type: TStyle, selectedText: string): string => {
  switch (type) {
    case 'bold':
      return `<b>${selectedText}</b>`;
    case "italic":
      return `<i>${selectedText}</i>`;
    case "underline":
      return `<u>${selectedText}</u>`;
    default:
      return selectedText;
  }
};