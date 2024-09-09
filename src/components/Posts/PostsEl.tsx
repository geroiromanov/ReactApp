import { useState } from "react";

export default function PostEl({post, onChange, onSave, onDelete}) {
    const [isEdit, setIsEdit] = useState(false);
    const [title, setTitle] = useState(post.title);

    function onEdit() {
        setIsEdit(!isEdit)
    }

    const tmplInput = isEdit
        ? <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        : <label>{title}</label>

    const tmplBtn = isEdit 
        ? <button onClick={() => {onSave(post.id, title); setIsEdit(false)}}>Save</button>
        : <button onClick={onEdit}>Edit</button>

    return (
        <li>
            <input type="checkbox" checked={post.selected} onChange={() => onChange(post.id)}/>
            {tmplInput}
            {tmplBtn}
            <button onClick={() => onDelete(post.id)}>Delete</button>
        
        </li>
    )
}