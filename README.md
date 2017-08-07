# JSART.ART

A series of JavaScript-based drawings that are one part user interaction and one part program intervention.

## Getting Started

Drawing data and source imports are included in the `data.js` file. Drawings live in the `drawings` directory. Drawing data is in this format:

```
import d20170803 from './drawings/d20170803';

const data = [
  ...
  {
      title: 'Drawing Title',
      date: '20170803', // date drawing was started
      description: 'Description of the drawing',
      source: d20170803, // source filename
      instructions: [
        "Arrows: Change line direction",
        "0-9: Adjust speed",
        "-/+: Adjust brush size",
        "Space: Pauses/resumes drawing"
      ], // any instructions if it isn't immediately apparent what the user should do
      author: 'Your Name'
  }
]
```

### Installing

Install packages:

```
npm install
```

Run app:

```
npm run
```

Make art.

## Built With

* [React](http://www.dropwizard.io/1.0.2/docs/)
* [AnimatedJS](https://github.com/animatedjs/animated)

## Contributing

Contributions are encouraged! Submit a pull request with your drawing and its data added to the `data.js` file in the format above.

## Acknowledgments

* Thanks to [mhaagens](https://github.com/mhaagens) for the [Animated Routes](https://github.com/mhaagens/animated_routes_react) boiler plate and inspiration for the initial public gallery.
* [Mathieu 'p01' Henri](http://www.p01.org/)'s talks and creative coding spearheaded the initial impetus to start making art with code.
