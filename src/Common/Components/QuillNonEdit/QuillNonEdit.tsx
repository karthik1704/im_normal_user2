import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import './QuillNonEdit.scss';

interface QuillEditorParams {
    quillText: string,
}

const QuillNonEdit = ({quillText}: QuillEditorParams) => {

    let size = Quill.import('attributors/style/size');
    size.whitelist = ["105px", "66px", "52px", "37px", "26px", "22px", "16px", "14px", "15px",  "12px", "10px"];

    Quill.register(size, true);

    return (
        <>
            <div className={"quill-non-edit"}>
                <ReactQuill value={quillText} readOnly={true} theme={"bubble"}/>
            </div>
        </>
    );
}

export default QuillNonEdit;