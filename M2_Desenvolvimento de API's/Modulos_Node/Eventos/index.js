import ev from './events.js';

ev.on('testEvent', () => {
  console.log('Ouviu tambem');
});
ev.emit('testEvent', 'bla bla bla');
