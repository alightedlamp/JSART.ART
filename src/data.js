import d20170718 from './drawings/d20170718';
import d20170719 from './drawings/d20170719';
import d20170722 from './drawings/d20170722';
import d20170724 from './drawings/d20170724';
import d20170803 from './drawings/d20170803';

const data = [
    {
        title: 'Snake Game',
        date: '20170803',
        description: 'Create a drawing in a manner akin to the classic game Snake.',
        source: d20170803,
        instructions: [
          "Arrows: Change line direction",
          "0-9: Adjust speed",
          "-/+: Adjust brush size",
          "Space: Pauses/resumes drawing"
        ],
        author: 'ph'
    },
    {
        title: 'Eraser',
        date: '20170724',
        description: 'Drawn lines span from the x, y coordinate of bouncing rectangle to the mouse\'s current loctation.',
        source: d20170724,
        author: 'ph'
    },
    {
        title: 'Pixelism',
        date: '20170722',
        description: 'Diagonal lines are drawn automatically from point of mouse click. User can make drawings on top.',
        source: d20170722,
        author: 'ph'
    },
    {
        title: 'Fruit Stripe',
        date: '20170719',
        description: 'Horizontal bars impede canvas every second while mouse movements generate trail of multicolored rectangles.',
        source: d20170719,
        author: 'ph'
    },
    {
        title: 'Oragami Birds',
        date: '20170718',
        description: 'Mouse movements generate multicolored oragami birds.',
        source: d20170718,
        author: 'ph'
    }
];

export default data;
