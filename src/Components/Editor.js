import React from 'react';
import ReactDOM from 'react-dom';

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditorComponent from 'react-froala-wysiwyg';

const Editor = () => {
  return (
    <FroalaEditorComponent tag='textarea'/>
  );
};

export default Editor;
