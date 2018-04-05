import _ from 'lodash';

export const scrollToLocationHash = () => {
  requestAnimationFrame(() => {
    const hash = location.hash;
    const elt = hash && document.querySelector(hash);
    if (elt) {
      elt.scrollIntoView();
    }
  });
};

export const toSafeId = (id) => _.kebabCase(_.truncate(id, { length: 50, separator: ' ' }));
