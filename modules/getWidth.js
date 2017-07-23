const getWidth = function() {
  if (self.innerWidth) return self.innerWidth;
  if (document.documentElement && document.documentElement.clientWidth) return document.documentElement.clientWidth;
  if (document.body) return document.body.clientWidth;
}

module.exports = getWidth;