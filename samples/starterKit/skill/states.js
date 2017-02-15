'use strict';

exports.register = function register(skill) {
  skill.onState('entry', {
    LaunchIntent: 'launch',
    'AMAZON.HelpIntent': 'help',
  });

  skill.onState('launch', () => ({ reply: 'Intent.Launch', to: 'entry' }));
  skill.onState('help', () => ({ reply: 'Intent.Help', to: 'die' }));
};
