import * as React from 'react';
import styled from 'styled-components';

const TranslateWidget = styled.div`
  padding: 0 10px 0 4px;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: inline-block;

  .goog-te-gadget-simple {
    border: none;
  }
`;

class GoogleTranslate extends React.Component {
  googleTranslateElementInit() {
    // Get settings from https://translate.google.com/manager/website/add
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        includedLanguages: 'en,de,es,fr,it,ja,ko,pt,ru,zh-CN',
        layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
        // layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: true,
        // TODO: Provide Google Analytics ID
        // gaTrack: true,
        // gaId: 'UA-11111-11',
      },
      'google_translate_element',
    );
  }

  componentDidMount() {
    const addScript = document.createElement('script');
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = this.googleTranslateElementInit;
  }

  render() {
    return <TranslateWidget id="google_translate_element" />;
  }
}

export default GoogleTranslate;
