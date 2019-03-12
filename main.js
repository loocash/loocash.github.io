const Elements = _.mapValues({
  about:      "#about",
  contact:    "#contact",
  linkedin:   "#linkedin",
  github:     "#github",
  blog:       "#blog",
  portfolio:  "#portfolio",
}, queryString => document.querySelector(queryString));

const tiltOptions = {
  about: {
    scale: 1.037,
		max: 30,
		glare: true,
		"max-glare": 0.5,
  },
  contact: {
    scale: 1.06,
		max: 25,
		glare: true,
		"max-glare": 0.5,
  },
  linkedin: {
    scale: 1.15,
		max: 20,
		glare: true,
		"max-glare": 0.5,
  },
  github: {
    scale: 1.15,
		max: 20,
		glare: true,
		"max-glare": 0.5,
  },
  blog: {
    scale: 1.022,
    max: 25,
    glare: true,
    "max-glare": 0.5,
  },
  portfolio: {
    scale: 1.01375,
    max: 20,
    glare: true,
    "max-glare": 0.5,
  },
};

_.each(tiltOptions, (options, el) => { 
  VanillaTilt.init(Elements[el], options);
});
