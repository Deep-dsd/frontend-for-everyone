export const toggleAccordion = (
  activeId: number | null, 
  clickedId: number
): number | null => {
  if (activeId === clickedId) {
    return null;
  }
  return clickedId;
};