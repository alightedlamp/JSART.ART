const getHeight = function() {
  if (window.innerHeight) return window.innerHeight;
  if (document.documentElement && document.documentElement.clientHeight) return document.documentElement.clientHeight;
  if (document.body) return document.body.clientHeight;
}

export default getHeight;