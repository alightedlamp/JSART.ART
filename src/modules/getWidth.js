const getWidth = function() {
  if (window.innerWidth) return window.innerWidth;
  if (document.documentElement && document.documentElement.clientWidth) return document.documentElement.clientWidth;
  if (document.body) return document.body.clientWidth;
}

export default getWidth;