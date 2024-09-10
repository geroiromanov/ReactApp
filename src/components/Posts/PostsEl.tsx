import { useContext, useState } from "react";
import { PostsContextDispatch } from "./PostsProvider";

export default function PostEl({post}) {
    const [isEdit, setIsEdit] = useState(false);
    const [title, setTitle] = useState(post.title);

    const dispatch = useContext(PostsContextDispatch)

    function onEdit() {
        setIsEdit(!isEdit)
    }

    function onChange(e) {
        dispatch({id: post.id, selected: e.target.checked, type: 'update'});
        
    }
    
    function onSave() {
        dispatch({id: post.id, title: post.title, type: 'save'});
        setIsEdit(false);
    }

    function onDelete() {
        dispatch({id: post.id, type: 'delete'});
    }

    const tmplInput = isEdit
        ? <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        : <label>{title}</label>

    const tmplBtn = isEdit 
        ? <button onClick={onSave}>Save</button>
        : <button onClick={onEdit}>Edit</button>

    return (
        <li>
            <input type="checkbox" checked={post.selected} onChange={onChange}/>
            {tmplInput}
            {tmplBtn}
            <button onClick={onDelete}>Delete</button>
        
        </li>
    )
}