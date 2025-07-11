export const smoothScrollTo = (elementId: string, offset: number = 80) => {
  const element = document.getElementById(elementId.replace("#", ""));
  if (element) {
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export const handleSmoothClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
) => {
  if (href.startsWith("#")) {
    e.preventDefault();
    smoothScrollTo(href);
  }
};
