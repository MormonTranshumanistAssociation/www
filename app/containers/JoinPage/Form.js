import React from 'react';
import styled from 'styled-components';

// from https://benmarshall.me/responsive-iframes/
const IntrinsicContainer = styled.div`
  position: relative;
  height: 0;
  overflow: hidden;
  padding-bottom: 850px;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Form = () => (
  <IntrinsicContainer>
    <iframe
      src="https://docs.google.com/forms/d/1PV1N3pV0RD47_SnKdrJ8KgET5p1SKGv4wl0UK9LVMGM/viewform?embedded=true"
      frameBorder="0"
    >
      Loading...
    </iframe>
  </IntrinsicContainer>
);

export default Form;
