const getHeight function() {
  if (self.innerHeight) return self.innerHeight;
  if (document.documentElement && document.documentElement.clientHeight) return document.documentElement.clientHeight;
  if (document.body) return document.body.clientHeight;
}

module.exports = getHeight;