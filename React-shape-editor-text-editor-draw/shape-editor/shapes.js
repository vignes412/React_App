var SHAPES = {
  robot: [
    '// shoulder',
    'rect background: white; height:25px; width: 150px; left: 20px; top: 300px;',
    '',
    '// left arm',
    'ellipse width:30px; height:150px; left: 5px; top:280px; background: lightgray;',
    '',
    '// right arm',
    'ellipse width:30px; height:150px; left:145px; top: 280px; background: darkgray;',
    '',
    '// head',
    'ellipse left:40px; background: #EEE; top:200px;',
    '',
    '// ears',
    'rect left:28px; top: 245; width: 10px; height: 30px; background: lightyellow;',
    '',
    'rect left:142px; top: 245; width: 10px; height: 30px; background: lightyellow;',
    '',
    '',
    '// left leg',
    'ellipse background: gray; width:30px; height:170px; top:410px; left: 40px;',
    '',
    '// right leg',
    'ellipse background: gray; width:30px; height:170px; top:410px; left: 110px;',
    '',
    '// body',
    'rect height: 100px; top:305px; left: 40px;',
    'rect height: 50px; top:410px; left: 40px; ',
    '',
    '// eyes',
    'ellipse width:20; height:20; background: gray; left: 50; top: 230; border: 3px solid darkgray;',
    '',
    'ellipse width:10; height:10; background: white; left: 55; top: 235; border: 3px solid darkgray;',
    '',
    'ellipse width:20; height:20; background: gray; left: 100; top: 230; border: 3px solid darkgray;',
    '',
    '// mouth',
    'ellipse width:40; height:5; background: gray; left: 70; top: 270; -webkit-transform:rotate(-10deg); border: 2px solid darkgray;'
  ].join('\n'),

  react: [
    'React label',
    'text value:React; color: #00D8FF; fontSize: 48px; textShadow: 1px 1px 3px #555; padding: 10px; left: 100px; top: 100px;',
    '',
    '// left logo',
    'rect background:url(react.png) no-repeat; border: none; width: 38px; height: 38px; left: 60px; top: 120px;',
    '',
    '// right logo',
    'rect background:url(react.png) no-repeat; border: none; width: 38px; height: 38px; left: 250px; top: 120px;'
  ].join('\n')
};

module.exports=SHAPES;