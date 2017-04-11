import React from 'react';
import classnames from 'classnames';
import goToCapability from 'app/lib/go-to-capability';

function WorkCapabilities({ selected }) {
  const items = workCapabilitiesData.map(item => {
    const classes = classnames('work-capabilities-item', {
      selected: item.name === selected
    });

    return (
      <li className={classes} key={`capability-${item.name}`}><button onClick={() => goToCapability(item.name)}>{item.title}</button></li>
    )
  });

  return (
    <div className="work-capabilities">
      <ul>
        {items}
      </ul>
    </div>
  );
}

export default WorkCapabilities;

const workCapabilitiesData = [{
  name: 'discovery',
  title: 'Discovery & Strategy'
}, {
  name: 'design',
  title: 'Design & Build'
}, {
  name: 'launch',
  title: 'Launch & Scale'
}];
