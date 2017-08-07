import d20170718 from './drawings/d20170718';
import d20170719 from './drawings/d20170719';
import d20170722 from './drawings/d20170722';
import d20170724 from './drawings/d20170724';
import d20170803 from './drawings/d20170803';

const data = [
    {
        title: 'Snake Game',
        date: '20170803',
        description: 'Create a drawing using arrow keys like the classic snake game',
        source: d20170803,
        instructions: `
          <p>Arrow keys change direction</p>
          <p>Keys 0-9 adjust speed</p>
          <p>Keys -/+ adjust brush size</p>
          <p>Space bar pauses drawing</p>
        `,
        author: 'ph'
    },
    {
        title: 'Eraser',
        date: '20170724',
        description: 'Bouncing rectangle erases drawing of lines which span from x,y coordinate of rectangle to mouse loctation',
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
        description: 'Horizontal bars impede canvas every second while mouse movements generate trail of multicolored rectangles',
        source: d20170719,
        author: 'ph'
    },
    {
        title: 'Oragami Birds',
        date: '20170718',
        description: 'Mouse movements generate multicolored oragami bird shapes',
        source: d20170718,
        author: 'ph'
    }
];

export default data;
