import React, { useState } from 'react';

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import Froala from 'react-froala-wysiwyg';

const Editor = () => {
    // const ref = useRef({ editor: null });
    const [model, setModel] = useState('');

    const handleModelChange = (model) => {
        setModel(model);
        // console.log(model);
    };

    return (
        <Froala
            model={model}
            onModelChange={handleModelChange}
            tag="textarea"
        />
    );
};

export default Editor;
